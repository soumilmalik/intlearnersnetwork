import { siteConfig } from "../config/site";

/** Builds a wa.me link with a correctly URL-encoded prefilled message. */
export function buildWhatsAppLink(message: string = siteConfig.whatsappDefaultMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Formats a "<2-digit country code><10-digit number>" string as "+CC XXXXX XXXXX". */
export function formatDisplayPhone(digits: string = siteConfig.whatsappNumber): string {
  const countryCode = digits.slice(0, 2);
  const rest = digits.slice(2);
  return `+${countryCode} ${rest.slice(0, 5)} ${rest.slice(5)}`;
}
