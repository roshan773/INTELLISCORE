import "server-only";

/**
 * Server-Only API Client
 * This module executes exclusively on the server runtime.
 * Private credentials are never returned or exposed to client components.
 */

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

function getPrivateApiKey(): string {
  const apiKey = process.env.INTELLISCORE_PRIVATE_API_KEY;
  if (!apiKey || typeof apiKey !== "string" || apiKey.trim() === "") {
    // Fail safely with a generic error message, never revealing variable names or values
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

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": USER_AGENT,
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

  const responseText = await response.text();
  let result;
  try {
    result = JSON.parse(responseText);
  } catch {
    throw new Error("Unable to parse external transmission response.");
  }

  if (!result.success && !response.ok) {
    throw new Error(result.message || "External service rejected transmission.");
  }

  return {
    success: true,
    message: "Discovery request successfully submitted.",
  };
}

export async function submitNewsletterServerSide(data: NewsletterSubmissionData): Promise<{ success: boolean; message: string }> {
  const apiKey = getPrivateApiKey();

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": USER_AGENT,
    },
    body: JSON.stringify({
      access_key: apiKey,
      email: data.email,
      subject: `New Executive Briefing Subscriber: ${data.email} [INTELLUSCORE]`,
      from_name: "INTELLUSCORE Subscription Desk",
    }),
  });

  const responseText = await response.text();
  let result;
  try {
    result = JSON.parse(responseText);
  } catch {
    throw new Error("Unable to parse external subscription response.");
  }

  if (!result.success && !response.ok) {
    throw new Error(result.message || "External service rejected subscription.");
  }

  return {
    success: true,
    message: "Subscription successfully registered.",
  };
}

export async function executeExternalIntegration(endpoint: string, payload: Record<string, unknown>): Promise<{ success: boolean; data?: unknown }> {
  const apiKey = getPrivateApiKey();

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "User-Agent": USER_AGENT,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("External integration failed.");
  }

  const data = await response.json();
  return { success: true, data };
}
