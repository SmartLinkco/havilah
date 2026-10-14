const NOTICE =
  /\b(draft|placeholder|placeholders)\b|\bphoto coming\b|to be confirmed|not yet confirmed|will be (added|published|replaced|written|listed|described|embedded)|once seasons are confirmed|when the farm confirms|until (the farm|havilah agro) confirms|when they are confirmed|sample card|example slots?|example produce|layout only|own wording will replace|not invented here|no calendar is invented|unmarked as confirmed|sends the product list|withheld until|empty list is intentional|no partner logos|no certifications are listed|should be read as a certified|map coming|link to be confirmed|number to be confirmed|specific practices will be published|figures for acreage|stay blank until|being set up|until the email service is configured|will appear only after|none are listed yet|after havilah agro confirms/i;

export function visitorCopy(value: string): string {
  const prepared = value
    .replace(/\s+once they are confirmed/gi, "")
    .replace(/\s+once the farm confirms those details/gi, "")
    .replace(/^Example produce cards,\s*/i, "");
  const text = prepared
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0 && !NOTICE.test(part))
    .join(" ")
    .trim();
  if (text && text[0] !== text[0].toUpperCase()) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return text;
}

export function visitorName(name: string): string {
  const stripped = name.replace(/^Example:\s*/i, "").trim();
  if (!stripped || stripped === name) return name;
  return stripped.charAt(0).toUpperCase() + stripped.slice(1);
}
