export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Platform V1</h1>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Your Vercel deployment is healthy. The message you saw before was the default Next.js starter
          screen, not a runtime crash.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          <li>This page confirms your app is rendering custom code from <code>src/app/page.tsx</code>.</li>
          <li>If Vercel still shows the old starter page, redeploy the latest commit or verify the correct branch is connected.</li>
          <li>Check build logs in Vercel for any failed deployment attempts.</li>
        </ul>
      </section>
    </main>
  );
}
