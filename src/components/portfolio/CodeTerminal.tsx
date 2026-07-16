import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CODE_LINES: { text: string; indent: number }[] = [
  { text: `public class Developer {`, indent: 0 },
  { text: ``, indent: 0 },
  { text: `public static void main(String[] args) {`, indent: 1 },
  { text: ``, indent: 0 },
  { text: `String name = "Dhanush R";`, indent: 2 },
  { text: `String role = "Java Full-Stack Developer";`, indent: 2 },
  { text: ``, indent: 0 },
  { text: `System.out.println("Name: " + name);`, indent: 2 },
  { text: `System.out.println("Role: " + role);`, indent: 2 },
  { text: `System.out.println("Status: Open to Work");`, indent: 2 },
  { text: `}`, indent: 1 },
  { text: `}`, indent: 0 },
];

const OUTPUT_LINES = [
  "Name: Dhanush R",
  "Role: Java Full-Stack Developer",
  "Status: Open to Work",
];

// Simple Java tokenizer for coloring
function highlight(line: string) {
  if (!line) return <>&nbsp;</>;
  const parts: React.ReactNode[] = [];
  const regex =
    /("(?:[^"\\]|\\.)*")|\b(public|private|static|void|class|new|return)\b|\b(String|int|boolean|double)\b|(System)|(\.out|\.println)|(\/\/.*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(line)) !== null) {
    if (m.index > last) parts.push(<span key={key++}>{line.slice(last, m.index)}</span>);
    const [full, str, kw, type, sys, member, comment] = m;
    if (str) parts.push(<span key={key++} className="text-[#98C379]">{full}</span>);
    else if (kw) parts.push(<span key={key++} className="text-[#C678DD]">{full}</span>);
    else if (type) parts.push(<span key={key++} className="text-[#D19A66]">{full}</span>);
    else if (sys) parts.push(<span key={key++} className="text-[#E5C07B]">{full}</span>);
    else if (member) parts.push(<span key={key++} className="text-[#61AFEF]">{full}</span>);
    else if (comment) parts.push(<span key={key++} className="text-[#5C6370] italic">{full}</span>);
    last = m.index + full.length;
  }
  if (last < line.length) parts.push(<span key={key++}>{line.slice(last)}</span>);
  return <>{parts}</>;
}

export function CodeTerminal() {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "running" | "done">("typing");
  const [outputIdx, setOutputIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (phase !== "typing") return;
    if (lineIdx >= CODE_LINES.length) {
      timerRef.current = setTimeout(() => setPhase("running"), 500);
      return;
    }
    const target = CODE_LINES[lineIdx].text;
    if (currentLine.length < target.length) {
      timerRef.current = setTimeout(() => {
        setCurrentLine(target.slice(0, currentLine.length + 1));
      }, target.length === 0 ? 0 : 18 + Math.random() * 30);
    } else {
      timerRef.current = setTimeout(() => {
        setTypedLines((prev) => [...prev, target]);
        setCurrentLine("");
        setLineIdx((i) => i + 1);
      }, target === "" ? 60 : 90);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentLine, lineIdx, phase]);

  useEffect(() => {
    if (phase !== "running") return;
    if (outputIdx >= OUTPUT_LINES.length) {
      timerRef.current = setTimeout(() => setPhase("done"), 2500);
      return;
    }
    timerRef.current = setTimeout(() => setOutputIdx((i) => i + 1), 450);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, outputIdx]);

  // Restart loop
  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => {
      setTypedLines([]);
      setCurrentLine("");
      setLineIdx(0);
      setOutputIdx(0);
      setPhase("typing");
    }, 3500);
    return () => clearTimeout(t);
  }, [phase]);

  const totalLines = CODE_LINES.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative group w-full"
    >
      {/* Outer glow */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/40 via-primary/10 to-primary/40 opacity-60 blur-lg transition-opacity group-hover:opacity-90" />

      <div className="relative flex flex-col overflow-hidden rounded-2xl border border-primary/25 bg-[#0B0F1A]/95 font-mono shadow-2xl backdrop-blur">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-orange-400">☕</span>
            Developer.java
          </div>
          <div className="w-10" />
        </div>

        {/* Code area */}
        <div className="flex gap-3 overflow-x-auto px-3 py-4 text-[11px] leading-6 sm:px-4 sm:text-[13px]">
          <div className="select-none text-right text-slate-600">
            {Array.from({ length: totalLines }).map((_, i) => (
              <div key={i}>{String(i + 1).padStart(2, "0")}</div>
            ))}
          </div>
          <div className="flex-1 text-slate-200">
            {typedLines.map((ln, i) => (
              <div key={i} className="whitespace-pre">
                {"  ".repeat(CODE_LINES[i]?.indent ?? 0)}
                {highlight(ln)}
              </div>
            ))}
            {phase === "typing" && lineIdx < CODE_LINES.length && (
              <div className="whitespace-pre">
                {"  ".repeat(CODE_LINES[lineIdx].indent)}
                {highlight(currentLine)}
                <span className="ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] animate-pulse bg-primary" />
              </div>
            )}
            {/* Fill blank space so height is stable */}
            {phase !== "typing" &&
              Array.from({ length: Math.max(0, totalLines - typedLines.length) }).map((_, i) => (
                <div key={`sp-${i}`}>&nbsp;</div>
              ))}
          </div>
        </div>

        {/* Console */}
        <div className="border-t border-white/5 bg-black/40 px-4 py-3 text-[12.5px] leading-6">
          <div className="flex items-center gap-2 text-primary">
            <span>$</span>
            <span className="text-slate-300">java Developer</span>
            {phase === "running" && (
              <span className="ml-1 inline-block h-2 w-2 animate-ping rounded-full bg-primary" />
            )}
          </div>
          <div className="min-h-[72px]">
            {(phase === "running" || phase === "done") &&
              OUTPUT_LINES.slice(0, phase === "done" ? OUTPUT_LINES.length : outputIdx).map(
                (line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className={
                      line.includes("Open to Work")
                        ? "text-[#27C93F] font-semibold"
                        : "text-slate-200"
                    }
                  >
                    {line}
                  </motion.div>
                )
              )}
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/5 bg-primary/[0.06] px-4 py-1 text-[10px] uppercase tracking-widest text-primary/80">
          <div className="flex gap-3">
            <span>Java 17</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#27C93F]" />
            Live
          </div>
        </div>
      </div>
    </motion.div>
  );
}
