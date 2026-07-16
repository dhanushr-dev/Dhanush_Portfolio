import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileText } from "lucide-react";
import { generateOnePager } from "@/lib/generateOnePager";
import resumeAsset from "@/assets/Dhanush_Resume.pdf.asset.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { CodeTerminal } from "./CodeTerminal";

const roles = [
  "Full Stack Java Developer",
  "Spring Boot Enthusiast",
  "React Developer",
  "Problem Solver",
];

function useTyping() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((idx + 1) % roles.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return text;
}

function Particles() {
  const dots = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/60"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
}

const socials = [
  { Icon: FaGithub, href: "https://github.com/dhanushr-dev", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/dhanushr-dev/", label: "LinkedIn" },
  { Icon: SiHackerrank, href: "https://www.hackerrank.com/profile/dhanushrmdy", label: "HackerRank" },
];

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden hero-bg pt-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <Particles />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Available for opportunities
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl break-words">
              Hi, I'm <span className="gradient-text glow-text">Dhanush R</span> <span className="inline-block animate-float">👋</span>
            </h1>

            <div className="mt-6 flex min-h-10 flex-wrap items-center text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">
              <span className="text-muted-foreground">I'm a&nbsp;</span>
              <span className="text-primary break-words">{typed}</span>
              <span className="ml-1 inline-block h-6 w-[3px] animate-blink bg-primary sm:h-7" />
            </div>

            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Fresher · BE CSE 2026 · Building scalable web applications with Java, Spring Boot & React.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={resumeAsset.url}
                download="Dhanush_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-6 py-3 font-medium text-foreground backdrop-blur transition-all hover:border-primary hover:text-primary"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button
                onClick={generateOnePager}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-6 py-3 font-medium text-foreground backdrop-blur transition-all hover:border-primary hover:text-primary"
              >
                <FileText size={18} />
                One-Pager PDF
              </button>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={label === "LinkedIn" ? (event) => {
                    event.preventDefault();
                    window.open(href, "_blank", "noopener,noreferrer");
                  } : undefined}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface/40 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-glow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="min-w-0 w-full lg:justify-self-end">
            <CodeTerminal />
          </div>
        </div>
      </div>

    </section>
  );
}
