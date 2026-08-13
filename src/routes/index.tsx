import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Award,
  BrainCircuit,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  TicketCheck,
} from "lucide-react";

import photo from "@/assets/caleb-krewu.png.asset.json";
import cv from "@/assets/caleb-krewu-cv.docx.asset.json";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";
import { MagneticButton } from "@/components/portfolio/MagneticButton";
import { TypedText } from "@/components/portfolio/TypedText";

const EMAIL = "calebkrewu1104@gmail.com";
const LINKEDIN = "https://linkedin.com/in/caleb-krewu-924840298";
const GITHUB = "https://github.com/CVL3B-cpu";

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
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const expertise = [
  {
    icon: TicketCheck,
    title: "Service Desk & Incident Management",
    points: [
      "First and second line support across hardware, software, network and account issues",
      "Ticket lifecycle ownership with SLA-conscious triage, escalation and resolution documentation",
      "Remote diagnostics and structured root-cause troubleshooting",
    ],
  },
  {
    icon: ServerCog,
    title: "End-User Computing & Systems Administration",
    points: [
      "Windows 7–11, Microsoft 365 and Outlook support",
      "Enterprise platform operation on BAS and LOGIS",
      "User onboarding, access provisioning and application support",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Information Systems & Data Governance",
    points: [
      "Data integrity assurance and internal control deficiency reporting",
      "Pre-audit compliance verification and records management",
      "Confidential information handling and governance-aligned documentation",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Applied AI & Automation",
    points: [
      "Certified Python programming and prompt engineering",
      "Supervised machine learning, advanced learning algorithms and trustworthy AI",
      "Responsible AI application to improve workplace productivity",
    ],
  },
];

const experience = [
  {
    role: "IT Support Service Desk Technician",
    org: "CAPACITI",
    period: "June 2026 – Present",
    points: [
      "Frontline technical support for hardware, software, network and system incidents",
      "Ticket prioritisation, remote troubleshooting and user access administration",
      "Clear documentation and escalation aligned to business impact",
    ],
  },
  {
    role: "Financial Systems & Administration Intern",
    org: "Western Cape Government — Chief Directorate: Finance",
    period: "May 2023 – February 2024",
    points: [
      "Data capturing, transaction processing and reporting on the BAS enterprise system",
      "Pre-audit compliance checks, duplication detection and batch validation",
      "Hybrid physical and electronic records management with high-volume digitisation",
    ],
  },
];

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Coursera · Google",
    detail: "Responsible and effective use of AI tools to support productivity and workflows.",
  },
  {
    title: "Generative AI & Prompt Engineering",
    issuer: "Coursera",
    detail: "Generative AI fundamentals, prompting techniques and responsible AI use.",
  },
  {
    title: "Python, Machine Learning & Trustworthy AI",
    issuer: "Accredited online coursework",
    detail: "Python programming, supervised ML, advanced learning algorithms and trustworthy AI.",
  },
  {
    title: "WCG Basic ICT Training",
    issuer: "Western Cape Government",
    detail: "Departmental ICT fundamentals, systems usage and workplace technology practice.",
  },
  {
    title: "BAS Financial Systems Training",
    issuer: "Western Cape Government",
    detail: "Enterprise systems training on BAS and financial management controls.",
  },
];

const toolkit = [
  "Windows 7 / 8 / 10 / 11",
  "Microsoft 365 & Outlook",
  "Excel data management",
  "BAS",
  "LOGIS",
  "Ticketing & incident triage",
  "Remote support",
  "Records digitisation",
  "Python",
  "Prompt engineering",
  "Supervised ML",
  "Trustworthy AI",
];

const education = [
  {
    qualification: "Higher Certificate in Economic Development",
    school: "University of the Western Cape",
    period: "2024 – 2025",
    detail:
      "Distinctions in Development Economics, Organisational Development and Local Governance. Coursework included Managing Information and Communication, Research Methodology and Training Design.",
  },
  {
    qualification: "National Senior Certificate",
    school: "Apex High School",
    period: "2022",
    detail:
      "Mathematics, Life Sciences, Physical Sciences, Geography and Afrikaans First Additional Language (distinction).",
  },
];

const stats = [
  { value: "1+", label: "Years across systems & support environments" },
  { value: "6", label: "AI & ICT certifications completed" },
  { value: "2", label: "Enterprise platforms operated (BAS, LOGIS)" },
  { value: "2", label: "Languages — English & Afrikaans" },
];

function SectionHeading({
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
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-turquoise/30 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.24em] uppercase backdrop-blur">
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
              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
                IT support professional delivering dependable service desk, systems administration
                and data integrity assurance — reinforced by certified Python, machine learning and
                responsible AI knowledge.
              </p>
            </Reveal>
            <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-4">
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

          {/* Photo space */}
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
              <div className="glass-card rounded-2xl p-6">
                <p className="font-display text-3xl font-semibold gradient-text">{stat.value}</p>
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
                <article className="glass-card h-full rounded-3xl p-8">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-hero text-primary-foreground shadow-lift">
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

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Professional track record"
          intro="Applied experience across service desk operations, enterprise systems administration and process-critical service environments."
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
                    className="absolute top-8 left-0 hidden size-4 rounded-full border-2 border-background gradient-hero shadow-lift sm:block"
                  />
                  <article className="glass-card rounded-3xl p-8">
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
            intro="Formal coursework spanning Python programming, generative AI, prompt engineering, supervised machine learning, advanced learning algorithms, trustworthy AI and enterprise ICT systems."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="glass-card h-full rounded-3xl p-7">
                  <Award className="size-5 text-turquoise-deep" />
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
              <article className="glass-card h-full rounded-3xl p-8">
                <GraduationCap className="size-5 text-turquoise-deep" />
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
                      className="underline-sweep inline-flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                    >
                      <Mail className="size-4 text-turquoise" />
                      {EMAIL}
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+27712325608"
                      className="underline-sweep inline-flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                    >
                      <Phone className="size-4 text-turquoise" />
                      071 232 5608
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+27796012409"
                      className="underline-sweep inline-flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                    >
                      <Phone className="size-4 text-turquoise" />
                      079 601 2409
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
                      className="underline-sweep inline-flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
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
                      className="underline-sweep inline-flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
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
