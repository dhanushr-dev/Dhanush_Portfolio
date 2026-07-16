import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  SiSpringboot, SiReact, SiJavascript, SiHtml5, SiCss,
  SiMysql, SiGit, SiGithub, SiPostman, SiApachemaven,
  SiDocker, SiPostgresql, SiEclipseide, SiSpringsecurity,
  SiGoogle, SiAnthropic,
} from "react-icons/si";
const SiCss3 = SiCss;
import { FaJava, FaDatabase } from "react-icons/fa";
import { Code, Server, Wrench, Sparkles, MousePointer2, Rocket, GraduationCap, Plug, Layout } from "lucide-react";

type Chip = { label: string; Icon: React.ElementType; color: string };
type Group = { title: string; icon: React.ElementType; items: Chip[] };

const currentStack: Group[] = [
  {
    title: "Languages",
    icon: Code,
    items: [
      { label: "Java", Icon: FaJava, color: "#f89820" },
      { label: "SQL", Icon: FaDatabase, color: "#00C8FF" },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    items: [
      { label: "HTML5", Icon: SiHtml5, color: "#e34f26" },
      { label: "CSS3", Icon: SiCss3, color: "#1572b6" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { label: "Core Java", Icon: FaJava, color: "#f89820" },
      { label: "JDBC", Icon: Plug, color: "#00C8FF" },
      { label: "MySQL", Icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { label: "Eclipse IDE", Icon: SiEclipseide, color: "#a855f7" },
      { label: "Git", Icon: SiGit, color: "#f05032" },
      { label: "GitHub", Icon: SiGithub, color: "#ffffff" },
    ],
  },
];

const learning: Chip[] = [
  { label: "Spring Boot", Icon: SiSpringboot, color: "#6db33f" },
  { label: "Spring Security", Icon: SiSpringsecurity, color: "#6db33f" },
  { label: "React", Icon: SiReact, color: "#61dafb" },
  { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { label: "Docker", Icon: SiDocker, color: "#2496ed" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
  { label: "Maven", Icon: SiApachemaven, color: "#c71a36" },
  { label: "Postman", Icon: SiPostman, color: "#ff6c37" },
];

const aiTools: Chip[] = [
  { label: "Lovable", Icon: Rocket, color: "#ff5a8a" },
  { label: "Claude", Icon: SiAnthropic, color: "#d97757" },
  { label: "Google AI Studio", Icon: SiGoogle, color: "#4285f4" },
  { label: "Cursor", Icon: MousePointer2, color: "#00C8FF" },
  { label: "Antigravity", Icon: Sparkles, color: "#a855f7" },
];

function ChipRow({ items }: { items: Chip[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it, i) => (
        <motion.span
          key={it.label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-sm font-medium transition-all hover:-translate-y-0.5"
          style={{
            color: it.color,
            borderColor: `${it.color}55`,
            background: `${it.color}14`,
            boxShadow: `0 0 0 1px ${it.color}22 inset`,
          }}
        >
          <it.Icon size={14} />
          {it.label}
        </motion.span>
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Tech Stack"
      title={<>Tools I <span className="gradient-text">build with</span></>}
      subtitle="What I use today, what I'm actively learning, and the AI tools in my workflow."
    >
      {/* Current Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-card p-6 md:p-8"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
            <Wrench size={20} />
          </div>
          <h3 className="font-display text-xl font-semibold md:text-2xl">Current Tech Stack</h3>
        </div>

        <div className="mt-6 space-y-5">
          {currentStack.map((g) => (
            <div key={g.title}>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <g.icon size={14} className="text-primary" />
                {g.title}
              </div>
              <ChipRow items={g.items} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Currently Learning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
            <GraduationCap size={20} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold md:text-2xl">Currently Learning</h3>
            <p className="text-sm text-foreground/60">Actively building side projects with these.</p>
          </div>
        </div>
        <div className="mt-5">
          <ChipRow items={learning} />
        </div>
      </motion.div>

      {/* AI Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold md:text-2xl">AI Tools</h3>
            <p className="text-sm text-foreground/60">Part of my daily development workflow.</p>
          </div>
        </div>
        <div className="mt-5">
          <ChipRow items={aiTools} />
        </div>
      </motion.div>
    </Section>
  );
}
