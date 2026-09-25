import { Container } from "../ui/Container";
import { siteConfig } from "../../config/site";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Lessons", href: "#lessons" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a session", href: "#booking" },
];

export function Footer() {
  return (
    <footer className="border-t border-paper-line bg-paper-alt/40">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-bold text-ink">{siteConfig.businessName}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Online mathematics tutoring with {siteConfig.tutorName}, for students in the UK, US,
              Canada, and Australia.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink-soft">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-soft hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink-soft">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-ink">
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="privacy" className="mt-12 border-t border-paper-line pt-6">
          <p className="max-w-2xl text-xs leading-relaxed text-ink-soft/80">
            Details submitted through the booking form are used only to prepare a WhatsApp message
            to Kanika and are not stored or sent to a server by this website.
            [PRIVACY POLICY placeholder — add a full privacy policy before collecting personal data
            at scale.]
          </p>
          <p className="mt-4 text-xs text-ink-soft/70">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
