import { visitorCopy } from "@/lib/visitor-copy";

export function FeatureCard({ title, text }: { title: string; text: string }) {
  const body = visitorCopy(text);
  return (
    <article className="lift-card h-full rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
      <div className="h-1 w-10 rounded-full bg-gold-500" aria-hidden="true" />
      <h3 className="mt-4 font-heading text-xl font-semibold text-green-900">{title}</h3>
      {body ? <p className="mt-2 text-base leading-relaxed text-ink">{body}</p> : null}
    </article>
  );
}
