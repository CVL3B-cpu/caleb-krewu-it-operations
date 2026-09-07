import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.32em] uppercase text-turquoise-deep">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </Reveal>
  );
}
