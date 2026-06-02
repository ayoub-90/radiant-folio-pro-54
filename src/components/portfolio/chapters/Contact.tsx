import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { ChapterHeading } from "../ChapterHeading";
import { UPWORK_URL, LINKEDIN_URL, RESUME_URL } from "@/data/projects";

const EMAIL = "elharemayoub1@gmail.com";
const PHONE = "+212 661 731 716";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Tell me a bit more").max(2000),
});

const contacts = [
  { icon: "📧", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: "💼", label: "Upwork", value: "View profile", href: UPWORK_URL, external: true },
  { icon: "🔗", label: "LinkedIn", value: "ayoub-elharem", href: LINKEDIN_URL, external: true },
  { icon: "📱", label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
  { icon: "📄", label: "Resume", value: "Download PDF", href: RESUME_URL, download: true },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const i of res.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const body = encodeURIComponent(`${res.data.message}\n\n— ${res.data.name} (${res.data.email})`);
    const subject = encodeURIComponent(`Portfolio inquiry from ${res.data.name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="dark-section relative overflow-hidden px-6 py-32 md:px-16 lg:px-24"
    >
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="animate-aurora absolute -left-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #2D2BFF, transparent 70%)" }}
        />
        <div
          className="animate-aurora absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full opacity-35 blur-3xl"
          style={{
            background: "radial-gradient(circle, #FF5C35, transparent 70%)",
            animationDelay: "-6s",
          }}
        />
      </div>

      <ChapterHeading number="08" kicker="Chapter Eight" title="Let's build something that actually works." />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 max-w-3xl text-lg leading-relaxed text-foreground/85 md:text-xl"
      >
        Open to freelance projects, full-time roles, and data consulting missions. Remote-first.{" "}
        <span className="text-indigo font-semibold">Available now.</span>
      </motion.p>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              download={c.download ? "Ayoub-Elharem-Resume.pdf" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-5 rounded-md border border-white/10 bg-surface p-5 transition-all hover:border-indigo hover:bg-surface-elevated hover:glow-teal"
            >
              <span className="text-2xl">{c.icon}</span>
              <div className="flex-1">
                <div className="font-sub text-[10px] uppercase tracking-[0.3em] text-coral">
                  {c.label}
                </div>
                <div className="font-display mt-1 text-base text-foreground">{c.value}</div>
              </div>
              <span className="font-mono text-indigo opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-md border border-white/10 bg-surface p-8"
        >
          <div className="font-sub mb-6 text-[10px] uppercase tracking-[0.3em] text-indigo">
            ▸ Send a message
          </div>
          <div className="space-y-5">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              error={errors.name}
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              error={errors.email}
            />
            <Field
              label="Message"
              textarea
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              error={errors.message}
            />
            <button type="submit" className="btn-editorial w-full justify-center">
              {sent ? "✓ Opened in your mail client" : "Send Message →"}
            </button>
          </div>
        </motion.form>
      </div>

      <div className="font-mono mt-24 border-t border-white/10 pt-8 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        © 2026 Ayoub Elharem · Casablanca, Morocco · Built with intent.
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const cls =
    "w-full rounded-sm border border-white/15 bg-background/60 px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-indigo focus:outline-none focus:ring-1 focus:ring-indigo";
  return (
    <label className="block">
      <span className="font-sub mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className={cls}
          maxLength={2000}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
          maxLength={255}
        />
      )}
      {error && <span className="font-mono mt-1 block text-[10px] text-destructive">{error}</span>}
    </label>
  );
}
