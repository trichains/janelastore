import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import { createContext, useCallback, useContext, useState } from 'react';

type CartContextType = {
  cartTotalQuantity: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(10);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

      return updatedCart;
    });
  }, []);

  const value = { cartTotalQuantity, cartProducts, handleAddProductToCart };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error('useCart deve ser usado dentro do CartContextProvider');
  }

  return context;
};
