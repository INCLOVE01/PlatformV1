'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField } from '@/components/formInput/textField';
import { EmailField } from '@/components/formInput/emailField';
import { TextAreaField } from '@/components/formInput/textAreaField';

const contactSchema = z.object({
  fullName: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Tell us more so we can help"),
});

export default function ContactPage() {
  const { control, handleSubmit } = useForm({
    defaultValues:{
        fullName : "",
        email : '',
        message : ''
    },
    resolver: zodResolver(contactSchema),
  });

  return (
    <div className="max-w-6xl mx-auto mt-4 px-6 py-16">
      {/* Branding Header */}
      <div className="mb-16 text-start md:text-center">
        <h1 className="text-3xl font-extrabold tracking-tight mb-6 md:text-4xl">Let's build Inclove together.</h1>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto md:text-xl">
          Every conversation shapes our community. Whether you're sharing feedback on our 
          <span className="font-semibold text-indigo-600"> Self Love Wall</span> or 
          seeking support, your voice is our north star for authentic connection.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Tiles */}
        <div className="space-y-6 lg:col-span-1">
          <ContactTile 
            title="General Support" 
            desc="Questions about your profile or features?" 
            action="support@inclove.app" 
          />
          <ContactTile 
            title="Community Partnerships" 
            desc="Collaborate with us on events or advocacy." 
            action="partnerships@inclove.app" 
          />
        </div>

        {/* Form Section */}
        <div className="lg:col-span-2 px-4">
          <form onSubmit={handleSubmit((d) => console.log(d))} className="max-w-lg bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <TextField control={control} name="fullName" label="FullName" placeholder='enter name here'/>
            </div>
            <EmailField control={control} name="email" label="Email Address" placeholder='enter email here'/>
            <TextAreaField maxLength={200} control={control} name="message" label="How can we help you today?" />
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Simple Tile Component
function ContactTile({ title, desc, action }:{ title:string, desc:string, action:string }) {
  return (
    <div className="p-6 border border-gray-200 rounded-2xl hover:border-indigo-200 transition-colors">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{desc}</p>
      <a href={`mailto:${action}`} className="text-indigo-600 font-medium hover:underline">{action}</a>
    </div>
  );
}