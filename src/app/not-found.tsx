'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-neutral-700 mb-6">
        Oops! Page not found
      </h2>
      <p className="text-neutral-500 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>

      <div className="flex gap-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="px-6 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
        >
          Go Back
        </button>

        {/* Home Link */}
        <Link
          href="/"
          className="px-6 py-2 rounded-full bg-primary text-white hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}