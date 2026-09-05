# International Learners' Network — landing page

Single-page marketing site for Kanika Sehgal Arora's online mathematics
tutoring. React 19 + TypeScript + Vite + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build for production

```bash
npm run build   # type-checks, then builds to dist/
npm run preview # serve the production build locally
```

## Project structure

- `src/config/site.ts` — business name, tutor name, WhatsApp number, contact
  email, and the optional external booking URL. Edit this file to update
  contact details site-wide.
- `src/config/content.ts` — curricula, exam prep, qualifications, lesson
  pillars, experience timeline, FAQ copy.
- `src/components/sections/` — one component per page section.
- `src/components/booking/BookingForm.tsx` — the booking form (see below).
- `src/lib/whatsapp.ts` — builds the `wa.me` link with an encoded message.

## Connecting a real booking flow

`siteConfig.bookingUrl` (in `src/config/site.ts`) is currently empty, so:

- Every "Book a free session" button scrolls to the on-page `#booking`
  section.
- The booking section renders `BookingForm`, a fully validated form that —
  since no backend is configured — opens a pre-filled WhatsApp message with
  the visitor's details when submitted. Nothing is sent to a server; this is
  intentional and documented in the form's own helper text.

To connect a real scheduling tool (Calendly, TidyCal, etc.):

1. Set `bookingUrl` in `src/config/site.ts` to the scheduling link.
2. `BookingSection.tsx` will automatically switch every CTA to link out to
   it and stop rendering the built-in form.

To connect a real backend instead of the WhatsApp handoff, replace the
`handleSubmit` logic in `src/components/booking/BookingForm.tsx` with a call
to your form service/API.

## Remaining placeholders

- `contactEmail` in `src/config/site.ts` is a placeholder address — replace
  with a real inbox before launch.
- The footer privacy note (`src/components/sections/Footer.tsx`, `#privacy`)
  is a placeholder — replace with a full privacy policy before collecting
  personal data at scale.
- The FAQ's time zone answer (`src/config/content.ts`) has a bracketed
  placeholder for confirmed availability/time zones.
