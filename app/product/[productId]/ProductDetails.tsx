'use client';

import Button from '@/app/components/Button';
import ProductImg from '@/app/components/products/ProductImg';
import SetColor from '@/app/components/products/SetColor';
import SetQuantity from '@/app/components/products/SetQuantity';
import { useCart } from '@/hooks/useCart';
import { Rating } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';

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
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
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

  const router = useRouter();

  console.log(cartProducts);

  useEffect(() => {
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const productRating =
    product.reviews.reduce(
      (acc: number, review: any) => acc + review.rating,
      0
    ) / product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQuantityIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => ({
      ...prev,
      quantity: prev.quantity + 1
    }));
  }, [cartProduct]);

  const handleQuantityDecrease = useCallback(() => {
    if (cartProduct.quantity > 1) {
      setCartProduct((prev) => ({
        ...prev,
        quantity: prev.quantity - 1
      }));
    }
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImg
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
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
        {isProductInCart ? (
          <>
            <p className="mb-2 text-zinc-500 flex items-center gap-1">
              <MdCheckCircle size={20} className="text-emerald-400" />
              <span>Produto adicionado ao carrinho!</span>
            </p>
            <div className="max-w-[200px]">
              <Button
                outline
                label="Ver carrinho"
                onClick={() => {
                  router.push('/cart');
                }}
              />
            </div>
          </>
        ) : (
          <>
            <SetColor
              images={product.images}
              cartProduct={cartProduct}
              handleColorSelect={handleColorSelect}
            />
            <Horizontal />
            <SetQuantity
              cartProduct={cartProduct}
              handleQuantityIncrease={handleQuantityIncrease}
              handleQuantityDecrease={handleQuantityDecrease}
            />
            <Horizontal />
            <div className="max-w-[200px]">
              <Button
                label="Adicionar ao carrinho"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
