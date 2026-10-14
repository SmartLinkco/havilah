"use client";

import Script from "next/script";
import { useId, useState, useSyncExternalStore, type FormEvent } from "react";
import { forms, contact } from "@/content/contact";
import { interestOptions } from "@/content/produce";
import { visitorName } from "@/lib/visitor-copy";
import { pages } from "@/content/site";
import type { InquiryIntent } from "@/lib/inquiry";

type FormCopy = (typeof forms)["inquiry"] | (typeof forms)["quote"];

type FieldErrors = Record<string, string>;

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";

function productFromLocation() {
  return new URLSearchParams(window.location.search).get("product") ?? "";
}

function subscribeToProductQuery(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function emptyProductQuery() {
  return "";
}

function trackInquiry(intent: InquiryIntent) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "inquiry_submitted", { intent });
  }
}

export function InquiryForm({ copy, pageHeading = false }: { copy: FormCopy; pageHeading?: boolean }) {
  const baseId = useId();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string>(contact.whatsapp.href);
  const requestedProduct = useSyncExternalStore(
    subscribeToProductQuery,
    productFromLocation,
    emptyProductQuery,
  );
  const [interest, setInterest] = useState("general");
  const [appliedProduct, setAppliedProduct] = useState("");

  if (requestedProduct !== appliedProduct) {
    setAppliedProduct(requestedProduct);
    if (interestOptions.some((option) => option.value === requestedProduct)) {
      setInterest(requestedProduct);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const turnstile = form.querySelector<HTMLTextAreaElement | HTMLInputElement>(
      '[name="cf-turnstile-response"]',
    );

    setStatus("submitting");
    setMessage("");
    setFieldErrors({});

    const payload = {
      intent: copy.intent,
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      country: String(data.get("country") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      interest: String(data.get("interest") ?? ""),
      volume: String(data.get("volume") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      hpField: String(data.get("hpField") ?? ""),
      turnstileToken: turnstile?.value ?? "",
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: FieldErrors;
        whatsappUrl?: string;
      };

      if (body.whatsappUrl) setWhatsappUrl(body.whatsappUrl);

      if (!response.ok || !body.ok) {
        setStatus("error");
        setMessage(body.message || forms.fallback);
        setFieldErrors(body.fieldErrors ?? {});
        return;
      }

      trackInquiry(copy.intent);
      setStatus("success");
      setMessage(body.message || copy.success);
      form.reset();
    } catch {
      setStatus("error");
      setMessage(forms.fallback);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-green-100 bg-white p-6 sm:p-8">
        <Heading pageHeading={pageHeading} className="font-heading text-2xl font-semibold text-green-900">
          {copy.title}
        </Heading>
        <p className="mt-3 leading-relaxed">{message}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={whatsappUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}>
            {forms.another}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id={copy.id}
      onSubmit={onSubmit}
      noValidate
      className="scroll-mt-28 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <Heading pageHeading={pageHeading} className="font-heading text-2xl font-semibold text-green-900">
        {copy.title}
      </Heading>
      <p className="mt-2 text-ink">{copy.lede}</p>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-xl bg-gold-100 px-4 py-3 text-sm text-ink">
          {message}{" "}
          <a href={whatsappUrl} className="font-semibold text-green-900 underline">
            Open WhatsApp
          </a>
        </p>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          id={`${baseId}-name`}
          name="name"
          label="Name"
          required
          autoComplete="name"
          error={fieldErrors.name}
        />
        <Field
          id={`${baseId}-company`}
          name="company"
          label="Company"
          autoComplete="organization"
          error={fieldErrors.company}
        />
        <Field
          id={`${baseId}-country`}
          name="country"
          label="Country"
          required
          autoComplete="country-name"
          error={fieldErrors.country}
        />
        <Field
          id={`${baseId}-email`}
          name="email"
          type="email"
          label="Email"
          required
          autoComplete="email"
          error={fieldErrors.email}
        />
        <Field
          id={`${baseId}-phone`}
          name="phone"
          type="tel"
          label="Phone or WhatsApp"
          autoComplete="tel"
          error={fieldErrors.phone}
        />
        <div>
          <label htmlFor={`${baseId}-interest`} className="block text-sm font-semibold text-green-900">
            Interest <span className="text-soil-700">(required)</span>
          </label>
          <select
            id={`${baseId}-interest`}
            name="interest"
            required
            className="field mt-1"
            aria-invalid={fieldErrors.interest ? true : undefined}
            aria-describedby={fieldErrors.interest ? `${baseId}-interest-error` : undefined}
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
          >
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {visitorName(option.label)}
              </option>
            ))}
          </select>
          {fieldErrors.interest ? (
            <p id={`${baseId}-interest-error`} className="mt-1 text-sm text-soil-700">
              {fieldErrors.interest}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <Field
          id={`${baseId}-volume`}
          name="volume"
          label="Estimated volume"
          hint="Optional. A container, a season, or a weight range is enough."
          error={fieldErrors.volume}
        />
      </div>
      <div className="mt-4">
        <label htmlFor={`${baseId}-message`} className="block text-sm font-semibold text-green-900">
          Message <span className="text-soil-700">(required)</span>
        </label>
        <textarea
          id={`${baseId}-message`}
          name="message"
          required
          rows={5}
          className="field mt-1 min-h-32"
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? `${baseId}-message-error` : undefined}
        />
        {fieldErrors.message ? (
          <p id={`${baseId}-message-error`} className="mt-1 text-sm text-soil-700">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${baseId}-hp`}>Leave this field empty</label>
        <input id={`${baseId}-hp`} name="hpField" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {siteKey ? (
        <div className="mt-4">
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />
          {fieldErrors.turnstileToken ? (
            <p className="mt-1 text-sm text-soil-700">{fieldErrors.turnstileToken}</p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-4">
        <label className="flex items-start gap-3 text-sm leading-relaxed">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-5 w-5 accent-green-700"
            aria-invalid={fieldErrors.consent ? true : undefined}
            aria-describedby={fieldErrors.consent ? `${baseId}-consent-error` : undefined}
          />
          <span>
            {forms.consent}{" "}
            <a href={pages.privacy.path} className="font-semibold text-green-700 underline">
              Privacy notice
            </a>
          </span>
        </label>
        {fieldErrors.consent ? (
          <p id={`${baseId}-consent-error`} className="mt-1 text-sm text-soil-700">
            {fieldErrors.consent}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary mt-6" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : copy.submit}
      </button>
    </form>
  );
}

function Heading({
  pageHeading,
  className,
  children,
}: {
  pageHeading: boolean;
  className: string;
  children: string;
}) {
  if (pageHeading) {
    return <h1 className={className}>{children}</h1>;
  }
  return <h3 className={className}>{children}</h3>;
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  hint,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  hint?: string;
  error?: string;
}) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-green-900">
        {label} {required ? <span className="text-soil-700">(required)</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field mt-1"
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
      {hint ? (
        <p id={hintId} className="mt-1 text-sm text-soil-700">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-soil-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
