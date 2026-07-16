import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: GraduationCap,
    role: "BE Computer Science Engineering",
    org: "G Madegowda Institute of Technology",
    period: "2022 — 2026",
    points: [
      "CGPA: 8.0",
      "Relevant coursework: Data Structures, DBMS, OS, Computer Networks, OOP",
    ],
  },
  {
    icon: Briefcase,
    role: "Full Stack Java Development Training",
    org: "Tap Academy, Bangalore",
    period: "2026",
    points: [
      "Completed intensive training in Java, Spring Boot, React.js, REST APIs, MySQL",
      "Built real-world projects including a full-stack e-commerce platform",
      "Covered OOP, DSA basics, Hibernate, Spring Security, Git/GitHub",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Education"
      title={<>My <span className="gradient-text">journey</span> so far</>}
    >
      <div className="relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" />
        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                i % 2 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-5 -translate-x-1/2 md:left-1/2">
                <div className="relative grid h-10 w-10 place-items-center rounded-full border border-primary/40 bg-background shadow-glow-sm">
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                  <it.icon size={18} className="relative text-primary" />
                </div>
              </div>

              <div className="md:w-1/2" />
              <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-glow-sm">
                  <div className="text-xs font-medium uppercase tracking-wider text-primary">
                    {it.period}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold">{it.role}</h3>
                  <div className="text-sm text-muted-foreground">{it.org}</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
