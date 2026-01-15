import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import Aos from './components/Aos';
import { siteMeta, siteUrl } from '@/app/data/seo';
import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  applicationName: siteMeta.name,
  creator: siteMeta.name,
  publisher: siteMeta.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: siteMeta.locale,
    url: siteUrl,
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: siteMeta.name,
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: siteMeta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
    creator: siteMeta.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Aos />
        <Nav />
        {children}
      </body>
    </html>
  );
}
