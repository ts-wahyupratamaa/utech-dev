import type {
  AboutCard,
  AboutContent,
  FaqIntro,
  FaqItem,
  HeroCard,
  HeroContent,
  NavLink,
  ServiceProcessItem,
  ShowcaseContent,
} from './types';

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'services-process', label: 'Service' },
  { id: 'about', label: 'About Us' },
  { id: 'technical-questions', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const heroContent: HeroContent = {
  title: 'Empowering Your Business with Empowering Your Business with',
  subtitle:
    'End-to-end technology support to keep your operations competitive in the digital era.',
  ctaPrimary: { label: 'JOIN WITH US', to: 'contact' },
  ctaSecondary: { label: 'VIEW MORE', to: 'about' },
};

export const heroCards: HeroCard[] = [
  {
    title: 'Custom Development',
    desc: 'We build apps designed specifically to match your business goals and workflows.',
    icon: 'screwdriver-wrench',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Scalable Architecture',
    desc: 'Every product is built to grow — ready for more users, features, and integration.',
    icon: 'chart-line',
    iconColor: 'text-purple-400',
  },
  {
    title: 'End-to-End Support',
    desc: 'From planning, development, deployment, to maintenance we handle everything.',
    icon: 'rotate',
    iconColor: 'text-green-400',
  },
];

export const aboutContent: AboutContent = {
  eyebrow: 'Who We Are?',
  title: 'Designed for You,',
  accent: 'Coded by Us!',
  desc:
    'Every idea starts with you—we just make it real. Your vision leads the way, our technology brings it to life.',
  image: {
    src: '/13.jpeg',
    alt: 'Team About Us',
  },
};

export const aboutCards: AboutCard[] = [
  {
    title: 'Innovation at the Core',
    desc:
      'We create technology that keeps businesses ahead. We continuously adopt modern frameworks, automation, and creative problem-solving to deliver future-proof digital products.',
    icon: 'lightbulb',
    tags: ['Easy Customization', 'Tech Innovation'],
  },
  {
    title: 'Quality That Drives Performance',
    desc:
      'Every line of code is built for reliability, speed, and scalability. We follow industry development standards, testing, and secure architecture to ensure long-lasting product performance.',
    icon: 'medal',
    tags: ['High Performance', 'Industry Standards'],
  },
  {
    title: 'Collaboration for Real Impact',
    desc:
      'We listen, we care, and we build together. We partner with clients as part of their team, aligning technology with business goals for measurable results.',
    icon: 'handshake',
    tags: ['Partnership', 'Communication'],
  },
];

export const servicesProcess: ServiceProcessItem[] = [
  {
    label: 'Website Dev',
    number: '01',
    title: 'Website Development',
    desc:
      'Crafting responsive and dynamic web solutions tailored to your business needs, from e-commerce to custom platforms.',
    image: '/5.png',
    alt: 'Website Development',
  },
  {
    label: 'Mobile App Dev',
    number: '02',
    title: 'Mobile App Development',
    desc:
      'Building intuitive and high-performance mobile applications for iOS and Android, ensuring seamless user experiences.',
    image: '/6.png',
    alt: 'Mobile App Development',
  },
  {
    label: 'Game Dev',
    number: '03',
    title: 'Game Development',
    desc:
      'Developing engaging and immersive gaming experiences across various platforms, from concept to launch.',
    image: '/4.png',
    alt: 'Game Development',
  },
  {
    label: 'Artificial Intelligence',
    number: '04',
    title: 'Artificial Intelligence',
    desc:
      'Integrating advanced AI solutions to automate tasks, personalize experiences, and derive intelligent insights for your business.',
    image: '/7.png',
    alt: 'Artificial Intelligence',
  },
];

export const showcaseContent: ShowcaseContent = {
  eyebrow: 'Service',
  titleLine1: 'Experience the results of our',
  titleLine2: 'commitment.',
  ctaLabel: 'JOIN WITH US',
  note: 'Every project you see here started with a simple idea - tell us yours.',
  slides: [
    { src: '/porto1.png', alt: 'Dashboard' },
    { src: '/porto2.png', alt: 'Dashboard 2' },
    { src: '/porto3.png', alt: 'Dashboard 3' },
    { src: '/porto4.png', alt: 'Dashboard 4' },
  ],
  highlights: [
    {
      title: 'Product',
      desc:
        'We develop e-commerce websites that are fast, secure, and optimized to drive sales.',
      icon: 'code',
    },
    {
      title: 'Industry',
      desc: 'Website Development tailored for your specific industry needs.',
      icon: 'globe',
    },
    {
      title: 'Core Technologies',
      desc: 'Laravel, PHP, HTML, CSS, Tailwind, JavaScript.',
      icon: 'share-nodes',
    },
  ],
};

export const faqIntro: FaqIntro = {
  title: 'Technical',
  accent: 'Questions',
  desc:
    'Find answers to common questions about our services, processes, and technologies.',
  listTitle: 'Frequently Asked Questions',
  ctaLabel: 'CONTACT SUPPORT',
};

export const faqItems: FaqItem[] = [
  {
    kind: 'tags',
    question: 'What services do you offer?',
    intro:
      'We provide comprehensive services including web development, mobile app development, game development, and advanced AI integration for businesses of all sizes.',
    tags: [
      { label: 'Web Development', className: 'bg-primary-orange/10 text-primary-orange' },
      { label: 'Mobile Apps', className: 'bg-blue-500/10 text-blue-400' },
      { label: 'Game Development', className: 'bg-purple-500/10 text-purple-400' },
      { label: 'AI Solutions', className: 'bg-green-500/10 text-green-400' },
    ],
  },
  {
    kind: 'steps',
    question: 'How do I start a project with your team?',
    steps: [
      'Initial consultation to understand your goals',
      'Planning & proposal with timeline and cost',
      'Development & testing phase',
      'Launch & ongoing support',
    ],
  },
  {
    kind: 'timelines',
    question: 'How long does a typical project take?',
    maxWeeks: 24,
    timelines: [
      { title: 'Small Website', duration: '3–6 weeks', maxWeeks: 6 },
      { title: 'E-commerce Platform', duration: '8–16 weeks', maxWeeks: 16 },
      { title: 'Custom Web App', duration: '12–24 weeks', maxWeeks: 24 },
      { title: 'Mobile Application', duration: '10–20 weeks', maxWeeks: 20 },
    ],
  },
  {
    kind: 'packages',
    question: 'Do you provide maintenance after the project is completed?',
    packages: [
      { title: 'Basic Support', desc: 'Bug fixes & security updates', icon: 'shield-alt' },
      {
        title: 'Standard Maintenance',
        desc: 'Monitoring & updates',
        icon: 'cogs',
        highlight: true,
      },
      { title: 'Premium Care', desc: 'Full support + new features', icon: 'star' },
    ],
  },
  {
    kind: 'tech',
    question: 'What technologies do you use?',
    groups: [
      {
        title: 'Frontend',
        items: ['React', 'Vue', 'JavaScript', 'HTML5', 'CSS', 'Tailwind'],
      },
      {
        title: 'Backend',
        items: ['Django', 'Laravel', 'Node.js', 'PHP', 'Python'],
      },
      { title: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    ],
  },
];
