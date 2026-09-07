import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Award,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import cv from "@/assets/caleb-krewu-cv.docx.asset.json";
import { MagneticButton } from "@/components/portfolio/MagneticButton";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { TypedText } from "@/components/portfolio/TypedText";
import {
  ABOUT_TEXT,
  certifications,
  education,
  EMAIL,
  experience,
  GITHUB,
  LINKEDIN,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caleb Krewu — IT Operations & Support Technician" },
      {
        name: "description",
        content:
          "Portfolio of Caleb Krewu, IT operations and support technician specialising in service desk support, information systems administration, data integrity and applied AI.",
      },
      { property: "og:title", content: "Caleb Krewu — IT Operations & Support Technician" },
      {
        property: "og:description",
        content:
          "Service desk support, enterprise systems administration, data integrity and applied AI — the professional portfolio of Caleb Krewu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://caleb-krewu-tech-hub.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://caleb-krewu-tech-hub.lovable.app/" }],
  }),
  component: Portfolio,
});

function Portfolio() {
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
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-turquoise/30 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.24em] uppercase backdrop-blur transition-all duration-300 hover:border-turquoise/60 hover:bg-white/10">
              <Sparkles className="size-3.5 text-turquoise" />
              Cape Town, South Africa
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
              Caleb Emile Krewu
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 font-display text-xl font-medium sm:text-2xl">
              <TypedText
                phrases={[
                  "IT Operations & Support Technician",
                  "Service Desk & Incident Management",
                  "Information Systems Administration",
                  "Applied AI & Automation",
                ]}
              />
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
              {ABOUT_TEXT}
            </p>
          </Reveal>
          <Reveal delay={320} className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton href="#contact">
              Get in touch
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
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
      </section>

      <div aria-hidden className="h-1.5 w-full gradient-band" />

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Professional track record"
          intro="Applied experience across service desk operations and enterprise systems administration within high-volume environments."
        />
        <div className="relative">
          <span
            aria-hidden
            className="absolute top-2 left-[7px] hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-turquoise-deep/70 via-steel to-transparent sm:block"
          />
          <div className="space-y-8">
            {experience.map((role, index) => (
              <Reveal key={role.role} delay={index * 110}>
                <div className="relative sm:pl-12">
                  <span
                    aria-hidden
                    className="absolute top-8 left-0 hidden size-4 rounded-full border-2 border-background gradient-hero shadow-lift transition-transform duration-300 group-hover:scale-125 sm:block"
                  />
                  <article className="glass-card group rounded-3xl p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {role.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-turquoise-deep">{role.org}</p>
                      </div>
                      <p className="rounded-full border border-steel bg-background/70 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
                        {role.period}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                      {role.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-turquoise-deep" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-mist/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Certifications"
            title="Certified knowledge & continuous development"
            intro="Formal coursework in Python, generative AI, prompt engineering, machine learning, trustworthy AI and enterprise ICT systems."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="glass-card group h-full rounded-3xl p-7">
                  <Award className="size-5 text-turquoise-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <h3 className="mt-4 font-display text-lg leading-snug font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground">
                    {item.issuer}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Education" title="Academic foundation" />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.qualification} delay={index * 110}>
              <article className="glass-card group h-full rounded-3xl p-8">
                <GraduationCap className="size-5 text-turquoise-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {item.qualification}
                </h3>
                <p className="mt-1 text-sm font-medium text-turquoise-deep">{item.school}</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground">
                  {item.period}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden gradient-hero py-24 text-primary-foreground">
        <div
          aria-hidden
          className="float-slow pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-turquoise/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.32em] uppercase text-turquoise">
              Contact
            </p>
            <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">
              <span className="shimmer-text">Available for IT support & operations roles</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">
              Open to IT support, service desk and systems administration opportunities. Direct
              enquiries are welcome by email or telephone.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Reveal delay={100}>
              <div className="rounded-3xl border border-turquoise/25 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-xs font-semibold tracking-[0.22em] uppercase text-turquoise">
                  Contact details
                </h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="underline-sweep inline-flex items-center gap-3 text-primary-foreground/85 transition-all duration-300 hover:translate-x-1 hover:text-primary-foreground"
                    >
                      <Mail className="size-4 text-turquoise" />
                      {EMAIL}
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+27712325608"
                      className="underline-sweep inline-flex items-center gap-3 text-primary-foreground/85 transition-all duration-300 hover:translate-x-1 hover:text-primary-foreground"
                    >
                      <Phone className="size-4 text-turquoise" />
                      071 232 5608
                    </a>
                  </li>
                  <li className="inline-flex items-center gap-3 text-primary-foreground/85">
                    <MapPin className="size-4 text-turquoise" />
                    Eersterivier, Cape Town, South Africa
                  </li>
                  <li>
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline-sweep inline-flex items-center gap-3 text-primary-foreground/85 transition-all duration-300 hover:translate-x-1 hover:text-primary-foreground"
                    >
                      <Linkedin className="size-4 text-turquoise" />
                      linkedin.com/in/caleb-krewu-924840298
                    </a>
                  </li>
                  <li>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline-sweep inline-flex items-center gap-3 text-primary-foreground/85 transition-all duration-300 hover:translate-x-1 hover:text-primary-foreground"
                    >
                      <Github className="size-4 text-turquoise" />
                      github.com/CVL3B-cpu
                    </a>
                  </li>
                </ul>
                <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-primary-foreground/60">
                  Languages: English (fluent) · Afrikaans (fluent). References available on request.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex h-full flex-col justify-center gap-6 rounded-3xl border border-turquoise/25 bg-white/5 p-8 text-center backdrop-blur">
                <p className="text-sm leading-relaxed text-primary-foreground/75">
                  Prefer the full document? Download the complete curriculum vitae, or start a
                  conversation directly.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <MagneticButton
                    href={`mailto:${EMAIL}?subject=IT%20Support%20Opportunity`}
                    variant="outline"
                    className="border-white/70 bg-background text-ink hover:bg-background/90"
                  >
                    <Mail className="size-4" />
                    Email Caleb
                  </MagneticButton>
                  <MagneticButton
                    href={cv.url}
                    download
                    variant="outline"
                    className="border-turquoise/40 bg-white/10 text-primary-foreground hover:bg-white/20"
                  >
                    <Download className="size-4" />
                    Download CV
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
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
