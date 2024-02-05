import Product from "../components/Product";

const ProductsPage = () => {
  return (
    <div className="mx-5 mb-10">
      <div className="mt-10 flex justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <button className="px-3 py-1 bg-gray-800 text-white font-semibold rounded">
          View Cart
        </button>
      </div>
      <div className="flex gap-3 flex-wrap justify-center mt-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <Product key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
