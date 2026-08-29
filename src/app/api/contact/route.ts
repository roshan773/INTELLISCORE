import { NextRequest, NextResponse } from "next/server";
import { submitContactInquiryServerSide } from "@/lib/server/api-client";
import { checkRateLimit } from "@/lib/server/rate-limiter";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // 1. Abuse Protection & Rate Limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1";
    const { allowed } = checkRateLimit(ip, 5, 60000); // Max 5 submissions per minute per IP

    if (!allowed) {
      return NextResponse.json(
        { success: false, message: "Rate limit exceeded. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request payload format." },
        { status: 400 }
      );
    }

    const { name, email, service, message, source } = body || {};

    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (maximum 100 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim()) || email.length > 100) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    const sanitizedService = typeof service === "string" ? service.slice(0, 100) : "General Technical Discovery";
    const sanitizedMessage = typeof message === "string" ? message.slice(0, 2000) : "";

    // 3. Server-Side Execution with Private Key
    await submitContactInquiryServerSide({
      name: name.trim(),
      email: email.trim(),
      service: sanitizedService,
      message: sanitizedMessage,
      source: typeof source === "string" ? source.slice(0, 50) : "website",
    });

    // 4. Return Safe Generic Response
    return NextResponse.json(
      {
        success: true,
        message: "Discovery request successfully received. Our engineering team will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    // Log safe diagnostic on server without leaking secrets
    console.error("Server API Error in /api/contact:", error instanceof Error ? error.message : "Unknown error");

    return NextResponse.json(
      { success: false, message: "Unable to complete the request. Please try again later." },
      { status: 500 }
    );
  }
}
