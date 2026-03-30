import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Liquid Shine Elite Mobile Detailing | Professional Auto Detailing Services',
  description:
    'Professional mobile detailing services for cars, boats, and RVs. Ceramic coating, auto detailing, and more in Parrish, FL.',
  keywords:
    'mobile detailing, auto detailing, ceramic coating, boat detailing, RV detailing, car detailing, Parrish FL',
  openGraph: {
    title: 'Liquid Shine Elite Mobile Detailing',
    description: 'Professional mobile detailing services for automotive, marine, and recreational vehicles.',
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
      <body className="min-h-screen flex flex-col bg-[#0f172a] text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
