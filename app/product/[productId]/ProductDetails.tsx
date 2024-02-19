'use client';

import SetColor from '@/app/components/products/SetColor';
import { Rating } from '@mui/material';
import { useCallback, useState } from 'react';

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price
  });

  const productRating =
    product.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) / product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>aaa</div>
      <div className="flex flex-col gap-1 text-zinc-500 text-sm">
        <h2 className="text-3xl font-medium text-zinc-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} precision={0.5} readOnly />
          <div>{product.reviews.length} avaliações</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">Categoria:</span> {product.category}
        </div>
        <div>
          <span>Marca:</span> {product.brand}
        </div>
        <div className={product.inStock ? 'text-emerald-400' : 'text-rose-400'}>
          {product.inStock ? 'Em estoque' : 'Fora de estoque'}
        </div>
        <Horizontal />
        <SetColor images={product.images} cartProduct={cartProduct} handleColorSelect={handleColorSelect} />
        <Horizontal />
        <div>quantidade</div>
        <Horizontal />
        <div>adicionar ao carrinho</div>
      </div>
    </div>
  );
};

export default ProductDetails;
