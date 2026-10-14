"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
      <h1 className="font-heading text-3xl font-semibold text-green-900">This page did not load</h1>
      <p className="mt-4 text-lg">Try again. If it keeps failing, use the contact page or WhatsApp.</p>
      <button type="button" className="btn btn-primary mt-8" onClick={() => reset()}>
        Try again
      </button>
    </section>
  );
}
