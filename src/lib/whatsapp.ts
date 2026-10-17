import { siteConfig } from "@/config/siteConfig";

/**
 * Validates whether the given phone string has at least 10 numeric digits.
 */
export function isValidPhoneNumber(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10;
}

/**
 * Builds a clean, URL-encoded WhatsApp direct chat link.
 *
 * @param lines Array of message lines (bullet points, greetings, notes)
 * @param targetNumber WhatsApp phone number in international format without + (defaults to siteConfig)
 */
export function createWhatsAppUrl(lines: string[], targetNumber?: string): string {
  const whatsappNumber = targetNumber || siteConfig.contact.whatsappNumber;
  const messageText = lines.filter((line) => line !== undefined && line !== null).join("\n");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
}
