import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const topLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const sectionLinks = [
  { to: "/", hash: "experience", label: "Experience" },
  { to: "/", hash: "certifications", label: "Certifications" },
  { to: "/", hash: "education", label: "Education" },
  { to: "/", hash: "contact", label: "Contact" },
];

function NavLink({
  to,
  hash,
  label,
  scrolled,
}: {
  to: string;
  hash?: string;
  label: string;
  scrolled: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  const baseClass = cn(
    "underline-sweep text-xs font-medium tracking-[0.14em] uppercase transition-colors",
    scrolled
      ? "text-muted-foreground hover:text-foreground"
      : "text-white/70 hover:text-white",
  );

  if (hash && isHome) {
    return (
      <a href={`#${hash}`} className={baseClass}>
        {label}
      </a>
    );
  }

  if (hash) {
    return (
      <Link
        to={to}
        hash={hash}
        className={baseClass}
        activeProps={{ className: cn(baseClass, scrolled ? "text-foreground" : "text-white") }}
        activeOptions={{ exact: false, includeHash: true }}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={baseClass}
      activeProps={{ className: cn(baseClass, scrolled ? "text-foreground" : "text-white") }}
      activeOptions={{ exact: true }}
    >
      {label}
    </Link>
  );
}

function ContactButton({ scrolled }: { scrolled: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const className = cn(
    "rounded-full border border-turquoise-deep/40 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-accent/50 hover:shadow-lift",
    scrolled
      ? "text-foreground"
      : "text-primary-foreground border-white/40 hover:bg-white/10",
  );

  if (isHome) {
    return (
      <a href="#contact" className={className}>
        Contact
      </a>
    );
  }

  return (
    <Link to="/" hash="contact" className={className}>
      Contact
    </Link>
  );
}

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
        <Link
          to="/"
          className="font-display text-sm font-semibold tracking-[0.35em] uppercase"
        >
          <span className={scrolled ? "gradient-text" : "shimmer-text"}>C. Krewu</span>
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {topLinks.map((link) => (
            <li key={link.to}>
              <NavLink {...link} scrolled={scrolled} />
            </li>
          ))}
          {sectionLinks.map((link) => (
            <li key={link.hash}>
              <NavLink {...link} scrolled={scrolled} />
            </li>
          ))}
        </ul>
        <ContactButton scrolled={scrolled} />
      </nav>
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full gradient-band transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
