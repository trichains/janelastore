'use client';

import { formatPrice } from '@/utils/formatPrice';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const productRating =
    data.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) /
    data.reviews.length;

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-zinc-100
      rounded-sm p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="relative aspect-square overflow-hidden w-full">
          <Image
            src={data.images[0].image}
            alt={data.name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{data.name}</div>
        <div>
          <Rating value={productRating} precision={0.5} readOnly />
        </div>
        <div className="flex flex-col gap-1">
          {data.reviews.length} avaliações
        </div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
