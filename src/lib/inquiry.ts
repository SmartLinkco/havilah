import { forms } from "@/content/contact";
import { interestOptions } from "@/content/produce";

export const inquiryIntents = ["inquiry", "quote"] as const;
export type InquiryIntent = (typeof inquiryIntents)[number];

const interestValues = new Set<string>(interestOptions.map((option) => option.value));

export type InquiryInput = {
  intent: InquiryIntent;
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  interest: string;
  volume: string;
  message: string;
  consent: boolean;
  hpField: string;
  turnstileToken: string;
};

export type FieldErrors = Partial<Record<keyof InquiryInput | "form", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d][\d\s().-]{5,31}$/;
const personPattern = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{1,99}$/u;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateInquiry(
  input: unknown,
): { ok: true; data: InquiryInput; honeypot: boolean } | { ok: false; fieldErrors: FieldErrors } {
  if (!input || typeof input !== "object") {
    return { ok: false, fieldErrors: { form: "Send the inquiry as a completed form." } };
  }

  const source = input as Record<string, unknown>;
  const intent = asString(source.intent);
  const name = asString(source.name);
  const company = asString(source.company);
  const country = asString(source.country);
  const email = asString(source.email);
  const phone = asString(source.phone);
  const interest = asString(source.interest);
  const volume = asString(source.volume);
  const message = asString(source.message);
  const hpField = asString(source.hpField);
  const turnstileToken = asString(source.turnstileToken);
  const consent = source.consent === true;

  const fieldErrors: FieldErrors = {};

  if (intent !== "inquiry" && intent !== "quote") {
    fieldErrors.intent = "Choose an inquiry or a quote request.";
  }
  if (!personPattern.test(name)) {
    fieldErrors.name = "Enter your name using letters, spaces, apostrophes or hyphens.";
  }
  if (company.length > 120) {
    fieldErrors.company = "Company names must be 120 characters or fewer.";
  }
  if (country.length < 2 || country.length > 80) {
    fieldErrors.country = "Enter the country you are buying from.";
  }
  if (!emailPattern.test(email) || email.length > 160) {
    fieldErrors.email = "Enter a valid email address so the farm can reply.";
  }
  if (phone && !phonePattern.test(phone)) {
    fieldErrors.phone = "Enter a phone number with digits, spaces and an optional leading +.";
  }
  if (!interestValues.has(interest)) {
    fieldErrors.interest = "Choose a product or a general enquiry.";
  }
  if (volume.length > 160) {
    fieldErrors.volume = "Keep the volume note to 160 characters or fewer.";
  }
  if (message.length < 10 || message.length > 4000) {
    fieldErrors.message = "Write a message of at least 10 characters, and at most 4000.";
  }
  if (!consent) {
    fieldErrors.consent = "Consent is required before the farm can contact you about this inquiry.";
  }
  if (turnstileToken.length > 2048) {
    fieldErrors.turnstileToken = "The spam check could not be read. Please try again.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return {
    ok: true,
    honeypot: hpField.length > 0,
    data: {
      intent: intent as InquiryIntent,
      name,
      company,
      country,
      email,
      phone,
      interest,
      volume,
      message,
      consent,
      hpField,
      turnstileToken,
    },
  };
}

export function interestLabel(value: string): string {
  return interestOptions.find((option) => option.value === value)?.label ?? value;
}

export function intentLabel(intent: InquiryIntent): string {
  return intent === "quote" ? forms.quote.title : forms.inquiry.title;
}
