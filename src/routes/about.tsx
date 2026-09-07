import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Award,
  BrainCircuit,
  Download,
  Mail,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  TicketCheck,
} from "lucide-react";

import photo from "@/assets/caleb-krewu.png.asset.json";
import cv from "@/assets/caleb-krewu-cv.docx.asset.json";
import { MagneticButton } from "@/components/portfolio/MagneticButton";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import {
  ABOUT_TEXT,
  EMAIL,
  expertise,
  stats,
  toolkit,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Caleb Krewu — IT Operations & Support Technician" },
      {
        name: "description",
        content:
          "Learn about Caleb Krewu, an IT operations and support technician specialising in service desk support, systems administration, data integrity and applied AI.",
      },
      { property: "og:title", content: "About — Caleb Krewu — IT Operations & Support Technician" },
      {
        property: "og:description",
        content:
          "IT support professional delivering dependable service desk, systems administration and data integrity assurance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://caleb-krewu-tech-hub.lovable.app/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://caleb-krewu-tech-hub.lovable.app/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div id="top" className="min-h-screen scroll-smooth">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero pt-32 pb-24 text-primary-foreground">
        <div
          aria-hidden
          className="float-slow pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-turquoise/25 blur-3xl"
        />
        <div
          aria-hidden
          className="float-slow pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-turquoise-deep/20 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-turquoise/30 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.24em] uppercase backdrop-blur transition-all duration-300 hover:border-turquoise/60 hover:bg-white/10">
                <Sparkles className="size-3.5 text-turquoise" />
                About me
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
                Caleb Emile Krewu
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 font-display text-xl font-medium sm:text-2xl">
                IT Operations & Support Technician
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
                {ABOUT_TEXT}
              </p>
            </Reveal>
            <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href={`mailto:${EMAIL}?subject=IT%20Support%20Opportunity`}>
                Get in touch
                <Mail className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </MagneticButton>
              <MagneticButton
                href={cv.url}
                download
                className="border-turquoise/40 bg-white/10 text-primary-foreground hover:bg-white/20"
                variant="outline"
              >
                <Download className="size-4" />
                Download CV
              </MagneticButton>
            </Reveal>
          </div>

          {/* Photo */}
          <Reveal delay={200} className="justify-self-center">
            <div className="group relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full gradient-band opacity-30 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
              />
              <div className="relative size-64 overflow-hidden rounded-full border border-turquoise/40 shadow-lift sm:size-80">
                <img
                  src={photo.url}
                  alt="Portrait of Caleb Emile Krewu, IT operations and support technician"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-turquoise/30 bg-ink/80 px-5 py-2 text-[0.65rem] font-semibold tracking-[0.22em] uppercase backdrop-blur">
                IT Support Technician
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div aria-hidden className="h-1.5 w-full gradient-band" />

      {/* Stats */}
      <section className="bg-mist/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <div className="glass-card group rounded-2xl p-6">
                <p className="font-display text-3xl font-semibold gradient-text transition-transform duration-300 group-hover:scale-105">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Professional Profile" title="Systems-focused IT support practitioner" />
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <div className="glass-card rounded-3xl p-8 sm:p-10">
              <div className="space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
                <p>
                  Caleb Krewu is a detail-oriented IT operations and support technician with
                  experience across service desk support, information systems administration and
                  data integrity management. His foundation was built within a government finance
                  environment, where enterprise platform accuracy, internal controls and
                  confidentiality were core operational requirements.
                </p>
                <p>
                  His current service desk practice covers hardware, software, network and account
                  incidents from logging through to resolution, with clear prioritisation,
                  escalation and documentation. He also applies a governance-led approach to
                  information systems: accurate records, auditable filing and proactive data anomaly
                  reporting. Certified in Python, generative AI, prompt engineering, supervised
                  machine learning and trustworthy AI, he is positioned to support responsible
                  AI-assisted workflows alongside core IT operations.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-card h-full rounded-3xl p-8">
              <h3 className="font-display text-sm font-semibold tracking-[0.22em] uppercase text-turquoise-deep">
                Toolkit
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {toolkit.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-steel bg-background/70 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-turquoise-deep hover:bg-accent/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Terminal className="size-4 text-turquoise-deep" /> Analytical, systematic
                  problem-solving
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-turquoise-deep" /> Confidential information
                  handling
                </p>
                <p className="flex items-center gap-2">
                  <Award className="size-4 text-turquoise-deep" /> Rapid adoption of new systems
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="bg-mist/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Core Capability"
            title="IT support and information systems expertise"
            intro="Four practice areas defining day-to-day delivery — incident resolution, systems administration, data governance and applied AI."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {expertise.map((area, index) => (
              <Reveal key={area.title} delay={index * 100}>
                <article className="glass-card group h-full rounded-3xl p-8">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-hero text-primary-foreground shadow-lift transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <area.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {area.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-turquoise-deep" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-ink py-8 text-center text-xs text-primary-foreground/55">
        <div aria-hidden className="mx-auto mb-6 h-px w-40 gradient-band" />
        © {new Date().getFullYear()} Caleb Emile Krewu · IT Operations & Support Technician
      </footer>
    </div>
  );
}
