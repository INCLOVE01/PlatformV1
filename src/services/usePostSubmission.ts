'use server'

import { safeRPC } from "@/server/actions";


export async function submitPostAction(data: { email: string; content: string; badge: string }) {


    const data1 = await safeRPC("submit_post_via_waitlist",{
      p_email: data.email,
      p_content: data.content,
      p_badge: data.badge

    },"posts")



  // The RPC returns our custom JSON object
  return data1;  
}