import { Link } from "react-router-dom";
import { Product } from "./../../types/Product";

type ProductCardProps = {
  key: number;
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link key={product.id} to={`/product/${product.id}`} className="group mb-8">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          alt={product.title}
          src={product.image}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </Link>
  );
};


export default ProductCard;

