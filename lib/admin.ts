export function parseAdminEmails(raw: string | undefined): string[] {
  if (!raw) return [];
  return raw
    .split(/[;,]/)
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email: string | undefined, rawAdminEmails?: string): boolean {
  if (!email) return false;
  const normalized = parseAdminEmails(rawAdminEmails);
  return normalized.includes(email.toLowerCase().trim());
}
