import {
  navLinks as siteNavLinks,
  heroContent as siteHeroContent,
  heroCards as siteHeroCards,
  aboutContent as siteAboutContent,
  aboutCards as siteAboutCards,
  servicesProcess as siteServicesProcess,
  showcaseContent as siteShowcaseContent,
  faqIntro as siteFaqIntro,
  faqItems as siteFaqItems,
} from '@/app/data/site';
import type { FaqItem } from '@/app/data/types';

export const siteContent = {
  navLinks: siteNavLinks,
  heroContent: siteHeroContent,
  heroCards: siteHeroCards,
  aboutContent: siteAboutContent,
  aboutCards: siteAboutCards,
  servicesProcess: siteServicesProcess,
  showcaseContent: siteShowcaseContent,
  faqIntro: siteFaqIntro,
  faqItems: siteFaqItems as FaqItem[],
};

export type SiteContent = typeof siteContent;

export function getSiteContent(): SiteContent {
  return siteContent;
}

export const content = {
  navLinks: siteContent.navLinks,
  heroContent: siteContent.heroContent,
  heroCards: siteContent.heroCards,
  aboutContent: siteContent.aboutContent,
  aboutCards: siteContent.aboutCards,
  servicesProcess: siteContent.servicesProcess,
  showcaseContent: siteContent.showcaseContent,
  faqIntro: siteContent.faqIntro,
  faqItems: siteContent.faqItems,
};

export const navLinks = content.navLinks;
export const heroContent = content.heroContent;
export const heroCards = content.heroCards;
export const aboutContent = content.aboutContent;
export const aboutCards = content.aboutCards;
export const servicesProcess = content.servicesProcess;
export const showcaseContent = content.showcaseContent;
export const faqIntro = content.faqIntro;
export const faqItems = content.faqItems;
