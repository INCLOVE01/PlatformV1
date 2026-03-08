import { supabaseClient } from "@/server/client";
import { WaitlistFormValues } from "@/types/waitlist";
import { db } from "@/db/db";


export async function processWaitlistSubmission(values: WaitlistFormValues) {
  const emailNormalized = values.email.toLowerCase().trim();

  // 1. Local Check (Still keep this for instant feel)
  const local = await db.identities.where('email').equals(emailNormalized).first();
  if (local?.inclove_token) return { token: local.inclove_token, message: 'exists' };

  // 2. Single RPC Call (Handles check AND insert)
  const { data, error: rpcError } = await supabaseClient.rpc('insert_waitlist_and_identity', {
    p_email: emailNormalized,
    p_full_name: values.fullName,
    p_phone: values.phone,
    p_about: values.about
  });

  if (rpcError) throw new Error(`Database Error: ${rpcError.message}`);

  const result = Array.isArray(data) ? data[0] : data;
  const token = result.out_token; 

  await syncToLocalDb(emailNormalized, token);

  return { token, message: 'created' };
}


async function syncToLocalDb(email: string, token: string) {
  await db.transaction('rw', db.identities, async () => {
    // 1. Mark all existing as inactive first
    await db.identities.toCollection().modify({ isActive: false });

    // 2. Check if this specific email already exists locally
    const existing = await db.identities.where('email').equals(email).first();

    if (existing) {
      // Update existing record instead of putting a new one
      await db.identities.update(existing.id!, {
        inclove_token: token,
        isActive: true,
        lastUsed: Date.now()
      });
    } else {
      // Add new record if it doesn't exist
      await db.identities.add({
        email,
        inclove_token: token,
        isActive: true,
        lastUsed: Date.now(),
        createdAt: Date.now()
      });
    }
  });
}