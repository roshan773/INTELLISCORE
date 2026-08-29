// Server-only in-memory sliding window rate limiter
interface RateLimitRecord {
  timestamps: number[];
}

const tracker = new Map<string, RateLimitRecord>();

// Clean up stale entries every 10 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of tracker.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < 60000);
      if (record.timestamps.length === 0) {
        tracker.delete(key);
      }
    }
  }, 600000);
}

export function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 60000
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = tracker.get(identifier) || { timestamps: [] };

  // Filter out timestamps outside the window
  const validTimestamps = record.timestamps.filter((ts) => now - ts < windowMs);

  if (validTimestamps.length >= limit) {
    return {
      allowed: false,
      remaining: 0,
    };
  }

  validTimestamps.push(now);
  tracker.set(identifier, { timestamps: validTimestamps });

  return {
    allowed: true,
    remaining: limit - validTimestamps.length,
  };
}
