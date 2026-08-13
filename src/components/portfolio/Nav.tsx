import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl shadow-lift"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-[0.35em] uppercase">
          <span className="gradient-text">C. Krewu</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-sweep text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-turquoise-deep/40 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-foreground transition-all duration-300 hover:bg-accent/50 hover:shadow-lift md:hidden"
        >
          Contact
        </a>
      </nav>
      <div className="h-[2px] w-full bg-transparent">
        <div className="h-full gradient-band transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}
