import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string | null;
  image: string | null;
  brand: object;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<IProduct[]>(
          "http://localhost:3000/api/products"
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-5 mb-10">
      <div className="mt-10 flex justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <button className="px-3 py-1 bg-gray-800 text-white font-semibold rounded">
          View Cart
        </button>
      </div>
      <div className="flex gap-3 flex-wrap justify-center mt-10">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
