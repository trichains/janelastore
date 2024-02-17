import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import { Redressed } from 'next/font/google';

const redressed = Redressed({ subsets: ['latin'], weight: '400' });

const NavBar = () => {
  return (
    <div className="sticky top-[-1px] w-full bg-black text-white z-30 shadow-sm ">
      <div className="py-5">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" className={`font-bold text-2xl ${redressed.className}`}>
              <span className="text-emerald-500">J</span>anela
              <span className="text-gray-500">Store</span>
            </Link>
            <div className="hidden md:block">Pesquisar</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Carrinho</div>
              <div>Minha conta</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
