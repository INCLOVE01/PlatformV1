'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useLiveQuery } from "dexie-react-hooks";


import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/formInput/textField";
import { SelectField } from "@/components/formInput/selectField"; 

import { db } from "@/db/db";

import WaitlistForm from "@/components/forms/waitlist";


import { submitPostAction } from "@/services/usePostSubmission";
import { TextAreaField } from "@/components/formInput/textAreaField";
import Useicon from "@/components/UseIcon";
import { LoaderCircle, PlusSignIcon, Sparkle } from "@hugeicons/core-free-icons";

const postSchema = z.object({
  email: z.string().email("Please use a valid email"),
  content: z.string()
    .min(10, "Share a bit more (min 10 chars)")
    .max(1000, "Keep it under 200 words"), 
  badge: z.string().default("Self Love")
});

export default function CreatePostDialog() {
  const [open, setOpen] = useState(false);
  const [isWaitlistMode, setIsWaitlistMode] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  
  const queryClient = useQueryClient();


  // 1. Reactive Hook for UI
  const activeIdentity = useLiveQuery(() => 
    db.identities.where('isActive').equals(1).first()
  );

  const form = useForm({
    resolver: zodResolver(postSchema),
    values: { 
      email: activeIdentity?.email || "",
      content: "",
      badge: "Self Love"
    }
  });


const onSubmit = async (values) => {
  setIsSyncing(true);
  try {
    const result = await submitPostAction(values);

    if (result.success) {

      queryClient.invalidateQueries({ queryKey: ['posts'] });

      await db.posts.add({
        token: result.token,       
        uid: result.post_id,       
        email: values.email,
        content: values.content,
        badge: values.badge,
        fullName: result.name || "Anonymous",
        likes: 0,               
        createdAt: Date.now()
      });

      toast.success("Thought shared!",{position:'top-center'});
      setOpen(false);
      form.reset();
    } else {
      if (result.message === 'NOT_ON_WAITLIST') {
        setIsWaitlistMode(true);
      } else {
        toast.error(result.message,{position:'top-center'});
      }
    }
  } catch (err) {
    console.error(err);
    toast.error("Network error");
  } finally {
    setIsSyncing(false);
  }
};

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) setIsWaitlistMode(false);
    }}>
      <DialogTrigger className="rounded-full w-fit h-fit px-2 py-2 text-xs font-semibold flex items-center text-white bg-rose-600 hover:bg-rose-700 shadow-sm gap-2 transition-transform active:scale-95">
          <Useicon icon={PlusSignIcon} size={22} />
          <span>Share a Thought</span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-rose-500 p-6 text-white">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 backdrop-blur-md bg-white/20 rounded-lg">
                <Useicon icon={Sparkle} className="w-5 h-5 text-rose-100" />
              </div>
              <DialogTitle className="text-xl font-semibold">
                {isWaitlistMode ? "Join the Family" : "Post a Reflection"}
              </DialogTitle>
            </div>
            <DialogDescription className="text-rose-100 text-start leading-relaxed">
              {isWaitlistMode 
                ? "We couldn't verify your access key. Let's get you registered!" 
                : "Your perspective is unique. Sharing it helps build a kinder world."}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 bg-white">
          {isWaitlistMode ? (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <WaitlistForm />
            </div>
          ) : (
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
  {/* Replaced manual FormField with your TextField abstraction */}
  <TextField
    control={form.control}
    name="email"
    label="Posting As"
    placeholder="email@example.com"

  />

  <SelectField 
    control={form.control} 
    name="badge"
    label="Mood Tag"
    options={[
      { label: "Self Love", value: "Self Love" },
      { label: "Gratitude", value: "Gratitude" },
      { label: "Victory", value: "Victory" }
    ]}
  />

  <TextAreaField 
    control={form.control} 
    name="content" 
    label="Your Thought" 
    maxLength={200}
    showCharCount
    description="Today, I am proud of myself because..."
  />

  <Button 
    type="submit" 
    disabled={isSyncing}
    className="w-full h-max py-2 bg-rose-600 hover:bg-rose-500 text-white text-base font-semibold rounded-2xl transition-all shadow-md shadow-rose-200"
  >
    {isSyncing ? (
      <Useicon icon={LoaderCircle} className="animate-spin mr-2" />
    ) : (
      "Share your thought"
    )}
  </Button>
</form>

          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}