import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, Code2 } from "lucide-react";
import { useRef } from "react";
import { Section } from "./Section";
import dhanushAsset from "@/assets/dhanush.jpeg.asset.json";

const stats = [
  { icon: Award, label: "CGPA", value: "8.0" },
  { icon: Code2, label: "Major Projects", value: "2" },
];

function TiltPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto"
      style={{ perspective: 1000 }}
    >
      {/* subtle static glow */}
      <div className="absolute -inset-2 rounded-[2rem] bg-primary/10 blur-2xl" />

      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-72 w-72 rounded-[2rem] bg-gradient-to-tr from-primary to-primary-glow p-[2px] shadow-glow"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
          <img
            src={dhanushAsset.url}
            alt="Dhanush R — Full Stack Java Developer"
            className="h-full w-full object-cover"
            style={{ transform: "translateZ(40px)" }}
          />
          {/* shine sweep */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          />
          {/* corner brackets */}
          <div className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-primary-glow/70" />
          <div className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-primary-glow/70" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-primary-glow/70" />
          <div className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-primary-glow/70" />
        </div>

        {/* floating badge */}
        <motion.div
          style={{ transform: "translateZ(60px)" }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -right-4 rounded-2xl border border-primary/40 bg-surface-elevated/90 px-4 py-2 text-xs font-medium text-primary shadow-glow-sm backdrop-blur"
        >
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
          Open to Work
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Crafting code with <span className="gradient-text">purpose</span></>}
    >
      <div className="grid items-center gap-16 lg:grid-cols-[auto_1fr]">
        <TiltPhoto />

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            I'm a passionate <span className="text-foreground">Full Stack Java Developer</span> from
            Bangalore, currently completing my BE in Computer Science at
            <span className="text-foreground"> G Madegowda Institute of Technology (2026)</span>.
            I've trained at <span className="text-foreground">Tap Academy</span> building real-world
            applications using Java, Spring Boot, and React. I love turning ideas into
            <span className="text-foreground"> clean, scalable products</span> and I'm actively
            looking for my first IT role where I can contribute, learn fast, and grow with a
            strong engineering team.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, rotateX: 6, rotateY: -6 }}
                style={{ transformStyle: "preserve-3d", perspective: 800 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-glow-sm"
              >
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <s.icon className="text-primary" size={24} />
                <div className="mt-3 font-display text-3xl font-bold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
