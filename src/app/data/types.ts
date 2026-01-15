export type NavLink = {
  id: string;
  label: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; to: string };
  ctaSecondary: { label: string; to: string };
};

export type HeroCard = {
  title: string;
  desc: string;
  icon: string;
  iconColor: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  accent: string;
  desc: string;
  image: { src: string; alt: string };
};

export type AboutCard = {
  title: string;
  desc: string;
  icon: string;
  tags: string[];
};

export type ServiceProcessItem = {
  label: string;
  number: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
};

export type ShowcaseContent = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  ctaLabel: string;
  note: string;
  slides: { src: string; alt: string }[];
  highlights: { title: string; desc: string; icon: string }[];
};

export type FaqIntro = {
  title: string;
  accent: string;
  desc: string;
  listTitle: string;
  ctaLabel: string;
};

export type FaqTags = {
  kind: 'tags';
  question: string;
  intro: string;
  tags: { label: string; className: string }[];
};

export type FaqSteps = {
  kind: 'steps';
  question: string;
  steps: string[];
};

export type FaqTimelines = {
  kind: 'timelines';
  question: string;
  maxWeeks: number;
  timelines: { title: string; duration: string; maxWeeks: number }[];
};

export type FaqPackages = {
  kind: 'packages';
  question: string;
  packages: {
    title: string;
    desc: string;
    icon: string;
    highlight?: boolean;
  }[];
};

export type FaqTech = {
  kind: 'tech';
  question: string;
  groups: { title: string; items: string[] }[];
};

export type FaqItem = FaqTags | FaqSteps | FaqTimelines | FaqPackages | FaqTech;

export type SiteMeta = {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  locale: string;
  ogImage: string;
  twitterHandle?: string;
};
