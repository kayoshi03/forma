import { getAllProducts } from "@/services/api/products"
import { Product } from "@/shared/type/product.type"
import { create } from "zustand/react"

type ProductState = {
    products: Product[],
    loading: boolean,
    error: string | null
    setProducts: (e:Product[]) => void
}

export const useProducts = create<ProductState>((set) => ({
    products: [],
    loading: false,
    error: null,
    setProducts: (products:Product[]) => {
        set({products: products})
    }
}))