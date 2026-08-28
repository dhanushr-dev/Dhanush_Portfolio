import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  SiSpringboot, SiReact, SiJavascript, SiHtml5, SiCss,
  SiMysql, SiGit, SiGithub, SiApachemaven,
  SiEclipseide, SiSpringsecurity,
} from "react-icons/si";
const SiCss3 = SiCss;
import { FaJava, FaDatabase } from "react-icons/fa";
import { Code, Server, Wrench, GraduationCap, Plug, Layout, FileCode, Database, MonitorSmartphone } from "lucide-react";

type Chip = { label: string; Icon: React.ElementType; color: string };
type Group = { title: string; icon: React.ElementType; items: Chip[] };

const currentStack: Group[] = [
  {
    title: "Programming",
    icon: Code,
    items: [
      { label: "Core Java", Icon: FaJava, color: "#f89820" },
      { label: "SQL", Icon: FaDatabase, color: "#00C8FF" },
    ],
  },
  {
    title: "Backend & Java Web",
    icon: Server,
    items: [
      { label: "Java EE (JEE)", Icon: FaJava, color: "#f89820" },
      { label: "JDBC", Icon: Plug, color: "#00C8FF" },
      { label: "JSP", Icon: FileCode, color: "#f89820" },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    items: [
      { label: "HTML5", Icon: SiHtml5, color: "#e34f26" },
      { label: "CSS3", Icon: SiCss3, color: "#1572b6" },
      { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      { label: "MySQL", Icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    items: [
      { label: "Eclipse IDE", Icon: SiEclipseide, color: "#a855f7" },
      { label: "Git", Icon: SiGit, color: "#f05032" },
      { label: "GitHub", Icon: SiGithub, color: "#ffffff" },
      { label: "VS Code", Icon: MonitorSmartphone, color: "#007ACC" },
    ],
  },
];

const learning: Chip[] = [
  { label: "Spring Boot", Icon: SiSpringboot, color: "#6db33f" },
  { label: "REST APIs", Icon: Server, color: "#61dafb" },
  { label: "Hibernate/JPA", Icon: FaJava, color: "#59666C" },
  { label: "Spring Security", Icon: SiSpringsecurity, color: "#6db33f" },
  { label: "React.js", Icon: SiReact, color: "#61dafb" },
  { label: "Maven", Icon: SiApachemaven, color: "#c71a36" },
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
      eyebrow="Tech Stack"
      title={<>Tools I <span className="gradient-text">build with</span></>}
      subtitle="My current technologies and learning path."
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
            <p className="text-sm text-foreground/60">Currently expanding my skills with these technologies.</p>
          </div>
        </div>
        <div className="mt-5">
          <ChipRow items={learning} />
        </div>
      </motion.div>
    </Section>
  );
}
