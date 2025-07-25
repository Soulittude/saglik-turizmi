import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import { LangProvider } from '@/components/LanguageSwitcher';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sağlık Turizmi Klinik Platformu',
  description: 'Türkiye’nin önde gelen sağlık turizmi kliniklerini keşfedin.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LangProvider>
          <Layout>{children}</Layout>
        </LangProvider>
      </body>
    </html>
  );
}