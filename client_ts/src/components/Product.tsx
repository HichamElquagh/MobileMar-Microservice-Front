import { IProduct } from "../pages/ProductsPage";

const Product = (product: IProduct) => {
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase ">
          {product.name}
        </h1>
        <p className="mt-1 text-sm text-gray-600">{product.description}</p>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src="https://images.unsplash.com/photo-1611073310858-875b989e02d6?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="NIKE AIR"
      />

      <div className="flex items-center justify-between gap-3 px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${product.price}</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
