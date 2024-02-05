import { useContext, useEffect } from "react";
import NavBar from "../layouts/NavBar";
import { DataContext } from "../../context/DataProvider";
import { ProductItems } from "../../AppInterface";
import { Items } from "../../cartItems";

function cart() {
  const { cartItems, addToCart, removeItem, updateItem, getCartItems } = useContext(DataContext);

  const totalPrice = () => {
    let price = 0;
    cartItems.forEach((elment) => {
      price += elment.quantity * elment.productId?.price;
    });
    return price;
  };

  useEffect(() => {
    getCartItems();
    totalPrice()
  }, []);

  return (
    <>
    <NavBar/>
    <div className="flex flex-col cart-outer-div">
      <div className="flex-1 cart-body">
        {totalPrice() ? (
          <CartWithItems
            cartItems={cartItems}
            addToCart={addToCart}
            removeItem={removeItem}
            updateItem={updateItem}
            totalPrice={totalPrice()}
          />
        ) : (
          <div className="container my-5 text-center">
            <img src="src/assets/cart.png" className="w-48 mx-auto mt-44" alt="icon" />
            <div className="mt-4 me-20">
              <h4 className="text-orange-red font-semibold">Your cart is empty</h4>
              <h5 className="text-darkblue font-semibold">
                You can go to the home page to view all Product items.
              </h5>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

const CartWithItems = ({
  cartItems,
  addToCart,
  removeItem,
  updateItem,
  totalPrice,
}: {
  cartItems: ProductItems[];
  addToCart: (item: Items) => void;
  removeItem: (item: Items) => void;
  updateItem: (item: Items) => void;
  totalPrice: number;
}) => {

  return (

      <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>

          <div className="mx-auto mt-6 max-w-md md:mt-5">
            <div className="rounded-3xl bg-white shadow-lg">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                  {cartItems.map((item: ProductItems, idx: number) => (
                    <li  key={idx} className="flex flex-col space-y-3 py-3 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div className="shrink-0 relative">
                        <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">{item.quantity}</span>
                        <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.productId?.image} alt="" />
                      </div>
                        
                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div className="pr-8 sm:pr-5">
                            <p className="text-base font-semibold text-gray-900">{item.productId?.name}</p>
                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 ">{item.quantity * item.productId?.price}.00 DH</p>

                          </div>
                      
                          <div className="mt-4  items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <div className="flex justify-end">
                                  <button onClick={() => removeItem(item.productId)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                    <path d="M6 18 18 6M6 6l12 12" />
                                  </svg>
                                </button>
                            </div>                          
                          </div>
                        </div>
                        

                        <div className="items-center absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button onClick={() => updateItem(item.productId)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path d="M5 12h14" />
                          </svg>
                          </button>

                          <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                          <p>{item.quantity}</p>
                          </button>

                          <button onClick={() => addToCart(item.productId)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-1 border-t border-b py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">{totalPrice} DH</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">50 DH</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-semibold text-gray-900">Total</p>
                  <p className="text-2xl font-medium text-gray-900"> <span className="text-s text-gray-600">{totalPrice + 50} DH</span></p>
                </div>

                <div className="mt-4 text-center">
                  <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-sky-600 px-3 py-3 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Place Order
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default cart