import React, { useState } from "react";
import {ProductItems} from "../AppInterface"
export interface AppContext{
    topRated: ProductItems[];
    allCategories: ProductItems[];
    productsNearYou: ProductItems[];
}

export interface AppState extends AppContext{

}

export const DataContext = React.createContext<AppContext>({} as AppContext);

function DataProvider({children}:{children: JSX.Element}) {
  const [state, setState] = useState<AppState>({
    topRated: [
        {
            id:"652ebe78352060965955z231",
            name: "iphone case",
            image: "src/assets/image1.jpg",
            price: 20,
            quantity: 50
        },
        {
            id:"652ebe78352060965955z231",
            name: "phone holder",
            image: "src/assets/image2.jpg",
            price: 80,
            quantity: 20
        },
        {
            id:"652ebe78352060965955z231",
            name: "iphone case",
            image: "src/assets/image4.jpg",
            price: 30,
            quantity: 40
        }
    ],
    allCategories: [
        {
            id:"652ebe78352060965955z231",
            name: "iphone case",
            image: "src/assets/image1.jpg",
            price: 20,
            quantity: 50
        },
        {
            id:"652ebe78352060965955z231",
            name: "phone holder",
            image: "src/assets/image2.jpg",
            price: 80,
            quantity: 20
        },
        {
            id:"652ebe78352060965955z231",
            name: "iphone case",
            image: "src/assets/image4.jpg",
            price: 30,
            quantity: 40
        }
    ],
    productsNearYou: [
        {
            id:"652ebe78352060965955z231",
            name: "iphone case",
            image: "src/assets/image1.jpg",
            price: 20,
            quantity: 50
        },
        {
            id:"652ebe78352060965955z231",
            name: "phone holder",
            image: "src/assets/image2.jpg",
            price: 80,
            quantity: 20
        },
        {
            id:"652ebe78352060965955z231",
            name: "iphone case",
            image: "src/assets/image4.jpg",
            price: 30,
            quantity: 40
        }
    ],
  })
  const { topRated, allCategories, productsNearYou } = state
  return (
  <DataContext.Provider value={{topRated, allCategories, productsNearYou}}>
    {children}
    </DataContext.Provider>
  );
}

export default DataProvider