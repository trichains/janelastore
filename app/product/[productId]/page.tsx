interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  const productId = params.productId;

  return <div>pagina do produto</div>;
};

export default Product;
