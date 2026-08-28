import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { BeyondCode } from "@/components/portfolio/BeyondCode";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";


const SITE_URL = "https://summit-code-showcase.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhanush R — Aspiring Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Dhanush R — Aspiring Java Full Stack Developer with skills in Core Java, JEE, JDBC, JSP, MySQL, HTML, CSS, JavaScript. BE CSE 2026 graduate.",
      },
      { property: "og:title", content: "Dhanush R — Aspiring Java Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Aspiring Java Full Stack Developer building web applications. Open to full-time roles.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: "Dhanush R — Aspiring Java Full Stack Developer" },
      {
        name: "twitter:description",
        content: "Aspiring Java Full Stack Developer building web applications.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <BeyondCode />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </motion.div>
  );
}

