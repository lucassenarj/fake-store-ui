import { Product } from "./../../types/Product";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TbStarFilled } from "react-icons/tb";
import fetchProductDetails from "./../../api/fetchProductDetails";
import Breadcrumb from "./../../components/Product/Breadcrumb";


function ProductPage() {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchProductDetails
  });

  if (isPending) {
    return (<div>loading...</div>);
  }
  const product: Product = data; 
  return (
    <div className="bg-white">
      <div className="pt-6">
        <Breadcrumb category={product.category} title={product.title} />
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              alt={product.title}
              src={product.image}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">${product.price.toLocaleString()}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>

            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <TbStarFilled
                    key={rating}
                    aria-hidden="true"
                    className={product.rating.rate > rating ? 'text-gray-900 h-5 w-5 flex-shrink-0' : 'text-gray-200 h-5 w-5 flex-shrink-0'}
                  />
                ))}
              </div>
              <p className="sr-only">{product.rating.rate} out of 5 stars</p>
              <a href={"reviews.href"} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {product.rating.count} reviews
              </a>
            </div>
          </div>

          <form className="mt-10">
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

