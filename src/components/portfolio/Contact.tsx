import { motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Section } from "./Section";

const EMAILJS_SERVICE_ID = "service_54iija8";
const EMAILJS_TEMPLATE_ID = "template_4exzvjd";
const EMAILJS_PUBLIC_KEY = "guAtHcTgc7Vzg3rW_";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const copyToClipboard = async (value: string, key: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(key);
    setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please email me directly."
      );
    }
  };

  const buttonLabel =
    status === "sending" ? "Sending..." :
    status === "sent" ? "Message Sent ✓" :
    "Send Message";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's <span className="gradient-text">build</span> something</>}
      subtitle="Currently open to full-time opportunities and internships in Bangalore or remote."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h3 className="font-display text-2xl font-bold">Get in touch</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Have a role in mind or just want to say hi? My inbox is always open.
          </p>

          <div className="mt-8 space-y-5">
            <div className="group flex items-center gap-4">
              <a href="mailto:dhanushrmdy@gmail.com" className="flex min-w-0 flex-1 items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="truncate font-medium">dhanushrmdy@gmail.com</div>
                </div>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard("dhanushrmdy@gmail.com", "email")}
                aria-label={copied === "email" ? "Email copied" : "Copy email"}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                {copied === "email" ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="group flex items-center gap-4">
              <a href="tel:+918073215548" className="flex min-w-0 flex-1 items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <div className="truncate font-medium">+91 80732 15548</div>
                </div>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard("+918073215548", "phone")}
                aria-label={copied === "phone" ? "Phone copied" : "Copy phone"}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                {copied === "phone" ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                <div className="font-medium">Bangalore, India</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3 border-t border-border pt-6">
            <a
              href="https://github.com/dhanushr-dev"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanushr-dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.hackerrank.com/dhanushrmdy"
              target="_blank"
              rel="noreferrer"
              aria-label="HackerRank"
              className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <FaHackerrank size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                required
                maxLength={100}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-glow-sm"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                name="email"
                required
                type="email"
                maxLength={255}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-glow-sm"
                placeholder="you@email.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <input
                id="subject"
                name="subject"
                required
                maxLength={150}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-glow-sm"
                placeholder="Let's work together"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={2000}
                className="resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-glow-sm"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-6 py-3 font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {buttonLabel}
              {status === "idle" && <Send size={16} className="transition-transform group-hover:translate-x-1" />}
            </button>
            {status === "error" && (
              <p className="text-sm text-destructive">
                Couldn't send: {errorMsg} You can also email me at dhanushrmdy@gmail.com.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
