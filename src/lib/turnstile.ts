export async function verifyTurnstile(
  secret: string,
  token: string,
  ip: string,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  if (!token) return { ok: false, reason: "missing-token" };

  const body = new URLSearchParams({ secret, response: token });
  if (ip && ip !== "unknown") body.set("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) return { ok: false, reason: `siteverify-${response.status}` };

  const data = (await response.json()) as { success?: boolean; "error-codes"?: string[] };
  if (data.success === true) return { ok: true };
  const codes = (data["error-codes"] ?? ["rejected"]).filter((code) => code.length > 0).join(",");
  return { ok: false, reason: codes || "rejected" };
}
