import {
  BrainCircuit,
  ServerCog,
  ShieldCheck,
  TicketCheck,
  type LucideIcon,
} from "lucide-react";

export const EMAIL = "calebkrewu1104@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/caleb-krewu-924840298";
export const GITHUB = "https://github.com/CVL3B-cpu";

export const ABOUT_TEXT =
  "IT support professional delivering dependable service desk, systems administration and data integrity assurance — reinforced by certified Python, responsible AI knowledge, hardware & upgrade support and OS support.";

export const stats = [
  { value: "1+", label: "Years across systems & support environments" },
  { value: "6", label: "AI & ICT certifications completed" },
  { value: "2", label: "Enterprise platforms operated (BAS, LOGIS)" },
  { value: "2", label: "Languages — English & Afrikaans" },
];

export const toolkit = [
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

export const expertise: { icon: LucideIcon; title: string; points: string[] }[] = [
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

export const experience = [
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

export const certifications = [
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

export const education = [
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
