import { useQuery } from "@tanstack/react-query";
import fetchProducts from "./../../api/fetchProducts";
import Skeleton from "./../../components/Products/Skeleton";
import ProductCard from "./../../components/Products/ProductCard";
import Hero from "./../../components/Hero/Hero";
import { Product } from "./../../types/Product";

function HomePage() {
  const { isPending, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });

  if (isPending) {
    return (
      <Skeleton />
    )
  }
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">

      <Hero />
      <div className="mx-auto max-w-2xl lg:mx-0 mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Newest items</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Enjoy our most recent itens add to our shop
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.map((product: Product) => <ProductCard key={product.id} product={product} />)}    
      </div>
    </div>
  );
};

export default HomePage;
