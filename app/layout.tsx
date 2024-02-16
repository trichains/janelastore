import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'janelaStore',
  description: 'ecommerce',
  openGraph: {
    title: 'janelaStore',
    description: 'ecommerce',
    url: 'https://janelastore.vercel.app/',
    siteName: 'janelaStore',
    images: [{ url: 'https://janelastore.vercel.app/logo.png' }],
    locale: 'pt_BR',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
