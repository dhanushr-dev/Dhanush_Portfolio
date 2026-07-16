import { motion } from "framer-motion";
import { Trophy, Code2 } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Trophy,
    title: "Cleared TCS NQT",
    desc: "Shortlisted for TCS Digital Cadre (2026).",
  },
  {
    icon: Code2,
    title: "Hackathons",
    desc: "Participated in multiple hackathons, collaborating with teams to prototype ideas under tight deadlines.",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={<>Wins worth <span className="gradient-text">celebrating</span></>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-sm"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/15" />
            <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow-sm">
              <it.icon size={22} />
            </div>
            <h3 className="relative mt-5 font-display text-lg font-bold">{it.title}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
