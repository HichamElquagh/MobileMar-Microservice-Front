import { useContext } from "react";
import NavBar from "../layouts/NavBar";
import { DataContext } from "../../context/DataProvider";
import { ProductItems } from "../../AppInterface";

function cart() {
  const { cartItems, addToCart, removeItem } = useContext(DataContext);

  const totalPrice = () => {
    let price = 0;
    cartItems.forEach((elment) => {
      price += elment.quantity! * elment.price;
    });
    return price;
  };

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
  totalPrice,
}: {
  cartItems: ProductItems[];
  addToCart: (item: ProductItems) => void;
  removeItem: (item: ProductItems) => void;
  totalPrice: number;
}) => {

  return (
    <div className="container mb-5">
      <h4 className="my-4 my-cart text-orange-500 font-semibold">My Cart</h4>
      <div className="flex my-3 justify-between">
        <h4 className="font-semibold">Summary</h4>
        <h4 className="font-semibold mr-48">Cart</h4>
      </div>

      {/* Left Section */}
      <div className="flex">
        <div className="grid grid-cols-2 w-1/2">
          <div className="col-span-1">
            <h6>Total:</h6>
            <h6>Promo Code:</h6>
            <h6>Shipping:</h6>
            <div className="my-3 line w-full"></div>
            <h6>Subtotal:</h6>
          </div>
          <div className="col-span-1">
            <h6>{totalPrice}DH</h6>
            <h6>MOBITECH</h6>
            <h6>50DH</h6>
            <div className="my-3 line w-60"></div>
            <h6>{totalPrice + 50}DH</h6>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2">
          <ul className="p-0">
            {cartItems?.map((item: ProductItems, idx: number) => (
              <li key={idx} className="list-none">
                <div className="flex items-center justify-between cart-items p-4 bg-white">
                  <img src={item.image} width="50px" height="50px" className="rounded-full" alt="icon" />
                  <h6 className="mt-4">{item.name}</h6>
                  <div className="flex mt-4">
                    <button
                      className="add-remove-btn"
                      type="button"
                      onClick={() => removeItem(item)}>
                      -
                    </button>
                    <span className="cart-quantity mx-1">{item.quantity}</span>
                    <button
                      className="add-remove-btn"
                      type="button"
                      onClick={() => addToCart(item)}>
                      +
                    </button>
                  </div>
                  <p className="mt-4">Total Price</p>
                  <h6 className="mt-4">{item.quantity! * item.price}DH</h6>
                </div>
                <div className="line"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default cart