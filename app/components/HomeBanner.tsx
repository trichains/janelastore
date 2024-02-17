import Image from 'next/image';

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-zinc-700 to-gray-950 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Promoção de Inverno!</h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-2">Aproveite descontos em itens selecionados</p>
          <p className="text-2xl md:text-5xl text-emerald-500 font-bold">Ganhe 50% OFF</p>
        </div>
        <div className="w-1/2 md:w-1/3 relative aspect-video">
          <Image src="/banner-img.webp" alt="Banner" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
