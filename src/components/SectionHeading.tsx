import { visitorCopy } from "@/lib/visitor-copy";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  id,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  id?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const text = lede ? visitorCopy(lede) : "";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="mt-3 font-heading text-3xl font-semibold tracking-tight text-green-900 sm:text-4xl">
        {title}
      </h2>
      <div className={`mt-4 h-0.5 w-16 bg-gold-500 ${align === "center" ? "mx-auto" : ""}`} />
      {text ? <p className="mt-5 text-lg leading-relaxed text-ink">{text}</p> : null}
    </div>
  );
}
