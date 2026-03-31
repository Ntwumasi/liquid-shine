import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import ScrollAnimations from '@/components/ScrollAnimations';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Liquid Shine Elite Mobile Detailing | Professional Auto Detailing Services',
  description:
    'Professional mobile detailing services for cars, boats, and RVs. Ceramic coating, auto detailing, and more in Manatee & Sarasota Counties, FL.',
  keywords:
    'mobile detailing, auto detailing, ceramic coating, boat detailing, RV detailing, car detailing, Manatee County, Sarasota County, Parrish FL',
  openGraph: {
    title: 'Liquid Shine Elite Mobile Detailing',
    description: 'Professional mobile detailing services for automotive, marine, and recreational vehicles in Manatee & Sarasota Counties.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-[#333333]`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
        <ScrollAnimations />
      </body>
    </html>
  );
}
