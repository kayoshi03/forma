import { Product } from "./product.type";

export interface Cart {
    id: number,
    userId: number,
    products: Omit<Product, "raiting">[]
}

export type UpdateCart = Omit<Cart, "id">