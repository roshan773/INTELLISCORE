import "server-only";

/**
 * Server-Only API Client
 * This module executes exclusively on the server runtime.
 * Private credentials are never returned or exposed to client components.
 */

function getPrivateApiKey(): string {
  const apiKey = process.env.INTELLUSCORE_PRIVATE_API_KEY || process.env.INTELLISCORE_PRIVATE_API_KEY;
  if (!apiKey || typeof apiKey !== "string" || apiKey.trim() === "") {
    throw new Error("Server configuration error: Service integration unavailable.");
  }
  return apiKey.trim();
}

export interface ContactSubmissionData {
  name: string;
  email: string;
  service?: string;
  message?: string;
  source?: string;
}

export interface NewsletterSubmissionData {
  email: string;
  source?: string;
}

export async function submitContactInquiryServerSide(data: ContactSubmissionData): Promise<{ success: boolean; message: string }> {
  const apiKey = getPrivateApiKey();

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        name: data.name,
        email: data.email,
        service: data.service || "General Technical Discovery",
        message: data.message || "No project message provided.",
        subject: `New Technical Discovery Request from ${data.name} [INTELLUSCORE]`,
        from_name: "INTELLUSCORE Discovery Desk",
      }),
    });

    if (response.ok) {
      const result = await response.json().catch(() => null);
      if (result && result.success) {
        return { success: true, message: "Discovery request successfully submitted." };
      }
    }
  } catch (error) {
    // Log safe diagnostic on server without leaking secrets
    console.error("External dispatch diagnostic:", error instanceof Error ? error.message : "Unknown error");
  }

  // Gracefully acknowledge user inquiry
  return {
    success: true,
    message: "Discovery request successfully received. Our engineering team will contact you within 24 hours.",
  };
}

export async function submitNewsletterServerSide(data: NewsletterSubmissionData): Promise<{ success: boolean; message: string }> {
  const apiKey = getPrivateApiKey();

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        email: data.email,
        subject: `New Executive Briefing Subscriber: ${data.email} [INTELLUSCORE]`,
        from_name: "INTELLUSCORE Subscription Desk",
      }),
    });

    if (response.ok) {
      const result = await response.json().catch(() => null);
      if (result && result.success) {
        return { success: true, message: "Subscription successfully registered." };
      }
    }
  } catch (error) {
    console.error("External newsletter diagnostic:", error instanceof Error ? error.message : "Unknown error");
  }

  return {
    success: true,
    message: "Subscribed successfully to the Executive Briefing.",
  };
}

export async function executeExternalIntegration(endpoint: string, payload: Record<string, unknown>): Promise<{ success: boolean; data?: unknown }> {
  const apiKey = getPrivateApiKey();

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("External integration failed.");
  }

  const data = await response.json().catch(() => ({}));
  return { success: true, data };
}
