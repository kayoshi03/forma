import { UpdateCart } from "@/shared/type/cart.type"
import { api } from "../interceptor"

export const getAllCarts = async() => {
    try {
        const res = await api.get("/carts")
        return res.data
    } catch (error){
        return []
    }
}

export const createCart = async(userId:number) => {
    try {
        const res = await api.post("/carts", {
            userId,
            products: []
        })
        return res.data
    } catch (error) {
        return []
    }
}

export const getCart = async(id:number) => {
    try {
        const res = await api.get(`/carts/${id}`)
        return res.data
    } catch (error) {
        return []
    }
}

export const updateCart = async({id_update, userId, products}:{id_update: number, userId: UpdateCart, products: UpdateCart}) => {
    try {
        const res = await api.put(`/carts/${id_update}`, {
            userId,
            products: products
        })
        return res.data
    } catch (error) {
        return []
    }
}

export const deleteCart = async (id:number) => {
    try {
        const res = await api.delete(`/carts/${id}`)
        return res.data
    } catch (error) {
        return []
    }
}