import { profile } from "@/data/profile";

function escapeVCard(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function generateVCard(websiteUrl: string): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:4.0",
    `FN:${escapeVCard(profile.name)}`,
    `TITLE:${escapeVCard(profile.title)}`,
    `EMAIL;TYPE=work:${escapeVCard(profile.email)}`,
    `URL:${escapeVCard(websiteUrl)}`,
    `URL;TYPE=github:${escapeVCard(profile.social.github)}`,
    "END:VCARD",
  ];

  return lines.join("\r\n");
}
