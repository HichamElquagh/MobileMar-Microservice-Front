import React, { useState } from "react";
import {FoodItems} from "../AppInterface"
export interface AppContext{
    topRated: FoodItems[];
    allCategories: FoodItems[];
    productsNearYou: FoodItems[];
}

export interface AppState extends AppContext{

}

const DataContext = React.createContext<AppContext>({} as AppContext);

function DataProvider({children}:{children: JSX.Element}) {
  const [state, setState] = useState<AppState>({
    topRated: [
        {
            id:"652ebe78352060965955z231",
            name: "iphone case",
            image: "/assets/image1.jpg",
            price: 20,
            quantity: 50
        },
        {
            id:"652ebe78352060965955z231",
            name: "phone holder",
            image: "/assets/image2.jpg",
            price: 80,
            quantity: 20
        },
        {
            id:"652ebe78352060965955z231",
            name: "iphone case with stripe",
            image: "/assets/image3.jpg",
            price: 30,
            quantity: 40
        }
    ],
    allCategories: [
        {
            id:"652ebe78352060965955z231",
            name: "iphone case",
            image: "/assets/image1.jpg",
            price: 20,
            quantity: 50
        },
        {
            id:"652ebe78352060965955z231",
            name: "phone holder",
            image: "/assets/image2.jpg",
            price: 80,
            quantity: 20
        },
        {
            id:"652ebe78352060965955z231",
            name: "iphone case with stripe",
            image: "/assets/image3.jpg",
            price: 30,
            quantity: 40
        }
    ],
    productsNearYou: [
        {
            id:"652ebe78352060965955z231",
            name: "iphone case",
            image: "/assets/image1.jpg",
            price: 20,
            quantity: 50
        },
        {
            id:"652ebe78352060965955z231",
            name: "phone holder",
            image: "/assets/image2.jpg",
            price: 80,
            quantity: 20
        },
        {
            id:"652ebe78352060965955z231",
            name: "iphone case with stripe",
            image: "/assets/image3.jpg",
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