'use server'

import { supabaseClient } from "@/server/client";
import { withRateLimit } from "@/lib/rateLimitGuard";

type RPCName = 'toggle_post_like' | 'get_wall_posts' | 'submit_post_via_waitlist'; // Add your RPC names here

export async function safeRPC(name: RPCName, params: any, limitKey: string = "general") {
  // 1. Define the core task
  const executeRPC = async () => {
    const { data, error } = await supabaseClient.rpc(name, params);
    if (error) throw new Error(error.message);
    return data;
  };

  try {
    // 2. Wrap with your Upstash Rate Limiter
    // This uses the IP + name of the RPC as the unique bucket
    const protectedAction = await withRateLimit(executeRPC, `${name}-${limitKey}`);
    return await protectedAction();
  } catch (err: any) {
    // 3. Centralized Error mapping
    if (err.message === "RATE_LIMIT_EXCEEDED") {
      throw new Error("Too many requests. Please wait a moment.");
    }
    throw err;
  }
}