import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import MagicButton from "../ui/MagicButton";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-sm text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  id,
  type = "text",
  placeholder,
  required,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent"
      {...rest}
    />
  );
}

function Textarea({
  id,
  placeholder,
  required,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { id: string }) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      required={required}
      rows={6}
      className="w-full resize-y rounded-lg border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent"
      {...rest}
    />
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.06-1.87-3.06-1.88 0-2.17 1.47-2.17 2.96v5.7H9.31V9h3.41v1.56h.05c.47-.88 1.62-1.8 3.33-1.8 3.56 0 4.22 2.34 4.22 5.37v6.32ZM5.34 7.43A2.06 2.06 0 0 1 3.3 5.38c0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06a2.06 2.06 0 0 1-2.07 2.05ZM7.12 20.45H3.55V9h3.57v11.45Z"/>
    </svg>
  );
}

function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.8-.25.8-.56v-2c-3.26.71-3.95-1.4-3.95-1.4-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.8 1.2 1.8 1.2 1.04 1.78 2.72 1.26 3.38.96.11-.76.41-1.26.75-1.55-2.6-.3-5.33-1.3-5.33-5.79 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.51.12-3.15 0 0 .98-.31 3.21 1.2.93-.26 1.92-.4 2.9-.4.98 0 1.97.14 2.9.4 2.23-1.51 3.2-1.2 3.2-1.2.65 1.64.25 2.85.12 3.15.75.82 1.2 1.87 1.2 3.15 0 4.5-2.74 5.49-5.35 5.78.43.37.81 1.1.81 2.22v3.29c0 .31.21.68.82.56A11.5 11.5 0 0 0 12 .5Z"/>
    </svg>
  );
}

export default function Contact() {
  const { t } = useTranslation("common");

  const EMAIL = "loanlavigne.pro@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/loan-lavigne-813086356/";
  const GITHUB = "https://github.com/loanlvn";

  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const endpoint = import.meta.env.VITE_FORMS_ENDPOINT;
  const subject = "Contact%20Portfolio";
  const mailtoBase = useMemo(
    () => `mailto:${EMAIL}?subject=${subject}`,
    [EMAIL, subject]
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    if (endpoint) {
      try {
        setStatus("sending");
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error("Failed");
        setStatus("ok");
        (e.currentTarget as HTMLFormElement).reset();
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    const body = encodeURIComponent(`${t("contact.form.labels.name")}: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `${mailtoBase}&body=${body}`;
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setStatus("ok");
    setTimeout(() => setStatus("idle"), 1500);
  }

  return (
    <section id="contact" className="container py-24">
      <header className="mb-8 text-center">
        <h2 className="text-2xl font-semibold">{t("contact.title")}</h2>
        <p className="subtle mt-2">{t("contact.subtitle")}</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Carte infos */}
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <h3 className="font-semibold">{t("contact.card_title")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("contact.quick_reply")}
          </p>

          <div className="mt-6 space-y-3">
            <button
              onClick={copyEmail}
              className="w-full justify-between rounded-lg border px-3 py-2 text-left text-sm hocus:bg-accent hocus:text-accent-foreground flex items-center"
              title={t("contact.copy_email")}
            >
              <span>{EMAIL}</span>
              <span className="text-xs opacity-70">
                {status === "ok" ? t("contact.copied") : t("contact.copy")}
              </span>
            </button>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm hocus:bg-accent hocus:text-accent-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <IconLinkedIn /> LinkedIn
              </span>
              <span className="text-xs opacity-70">{t("contact.open")}</span>
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm hocus:bg-accent hocus:text-accent-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <IconGitHub /> GitHub
              </span>
              <span className="text-xs opacity-70">{t("contact.open")}</span>
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={onSubmit} className="rounded-2xl border bg-card p-6 shadow-soft">
          <h3 className="font-semibold">{t("contact.form.title")}</h3>
          <div className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">{t("contact.form.labels.name")}</Label>
              <Field id="name" name="name" placeholder={t("contact.form.placeholders.name") as string} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{t("contact.form.labels.email")}</Label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder={t("contact.form.placeholders.email") as string}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">{t("contact.form.labels.message")}</Label>
              <Textarea id="message" name="message" placeholder={t("contact.form.placeholders.message") as string} required />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <MagicButton
              title={
                endpoint
                  ? status === "sending"
                    ? t("contact.form.sending")
                    : t("contact.form.send")
                  : t("contact.form.open_email")
              }
              position="right"
              gradient="purple"
              className="w-auto md:w-auto"
              type="submit"
              icon={<span aria-hidden>↗</span>}
            />
            {status === "error" && (
              <span className="text-sm text-red-400">{t("contact.form.error")}</span>
            )}
            {status === "ok" && endpoint && (
              <span className="text-sm text-emerald-400">{t("contact.form.sent")}</span>
            )}
          </div>

          {!endpoint && (
            <p className="mt-2 text-xs text-muted-foreground">
              {t("contact.form.hint_api")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
