import {Items} from "./cartItems"

export interface ProductItems{
    _id : string
    cartId: string 
    productId: Items
    quantity: number
}