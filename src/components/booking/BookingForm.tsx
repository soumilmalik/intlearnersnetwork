import { useId, useState, type FormEvent, type ReactNode } from "react";
import { siteConfig } from "../../config/site";
import { curricula, examPrep } from "../../config/content";
import { Button } from "../ui/Button";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  countryOther: string;
  grade: string;
  curriculum: string;
  preferredDate: string;
  preferredTime: string;
  goal: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  country: "",
  countryOther: "",
  grade: "",
  curriculum: "",
  preferredDate: "",
  preferredTime: "",
  goal: "",
};

const countryOptions = ["United Kingdom", "United States", "Canada", "Australia", "Other"];
const curriculumOptions = [...curricula, ...examPrep, "Not sure yet"];

type Errors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildSummaryMessage(data: FormState) {
  const country = data.country === "Other" ? data.countryOther : data.country;
  const lines = [
    "Hello, I'd like to book a free 30-minute session with International Learners' Network.",
    "",
    `Parent/student name: ${data.name}`,
    `Email: ${data.email}`,
    `Country: ${country}`,
    `Grade/year level: ${data.grade}`,
    `Curriculum: ${data.curriculum}`,
    data.preferredDate ? `Preferred date: ${data.preferredDate}` : null,
    data.preferredTime ? `Preferred time/timezone: ${data.preferredTime}` : null,
    data.goal ? `Main learning goal: ${data.goal}` : null,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}

export function BookingForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [preparedLink, setPreparedLink] = useState<string | null>(null);
  const formId = useId();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function validate(current: FormState): Errors {
    const next: Errors = {};
    if (!current.name.trim()) next.name = "Please enter a name.";
    if (!current.email.trim()) next.email = "Please enter an email address.";
    else if (!emailPattern.test(current.email.trim())) next.email = "Please enter a valid email address.";
    if (!current.whatsapp.trim()) next.whatsapp = "Please enter a WhatsApp number with country code.";
    if (!current.country) next.country = "Please select a country.";
    if (current.country === "Other" && !current.countryOther.trim()) next.countryOther = "Please specify the country.";
    if (!current.grade.trim()) next.grade = "Please enter the grade or year level.";
    if (!current.curriculum) next.curriculum = "Please select a curriculum.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    window.setTimeout(() => {
      const message = buildSummaryMessage(data);
      const link = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
      setPreparedLink(link);
      window.open(link, "_blank", "noopener,noreferrer");
      setStatus("success");
    }, 500);
  }

  if (status === "success" && preparedLink) {
    return (
      <div className="rounded-card border border-paper-line bg-paper p-7 text-center sm:p-9" role="status">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Almost there</h3>
        <p className="mx-auto mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
          A WhatsApp window has opened with your details ready to send. Confirm it there and Kanika
          will reply to arrange your free 30-minute session.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={preparedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-whatsapp underline underline-offset-4"
          >
            Didn't open? Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setData(initialState);
              setStatus("idle");
              setPreparedLink(null);
            }}
            className="text-sm font-medium text-ink-soft underline underline-offset-4"
          >
            Fill in another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-paper-line bg-paper p-6 sm:p-9">
      {status === "error" && (
        <p role="alert" className="mb-6 rounded-lg bg-danger/10 px-4 py-3 text-sm font-medium text-danger">
          Please check the highlighted fields below.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Parent / student name"
          error={errors.name}
        >
          <input
            id={`${formId}-name`}
            type="text"
            autoComplete="name"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={inputClasses(Boolean(errors.name))}
          />
        </Field>

        <Field id={`${formId}-email`} label="Email" error={errors.email}>
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={inputClasses(Boolean(errors.email))}
          />
        </Field>

        <Field id={`${formId}-whatsapp`} label="WhatsApp number (with country code)" error={errors.whatsapp}>
          <input
            id={`${formId}-whatsapp`}
            type="tel"
            autoComplete="tel"
            placeholder="e.g. +1 415 555 2671"
            value={data.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? `${formId}-whatsapp-error` : undefined}
            className={inputClasses(Boolean(errors.whatsapp))}
          />
        </Field>

        <Field id={`${formId}-country`} label="Student's country" error={errors.country}>
          <select
            id={`${formId}-country`}
            value={data.country}
            onChange={(e) => update("country", e.target.value)}
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? `${formId}-country-error` : undefined}
            className={inputClasses(Boolean(errors.country))}
          >
            <option value="">Select a country</option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        {data.country === "Other" && (
          <Field id={`${formId}-country-other`} label="Please specify country" error={errors.countryOther}>
            <input
              id={`${formId}-country-other`}
              type="text"
              value={data.countryOther}
              onChange={(e) => update("countryOther", e.target.value)}
              aria-invalid={Boolean(errors.countryOther)}
              aria-describedby={errors.countryOther ? `${formId}-country-other-error` : undefined}
              className={inputClasses(Boolean(errors.countryOther))}
            />
          </Field>
        )}

        <Field id={`${formId}-grade`} label="Grade / year level" error={errors.grade}>
          <input
            id={`${formId}-grade`}
            type="text"
            placeholder="e.g. Year 8 or Grade 9"
            value={data.grade}
            onChange={(e) => update("grade", e.target.value)}
            aria-invalid={Boolean(errors.grade)}
            aria-describedby={errors.grade ? `${formId}-grade-error` : undefined}
            className={inputClasses(Boolean(errors.grade))}
          />
        </Field>

        <Field id={`${formId}-curriculum`} label="Curriculum" error={errors.curriculum}>
          <select
            id={`${formId}-curriculum`}
            value={data.curriculum}
            onChange={(e) => update("curriculum", e.target.value)}
            aria-invalid={Boolean(errors.curriculum)}
            aria-describedby={errors.curriculum ? `${formId}-curriculum-error` : undefined}
            className={inputClasses(Boolean(errors.curriculum))}
          >
            <option value="">Select a curriculum</option>
            {curriculumOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${formId}-date`} label="Preferred date (optional)">
          <input
            id={`${formId}-date`}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={data.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            className={inputClasses(false)}
          />
        </Field>

        <Field id={`${formId}-time`} label="Preferred time & timezone (optional)">
          <input
            id={`${formId}-time`}
            type="text"
            placeholder="e.g. 4:00 PM GMT / 11:00 AM EST"
            value={data.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
            className={inputClasses(false)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id={`${formId}-goal`} label="Main learning goal or topic (optional)">
            <textarea
              id={`${formId}-goal`}
              rows={3}
              placeholder="e.g. Building confidence with algebra ahead of GCSE"
              value={data.goal}
              onChange={(e) => update("goal", e.target.value)}
              className={inputClasses(false)}
            />
          </Field>
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" className="mt-7 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Preparing your details…" : "Book my free session"}
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-ink-soft/80">
        Submitting opens WhatsApp with your details pre-filled so Kanika can confirm a time with
        you directly. Nothing is sent automatically or stored on this site. See our{" "}
        <a href="#privacy" className="underline underline-offset-2">
          privacy note
        </a>
        .
      </p>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-paper px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-soft/50",
    "transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-accent-dark focus-visible:outline-offset-2",
    hasError ? "border-danger/60" : "border-paper-line focus:border-ink/30",
  ].join(" ");
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
