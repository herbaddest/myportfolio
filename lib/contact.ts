import { contact } from "@/config/site";

export type ChannelKey =
  | "email"
  | "whatsapp"
  | "telegram"
  | "linkedin"
  | "github"
  | "instagram"
  | "x";

export type Channel = {
  key: ChannelKey;
  label: string;
  handle: string;
  href: string;
  /** Short verb shown on hover, e.g. "Send an email". */
  action: string;
  external: boolean;
};

const clean = (v: string) => v.replace(/^@/, "").trim();
const digits = (v: string) => v.replace(/[^\d]/g, "");

export function whatsappHref(withMessage = true) {
  const n = digits(contact.whatsapp);
  const text = withMessage && contact.whatsappMessage ? `?text=${encodeURIComponent(contact.whatsappMessage)}` : "";
  return `https://wa.me/${n}${text}`;
}

export function emailHref() {
  const subject = contact.emailSubject ? `?subject=${encodeURIComponent(contact.emailSubject)}` : "";
  return `mailto:${contact.email}${subject}`;
}

type ChannelSpec = {
  key: ChannelKey;
  label: string;
  value: string;
  /** Builds the channel URL from the cleaned handle. */
  href: (v: string) => string;
  /** Formats the visible handle text. */
  handle: (v: string) => string;
  action: string;
};

const base = (v: string) => clean(v);
const at = (v: string) => `@${clean(v)}`;

const specs: ChannelSpec[] = [
  {
    key: "email",
    label: "Email",
    value: contact.email,
    href: () => emailHref(),
    handle: (v) => v,
    action: "Send an email",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: contact.whatsapp,
    href: () => whatsappHref(),
    handle: (v) => `+${digits(v)}`,
    action: "Start a chat",
  },
  {
    key: "telegram",
    label: "Telegram",
    value: contact.telegram,
    href: (v) => `https://t.me/${base(v)}`,
    handle: at,
    action: "Message on Telegram",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: contact.linkedin,
    href: (v) => `https://www.linkedin.com/in/${base(v)}`,
    handle: (v) => `in/${base(v)}`,
    action: "Connect",
  },
  {
    key: "github",
    label: "GitHub",
    value: contact.github,
    href: (v) => `https://github.com/${base(v)}`,
    handle: at,
    action: "View repositories",
  },
  {
    key: "instagram",
    label: "Instagram",
    value: contact.instagram,
    href: (v) => `https://instagram.com/${base(v)}`,
    handle: at,
    action: "Follow",
  },
  {
    key: "x",
    label: "X",
    value: contact.x,
    href: (v) => `https://x.com/${base(v)}`,
    handle: at,
    action: "Follow",
  },
];

/** Every configured contact channel, in display order. Empty values are skipped. */
export function getChannels(): Channel[] {
  return specs
    .filter((s): s is ChannelSpec & { value: string } => Boolean(s.value))
    .map((s) => ({
      key: s.key,
      label: s.label,
      handle: s.handle(s.value),
      href: s.href(s.value),
      action: s.action,
      external: s.key !== "email",
    }));
}
