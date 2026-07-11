export const fund = {
  name: "Obsidian Capital",
  wordmark: "OBSIDIAN",
  tagline: "Quiet capital for decentralized markets",
  heroLine1: "Wealth prefers",
  heroLine2: "silence.",
  intro:
    "Obsidian Capital is a private, invitation-only digital-asset fund. We allocate patient capital across decentralized markets with the discipline of a family office and the precision of a quantitative desk.",
  established: "Est. 2021",
  accessNote: "By invitation only",
};

export const stats = [
  { value: "$1.4B", label: "Assets under management" },
  { value: "87", label: "Limited partners" },
  { value: "31.2%", label: "Net IRR since inception" },
  { value: "4", label: "Years of operation" },
];

export type Principle = {
  index: string;
  title: string;
  body: string;
};

export const philosophy: Principle[] = [
  {
    index: "01",
    title: "Preservation before growth",
    body: "We are custodians first, investors second. Every position begins with the question of what can be lost, not what can be gained. Drawdown discipline is the foundation of compounding.",
  },
  {
    index: "02",
    title: "Asymmetric opportunities",
    body: "Decentralized markets are young, fragmented and structurally inefficient. We concentrate where informational and structural edges compound — and abstain everywhere else.",
  },
  {
    index: "03",
    title: "Radical discretion",
    body: "Our positions, our partners and our research remain private. We publish nothing, market nothing and grow by referral alone. Discretion is not secrecy; it is respect.",
  },
  {
    index: "04",
    title: "Alignment of interest",
    body: "The partners' own capital represents the largest single commitment in the fund. We charge on performance, not on presence, and we invest on the same terms as those we serve.",
  },
];

export type Partner = {
  name: string;
  role: string;
  note: string;
};

export const team: Partner[] = [
  {
    name: "A. Voronova",
    role: "Managing Partner",
    note: "Former head of derivatives, European private bank",
  },
  {
    name: "J. Whitmore",
    role: "Chief Investment Officer",
    note: "Fifteen years across macro and digital assets",
  },
  {
    name: "S. Takahashi",
    role: "Head of Research",
    note: "Cryptography PhD, protocol economics",
  },
];

export const quote = {
  text: "The market rewards patience with everything it takes from haste.",
  author: "J. Whitmore",
  role: "Chief Investment Officer",
};

export const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Performance", href: "#performance" },
  { label: "Partners", href: "#partners" },
];

export const footerLinks = [
  { label: "Contact", href: "mailto:partners@obsidian.example" },
  { label: "Legal", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export const disclaimer =
  "Obsidian Capital is a fictitious entity presented for demonstration purposes. Nothing on this page constitutes investment advice or an offer of securities. Past performance is not indicative of future results.";
