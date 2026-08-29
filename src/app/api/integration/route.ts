import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/server/rate-limiter";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1";
    const { allowed } = checkRateLimit(ip, 10, 60000);

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
        { success: false, message: "Invalid JSON format." },
        { status: 400 }
      );
    }

    const { action } = body || {};
    if (!action || typeof action !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid integration request action." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Integration action processed securely.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server API Error in /api/integration:", error instanceof Error ? error.message : "Unknown error");

    return NextResponse.json(
      { success: false, message: "Unable to complete request. Please try again later." },
      { status: 500 }
    );
  }
}
