/**
 * Central site configuration.
 *
 * Values marked PLACEHOLDER must be replaced by the client before launch.
 * Nothing else in the codebase should hardcode contact details, links,
 * or the booking flow — always import from here so a single edit updates
 * every button, form, and footer reference across the site.
 */

export const siteConfig = {
  businessName: "International Learners' Network",
  tutorName: "Kanika Sehgal Arora",

  /** International format, digits only after the +, no spaces. */
  whatsappNumber: "919650515446",

  /**
   * PLACEHOLDER — replace with a real inbox before launch.
   * Used in the footer and as the form's mailto fallback.
   */
  contactEmail: "hello@internationallearnersnetwork.com",

  /**
   * PLACEHOLDER — no scheduling link was supplied.
   * bookingUrl stays empty, so every "Book a free session" button
   * scrolls to the on-page booking section instead of an external link.
   * To connect Calendly/TidyCal/etc: set this to the scheduling URL,
   * and BookingSection.tsx will link out to it instead of rendering
   * the built-in form (see the isExternalBookingConfigured check there).
   */
  bookingUrl: "",

  whatsappDefaultMessage:
    "Hello, I'm interested in mathematics tutoring with International Learners' Network. I'd like to know more about the free 30-minute session.",

  demoVideoUrl: "https://www.youtube.com/watch?v=QINtzFB0dug&t=45s",
  demoVideoEmbedId: "QINtzFB0dug",
} as const;
