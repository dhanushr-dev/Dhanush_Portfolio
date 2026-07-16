import { motion } from "framer-motion";
import { Section } from "./Section";
import { Users, Brain, Zap, Award, Target, Languages, Globe } from "lucide-react";

type SoftSkill = {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
};

type LanguageProficiency = {
  language: string;
  proficiency: string;
  percentage: number;
};

const softSkills: SoftSkill[] = [
  {
    name: "Team Collaboration",
    description: "Experienced in coordinating within diverse teams, aligning priorities, and sharing knowledge.",
    icon: Users,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Problem Solving",
    description: "Analytical mindset focused on breaking down complex problems and identifying optimal solutions.",
    icon: Brain,
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "Quick Learner",
    description: "Highly capable of adapting to new tech stacks and mastering workflows in rapid timelines.",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Adaptability",
    description: "Thrives in fast-paced environments and accommodates changing system specifications smoothly.",
    icon: Award,
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Self-Motivated",
    description: "Driven to write clean code, study design patterns, and constantly upgrade my skill sets.",
    icon: Target,
    color: "from-rose-500 to-pink-600",
  },
];

const languages: LanguageProficiency[] = [
  {
    language: "Kannada",
    proficiency: "Native / Bilingual",
    percentage: 100,
  },
  {
    language: "English",
    proficiency: "Professional",
    percentage: 95,
  },
  {
    language: "Tamil",
    proficiency: "Professional Working",
    percentage: 85,
  },
  {
    language: "Hindi",
    proficiency: "Limited Working",
    percentage: 60,
  },
];

export function BeyondCode() {
  return (
    <Section
      id="beyond-code"
      eyebrow="Beyond Code"
      title={<>Interpersonal <span className="gradient-text">Assets & Communication</span></>}
      subtitle="The soft skills and languages I bring to collaborative teams."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Soft Skills Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Brain size={20} />
            </div>
            <h3 className="font-display text-xl font-bold md:text-2xl">Soft Skills</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-glow-sm"
              >
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-md`}>
                  <skill.icon size={22} className="transition-transform group-hover:scale-110" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Languages size={20} />
            </div>
            <h3 className="font-display text-xl font-bold md:text-2xl">Languages</h3>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Strong verbal and written communication is crucial for syncing remote workflows and collaboration. Here is my language proficiency breakdown:
            </p>

            <div className="space-y-6">
              {languages.map((lang, i) => (
                <div key={lang.language} className="space-y-2">
                  <div className="flex justify-between items-end text-sm">
                    <span className="font-semibold text-foreground flex items-center gap-2">
                      <Globe size={14} className="text-primary/70" />
                      {lang.language}
                    </span>
                    <span className="text-muted-foreground text-xs bg-surface px-2.5 py-0.5 rounded-full border border-border">
                      {lang.proficiency}
                    </span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Extra visual note */}
            <div className="mt-8 flex gap-3 items-center rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs text-muted-foreground">
              <Globe size={18} className="text-primary shrink-0 animate-spin-slow" />
              <span>Multi-lingual capabilities facilitate teamwork and effective documentation within diverse localized projects.</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
