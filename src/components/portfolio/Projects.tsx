import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import shopeaseAsset from "@/assets/shopease-preview.png.asset.json";
import airsenseAsset from "@/assets/airsense-preview.png.asset.json";
import ecommerceCliPreview from "@/assets/ecommerce-cli-preview.png";

type Project = {
  title: string;
  tag: string;
  image: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "ShopEase",
    tag: "E-Commerce Platform",
    image: shopeaseAsset.url,
    description:
      "A full-stack e-commerce web app with product listing, cart, order management, user authentication (JWT), and an admin dashboard. Built with Spring Boot backend and React frontend.",
    stack: ["Spring Boot", "React", "Tailwind CSS", "MySQL", "REST API", "JWT"],
    github: "https://github.com/dhanushr-dev/shopease",
    demo: "https://shopease-iucm.onrender.com/",
    gradient: "from-cyan-500/30 to-blue-500/10",
  },
  {
    title: "AirSense Pro",
    tag: "Air Quality Lab Project",
    image: airsenseAsset.url,
    description:
      "A real-time Air Quality Index dashboard for different locations with weather conditions, particulate matter tracking, interactive map, and AI health recommendations.",
    stack: ["Java", "HTML", "CSS", "MySQL"],
    github: "https://github.com/dhanushr-dev/airsense-pro",
    demo: "https://airsensepro.netlify.app/",
    gradient: "from-emerald-500/30 to-teal-500/10",
  },
  {
    title: "E-Commerce Management System",
    tag: "Console-Based Java App",
    image: ecommerceCliPreview,
    description:
      "A console-based E-Commerce Management System built with Core Java, JDBC, and MySQL. Menu-driven interface to manage products, customers, orders, and inventory — showcasing CRUD operations, OOP principles, and database connectivity.",
    stack: ["Core Java", "JDBC", "MySQL", "OOP", "CRUD"],
    github: "https://github.com/dhanushr-dev/ECommerceManagementSystem",
    gradient: "from-orange-500/30 to-amber-500/10",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={<>Projects that <span className="gradient-text">solve problems</span></>}
      subtitle="A peek at what I've been building lately."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-2 hover:border-primary/60 hover:shadow-glow"
          >
            <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                {p.tag}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:text-primary"
                >
                  <Github size={16} />
                  Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow-sm transition-transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
