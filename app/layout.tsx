import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/hanken-grotesk";
import { site, contact } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: `${site.name} — Portfolio`,
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0C1517",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const sameAs = [
  contact.github && `https://github.com/${contact.github}`,
  contact.linkedin && `https://www.linkedin.com/in/${contact.linkedin}`,
  contact.instagram && `https://instagram.com/${contact.instagram}`,
  contact.x && `https://x.com/${contact.x}`,
].filter(Boolean);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: contact.email ? `mailto:${contact.email}` : undefined,
  sameAs,
  knowsAbout: ["Next.js", "React", "TypeScript", "Python", "Supabase", "PostgreSQL", "M-Pesa", "Paystack", "Web development"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
