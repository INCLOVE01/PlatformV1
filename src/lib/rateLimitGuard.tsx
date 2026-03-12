'use server'
import 'server-only'
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "60 s"),
});

export async function withRateLimit<T extends any[], R>(
  action: (...args: T) => Promise<R>,
  identifier: string = "default"
) {
  const ip = (await headers()).get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip + identifier);

  if (!success) {
    throw new Error("RATE_LIMIT_EXCEEDED");
  }

  return action;
}