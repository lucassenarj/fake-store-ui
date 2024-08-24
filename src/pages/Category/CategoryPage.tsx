import { Product } from "./../../types/Product";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProductbyCategory from "../../api/fetchProductsByCategory";
import ProductCard from "../../components/Products/ProductCard";
import menuItens from "../../utils/menu";
import { MenuItem } from "../../types/MenuItem";


function CategoryPage() {
  const { category } = useParams();

  const item: MenuItem | undefined = menuItens.find((item) => item.path === category);

  const { isPending, data } = useQuery({
    queryKey: [category, item?.slug],
    queryFn: fetchProductbyCategory
  });

  if (isPending) {
    return (<div>loading...</div>);
  }

  const title = data.length === 0 ? "Category has no item to show" : `Newest items for category: ${ item?.name }`;

  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
      <div className="mx-auto lg:mx-0 mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ title }</h2>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.map((product: Product) => <ProductCard key={product.id} product={product} />)}    
      </div>
    </div>
  );
};

export default CategoryPage;

