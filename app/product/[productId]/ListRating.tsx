'use client';

import Heading from '@/app/components/Heading';
import { Rating } from '@mui/material';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Avaliações dos clientes" center />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-300px">
                <div className="flex gap-2 items-center">
                  <div>Avatar</div>
                  <div className="font-semibold">{review?.user.name}</div>
                  <div className="text-zinc-500 font-light">{moment(review.createdAt).fromNow()}</div>
                </div>
                <div className="mt-2">
                  <Rating value={review.rating} precision={0.5} readOnly />
                  <div className="ml-2">{review.comment}</div>
                  <hr className="mt-4 mb-4" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
