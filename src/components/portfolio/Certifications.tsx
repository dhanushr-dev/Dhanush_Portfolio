import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";

const certs = [
  {
    name: "Generative AI MasterMind",
    issuer: "Outskill",
    year: "2026",
    url: "https://drive.google.com/file/d/13W5vM9fIiMWBFm0A5QTvFIW1iSbqvueD/view?usp=drive_link",
  },
  {
    name: "Hackathon Certificate",
    issuer: "Hackathon",
    year: "2026",
    url: "https://drive.google.com/file/d/1U1VPQwORBHj9yF_r54cyozjexYCkcggv/view?usp=drive_link",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Simplilearn",
    year: "2026",
    url: "https://drive.google.com/file/d/1-VNV8uaiQwhENXrAThvcZ9L1s7TMwjhe/view?usp=drive_link",
  },
  {
    name: "HackerRank Certificates",
    issuer: "HackerRank",
    year: "2026",
    url: "https://www.hackerrank.com/profile/dhanushrmdy",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Continuous <span className="gradient-text">learning</span></>}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-glow opacity-0 transition-opacity group-hover:opacity-100" />
            <Award className="text-primary" size={28} />
            <h3 className="mt-4 font-display text-base font-bold leading-snug">{c.name}</h3>
            <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
            <div className="mt-1 text-xs text-primary/80">{c.year}</div>
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary transition-transform hover:translate-x-1"
            >
              View <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
