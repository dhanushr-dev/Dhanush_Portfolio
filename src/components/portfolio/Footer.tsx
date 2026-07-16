import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

const socials = [
  { Icon: FaGithub, href: "https://github.com/dhanushr-dev" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/dhanushr-dev/", label: "LinkedIn" },
  { Icon: SiHackerrank, href: "https://www.hackerrank.com/profile/dhanushrmdy" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-display text-sm font-semibold">
            Designed & Built by <span className="gradient-text">Dhanush R</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            Open to opportunities — Let's connect!
          </div>
        </div>
        <div className="flex gap-3">
          {socials.map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={label === "LinkedIn" ? (event) => {
                event.preventDefault();
                window.open(href, "_blank", "noopener,noreferrer");
              } : undefined}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
