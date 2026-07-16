import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, children }: Props) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          {eyebrow && (
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          )}
          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
