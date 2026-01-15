import type { SiteMeta } from './types';

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utech.sh';

export const siteUrl = rawUrl.replace(/\/$/, '');

export const siteMeta: SiteMeta = {
  name: 'Utech Software House',
  title: 'Utech Software House',
  description:
    'Utech adalah software house yang membantu bisnis membangun website, aplikasi mobile, sistem custom, dan solusi AI yang andal dan cepat.',
  keywords: [
    'software house',
    'jasa pembuatan website',
    'jasa pembuatan aplikasi',
    'mobile app',
    'website development',
    'custom software',
    'AI solutions',
    'pengembangan sistem',
    'Utech',
    'Malang',
  ],
  locale: 'id_ID',
  ogImage: '/porto1.png',
  twitterHandle: '@utechsh',
};
