import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  download?: boolean;
  external?: boolean;
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "solid",
  download,
  external,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    const label = inner.current;
    if (!node || !label) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`;
    label.style.transform = `translate(${x * 0.1}px, ${y * 0.14}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
    if (inner.current) inner.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-[transform,box-shadow,background-color,color] duration-300 ease-out will-change-transform",
        variant === "solid"
          ? "gradient-hero text-primary-foreground shadow-lift hover:brightness-115"
          : "border border-turquoise-deep/50 bg-background/60 text-foreground backdrop-blur hover:border-turquoise-deep hover:bg-accent/40",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full gradient-band opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-25"
      />
      <span ref={inner} className="relative flex items-center gap-2 transition-transform duration-300">
        {children}
      </span>
    </a>
  );
}
