import { motion } from "framer-motion";
import { Section } from "./Section";
import { Users, Brain, Zap, Award, Target, Languages, Globe } from "lucide-react";


type LanguageProficiency = {
  language: string;
  proficiency: string;
  percentage: number;
};

const languages: LanguageProficiency[] = [
  {
    language: "Kannada",
    proficiency: "Native",
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

          <div className="flex flex-wrap gap-3">
            {[
              { name: "Problem Solving", icon: Brain, color: "from-purple-500 to-indigo-600" },
              { name: "Team Collaboration", icon: Users, color: "from-cyan-500 to-blue-600" },
              { name: "Communication", icon: Zap, color: "from-amber-500 to-orange-600" },
              { name: "Adaptability", icon: Award, color: "from-emerald-500 to-teal-600" },
              { name: "Quick Learning", icon: Target, color: "from-rose-500 to-pink-600" },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group inline-flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-primary/40 hover:shadow-glow-sm"
              >
                <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-sm`}>
                  <skill.icon size={16} />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
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
          </div>
        </div>
      </div>
    </Section>
  );
}
