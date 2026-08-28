import { motion } from "framer-motion";
import { Section } from "./Section";
import { Users, Brain, Zap, Award, Target, Languages, Globe } from "lucide-react";


type LanguageProficiency = {
  language: string;
  proficiency: string;
};

const languages: LanguageProficiency[] = [
  {
    language: "Kannada",
    proficiency: "Native",
  },
  {
    language: "English",
    proficiency: "Professional",
  },
  {
    language: "Tamil",
    proficiency: "Professional Working",
  },
  {
    language: "Hindi",
    proficiency: "Limited Working",
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

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.language}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex justify-between items-center text-sm p-3.5 rounded-xl border border-border bg-surface/50"
                >
                  <span className="font-semibold text-foreground flex items-center gap-2">
                    <Globe size={16} className="text-primary" />
                    {lang.language}
                  </span>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                    {lang.proficiency}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
