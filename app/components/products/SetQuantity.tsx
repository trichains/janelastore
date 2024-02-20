'use client';

import { CartProductType } from '@/app/product/[productId]/ProductDetails';

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

const btnStyles = 'border-[1.2px] border-zinc-300 rounded px-2 transition hover:scale-105 ease-in';
const increaseBtnStyles = `${btnStyles} hover:text-emerald-500 hover:border-emerald-500`;
const decreaseBtnStyles = `${btnStyles} hover:text-rose-500 hover:border-rose-500`;

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartProduct,
  cartCounter,
  handleQuantityIncrease,
  handleQuantityDecrease
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">Quantidade</div>}
      <div className="flex gap-4 items-center text-base">
        <button onClick={handleQuantityDecrease} className={decreaseBtnStyles}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQuantityIncrease} className={increaseBtnStyles}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
