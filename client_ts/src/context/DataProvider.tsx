import React, { useState } from "react";
import {ProductItems} from "../AppInterface"

interface AppState {
    topRated: ProductItems[];
    allCategories: ProductItems[];
    productsNearYou: ProductItems[];
    cartItemCount: number;
    cartItems: ProductItems[];
}

interface AppContext extends AppState {
    addToCart: (item: ProductItems) => void;
    removeItem: (item: ProductItems) => void;
}

export const DataContext = React.createContext<AppContext>({} as AppContext);

function DataProvider({children}:{children: JSX.Element}) {
  const [state, setState] = useState<AppState>({
    topRated: [
        {
            id:"652ebe78352060965955z278",
            name: "iphone case",
            image: "src/assets/image1.jpg",
            price: 20,
            quantity: 50
        },
        {
            id:"652ebe78352060965955z211",
            name: "phone holder",
            image: "src/assets/image2.jpg",
            price: 80,
            quantity: 20
        },
        {
            id:"652ebe78352060965955z232",
            name: "iphone case",
            image: "src/assets/image4.jpg",
            price: 30,
            quantity: 40
        }
    ],
    allCategories: [
        {
            id:"652ebe78352060965955z210",
            name: "iphone case",
            image: "src/assets/image1.jpg",
            price: 20,
            quantity: 50
        },
        {
            id:"652ebe78352060965955z299",
            name: "phone holder",
            image: "src/assets/image2.jpg",
            price: 80,
            quantity: 20
        },
        {
            id:"652ebe78352060965955z209",
            name: "iphone case",
            image: "src/assets/image4.jpg",
            price: 30,
            quantity: 40
        }
    ],
    productsNearYou: [
        {
            id:"652ebe78352060965955z255",
            name: "iphone case",
            image: "src/assets/image1.jpg",
            price: 20,
            quantity: 50
        },
        {
            id:"652ebe78352060965955z238",
            name: "phone holder",
            image: "src/assets/image2.jpg",
            price: 80,
            quantity: 20
        },
        {
            id:"652ebe78352060965955z277",
            name: "iphone case",
            image: "src/assets/image4.jpg",
            price: 30,
            quantity: 40
        }
    ],
    cartItemCount: 0,
    cartItems: [],
  })
  const { topRated, allCategories, productsNearYou, cartItemCount, cartItems } = state;

  const addToCart = (item: ProductItems) => {
    console.log(item);
    const data = { ...item, quantity: 1 };
    if (cartItems.length > 0) {
      //  2 cases
      const bool = cartItems.some((el) => el.id === item.id);
      if (bool) {
        const itemIndex = cartItems.findIndex((el) => el.id === item.id);
        const c = [...state.cartItems];
        if (c[itemIndex]["quantity"]) {
          c[itemIndex]["quantity"]! += 1;
        }
        setState((prevState) => {
          return { ...prevState, cartItems: c };
        });
      } else {
        setState((prevState) => {
          return { ...prevState, cartItems: [...state.cartItems, data] };
        });
      }
    } else {
      setState((prevState) => {
        return { ...prevState, cartItems: [...state.cartItems, data] };
      });
    }
    setState((prevState) => {
      return { ...prevState, cartItemCount: state.cartItemCount + 1 };
    });
  };

  const removeItem = (item: ProductItems) => {
    if (cartItems.length > 0) {
      let bool = state.cartItems.some((i) => i.id === item.id);
      if (bool) {
        let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
        const c = [...state.cartItems];
        // if qty > 1 then reduce by 1 else we will be splicing
        if (cartItems[itemIndex]["quantity"] === 1) {
          c.splice(itemIndex, 1);
          setState((prevState) => {
            return { ...prevState, cartItems: c };
          });
        } else {
          c[itemIndex]["quantity"]! -= 1;
          setState((prevState) => {
            return { ...prevState, cartItems: c };
          });
        }
        if (cartItemCount !== 0) {
          setState((prevState) => {
            return { ...prevState, cartItemCount: state.cartItemCount - 1 };
          });
        }
      }
    }
  };

  return (
  <DataContext.Provider value={{
    topRated, 
    allCategories, 
    productsNearYou,
    cartItemCount,
    cartItems,
    addToCart,
    removeItem,
    }}>
    {children}
    </DataContext.Provider>
  );
}

export default DataProvider