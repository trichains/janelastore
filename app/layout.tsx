import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'JanelaStore - Ecommerce',
  description: 'ecommerce',
  openGraph: {
    title: 'JanelaStore - Ecommerce',
    description: 'ecommerce',
    url: 'https://janelastore.vercel.app/',
    siteName: 'JanelaStore',
    images: [{ url: 'https://janelastore.vercel.app/logo.png' }],
    locale: 'pt-BR',
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
      <body className={`${poppins.className} text-zinc-700`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
