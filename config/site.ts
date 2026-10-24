/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — the single place to edit everything on the portfolio.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  • Contact handles can ALSO be set with environment variables (see .env.example).
 *    Env vars take priority over the defaults written here.
 *  • Anything marked  TODO  is a placeholder waiting for real details.
 *  • To hide a contact channel, set its value to an empty string "".
 *  • To show a project screenshot, drop the image in /public/projects/ and set
 *    `image: "/projects/your-file.jpg"` on that project (16:10, e.g. 1800×1125).
 *    Projects with a screenshot get a large feature row; the rest appear in a list.
 */

const env = (value: string | undefined, fallback: string) =>
  value !== undefined && value.trim() !== "" ? value.trim() : fallback;

/* ── Identity ─────────────────────────────────────────────────────────────── */

export const site = {
  name: "Wanjiku",
  role: "Full-stack web developer",
  // TODO: confirm or change your location (used in the footer and SEO text).
  location: "Kenya",
  /** Two sentences under the name in the hero. Say what you build, for whom. */
  intro:
    "I build web apps that handle money: wallets, M-Pesa and card payments, admin dashboards, and the Supabase backends behind them. Based in Kenya, working with clients anywhere.",
  availability: "Open to freelance projects and full-time roles.",
  /** Optional photo of you for the About section, e.g. "/portrait.jpg" (put it in /public). */
  portrait: "",
  url: env(process.env.NEXT_PUBLIC_SITE_URL, "https://wanjiku.dev"), // TODO: your live domain
  title: "Wanjiku — Full-stack developer in Kenya",
  description:
    "Wanjiku is a full-stack developer in Kenya who builds web apps with payments, wallets and admin dashboards, using Next.js and Supabase.",
  keywords: [
    "Wanjiku",
    "full-stack developer Kenya",
    "Next.js developer",
    "Supabase",
    "M-Pesa integration",
    "Paystack integration",
    "admin dashboards",
    "web applications",
  ],
};

/* ── Contact channels ─────────────────────────────────────────────────────────
 *  Enter raw handles only — links are built automatically:
 *    whatsapp  → https://wa.me/<digits>      (international format, no + or spaces)
 *    telegram  → https://t.me/<username>
 *    email     → mailto:<address>
 *    instagram → https://instagram.com/<username>
 *    github    → https://github.com/<username>
 *    linkedin  → https://www.linkedin.com/in/<profile-slug>
 *    x         → https://x.com/<username>
 */
export const contact = {
  whatsapp: env(process.env.NEXT_PUBLIC_WHATSAPP, "254789829537"), // TODO
  whatsappMessage: "Hi Wanjiku, I found your portfolio and I'd like to talk about a project.",
  telegram: env(process.env.NEXT_PUBLIC_TELEGRAM, "@Her_techs"), // TODO
  email: env(process.env.NEXT_PUBLIC_EMAIL, "hermajesty5483@gmail.com"), // TODO
  emailSubject: "Project enquiry",
  instagram: env(process.env.NEXT_PUBLIC_INSTAGRAM, "@wan_jikuhh"), // TODO
  github: env(process.env.NEXT_PUBLIC_GITHUB, "herbaddest"), // TODO
  linkedin: env(process.env.NEXT_PUBLIC_LINKEDIN, "your-linkedin"), // TODO
  x: env(process.env.NEXT_PUBLIC_X, ""), // optional — leave "" to hide
};

/* ── Projects ─────────────────────────────────────────────────────────────── */

export type ProjectStatus = "live" | "completed" | "in-progress";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Screenshot path in /public, e.g. "/projects/honey-hive.jpg". Projects with one get a feature row. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "honey-hive",
    name: "HoneyHive",
    tagline: "Membership and rewards platform",
    description:
      "A membership and rewards web app built around eight VIP hive levels. Users create an account, fund a Honey Wallet with USDT (BEP-20), buy a hive and claim eligible daily rewards from a Tasks Center, backed by a transparent wallet ledger.",
    status: "live",
    tech: ["React", "Vite"], // add your backend / database here
    liveUrl: "https://honeyhive.onrender.com/",
    repoUrl: "", // TODO: GitHub repo (optional)
    image: "/projects/honey-hive.jpg",
  },
  {
    slug: "forge-capital",
    name: "Forge Capital",
    tagline: "Machine investments, in Kenyan shillings",
    description:
      "A platform for investing in income-generating machines from KSh 250. Users browse machines, hold units and track projected earnings across 7, 14 or 30-day cycles, with every price and cycle published up front.",
    status: "live",
    tech: ["Next.js", "React"], // add your backend / database here
    liveUrl: "https://forgecapital.onrender.com/",
    repoUrl: "", // TODO: GitHub repo (optional)
    image: "/projects/forge-capital.jpg",
  },
  {
    slug: "sneakylink",
    name: "SneakyLink",
    tagline: "Private connections, mutual interest",
    description:
      "An anonymous social matching app for campus students. People discover others nearby, chat in messages that self-destruct, and payments run through M-Pesa and Paystack.",
    status: "live",
    tech: ["JavaScript"], // TODO: confirm
    liveUrl: "https://sneakylink.fun/",
    repoUrl: "",
    image: "/projects/sneakylink.png",
  },
];

/* ── Services ─────────────────────────────────────────────────────────────── */

export const services = [
  {
    title: "Web apps with accounts and money",
    description:
      "Sign-up, wallets, balances, purchases and payouts, with every movement written to a ledger. M-Pesa and Paystack payments built in.",
  },
  {
    title: "Admin dashboards",
    description:
      "The back office: approvals, user management, reports and reconciliation, with role-based access, so the business stops running on spreadsheets.",
  },
  {
    title: "Websites and landing pages",
    description:
      "Fast, responsive sites in Next.js, structured for search and easy for you to keep up to date.",
  },
  {
    title: "Backends and integrations",
    description:
      "Supabase and PostgreSQL schemas, authentication, row-level security, webhooks, and connections to the services your product depends on.",
  },
] as const;

/* ── Tools ────────────────────────────────────────────────────────────────────
 *  Shown as plain text in the About section. Only list what you genuinely use.
 */
export const techStack = [
  { group: "Interface", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"] },
  { group: "Data and backend", items: ["Supabase", "PostgreSQL", "Node.js", "Express", "FastAPI", "Python"] },
  { group: "Payments", items: ["M-Pesa", "Paystack"] },
  { group: "Shipping", items: ["Git", "GitHub", "Vercel", "Render"] },
] as const;

/* ── Stats ─────────────────────────────────────────────────────────────────── */
export const stats = [
  { value: "3", label: "Products live" },
  { value: "2", label: "Payment providers" },
  { value: "E2E", label: "Design to deploy" },
  { value: "1", label: "Person to talk to" },
] as const;

/* ── Experience ─────────────────────────────────────────────────────────────── */
export const experience = [
  {
    period: "2023 — present",
    role: "Full-stack developer",
    org: "Independent / freelance",
    description:
      "Building web apps end to end for clients: accounts, wallets, M-Pesa and card payments, admin dashboards, and the Supabase backends behind them.",
  },
  {
    period: "2022 — 2023",
    role: "Frontend developer",
    org: "Contract work",
    description:
      "React and Next.js interfaces, responsive landing pages, and integrations with REST APIs and payment gateways.",
  },
] as const;

/* ── Navigation ───────────────────────────────────────────────────────────── */

export const navItems = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;
