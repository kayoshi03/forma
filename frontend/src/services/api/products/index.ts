import { CreateProduct, Product, UpdateProduct } from "@/shared/type/product.type"
import { api } from "../interceptor"

export const getAllProducts = async() => {
    try {
        const res =  await api.get("/products")
        return res.data
    } catch (error) {
        return []
    }
}

export const addProducts = async({id, title, price, description, category, image}:CreateProduct) => {
    try {
        const res = await api.post("/products", {
            id,
            title,
            price,
            description,
            category, 
            image
        })
        return res.data
    } catch (error) {
        return []
    }
}

export const singleProduct = async(id:number) => {
    try {
        const res = await api.get(`/products/${id}`)
        return res.data
    } catch (error) {
        return []
    }
}

export const updateProduct = async ({id_update, title, description, price, category, image}:{id_update:number,title:UpdateProduct, price: UpdateProduct, description: UpdateProduct, category: UpdateProduct, image: UpdateProduct}) => {
    try {
        const res = await api.put(`/products/${id_update}`, {
            title, description, price, category, image
        })
        return res.data
    } catch (error) {
        return []
    }
}

export const deleteProduct = async(id:number) => {
    try {
        const res = await api.delete(`/products/${id}`)
        return res.data
    }
    catch (error) {
        return []
    }
}