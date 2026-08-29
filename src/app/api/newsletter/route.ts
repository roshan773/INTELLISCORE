import { NextRequest, NextResponse } from "next/server";
import { submitNewsletterServerSide } from "@/lib/server/api-client";
import { checkRateLimit } from "@/lib/server/rate-limiter";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1";
    const { allowed } = checkRateLimit(ip, 5, 60000);

    if (!allowed) {
      return NextResponse.json(
        { success: false, message: "Rate limit exceeded. Please wait a moment." },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request payload format." },
        { status: 400 }
      );
    }

    const { email, source } = body || {};

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim()) || email.length > 100) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    await submitNewsletterServerSide({
      email: email.trim(),
      source: typeof source === "string" ? source.slice(0, 50) : "executive-briefing",
    });

    return NextResponse.json(
      { success: true, message: "Subscribed successfully to the Executive Briefing." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server API Error in /api/newsletter:", error instanceof Error ? error.message : "Unknown error");

    return NextResponse.json(
      { success: false, message: "Unable to complete subscription. Please try again later." },
      { status: 500 }
    );
  }
}
