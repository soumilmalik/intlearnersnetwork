import { siteConfig } from "../config/site";

/** Builds a wa.me link with a correctly URL-encoded prefilled message. */
export function buildWhatsAppLink(message: string = siteConfig.whatsappDefaultMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
