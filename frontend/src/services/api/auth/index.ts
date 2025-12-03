import { CreateUser, LoginUser, UpdateUser, User } from "@/shared/type/user.type"
import { api } from "../interceptor"
import { UserStore } from "@/store/zustand/users"

export const login = async({username, password}:LoginUser) => {
    try {
        const res = await api.post("/auth/login", {
            username, password
        })
        if(res.data) {
            const userList = await getAllUsers()
            const currentUser = userList.find((a:User) => a.username === username)
            UserStore.getState().setUser(currentUser)
        }
    }
    catch (error) {
        if(error.status === 401) {
            UserStore.getState().setError()
        }
    }
}

export const getAllUsers = async() => {
    try {
        const res = await api.get("/users")
        return res.data
    } catch (error) {
        return []
    }
}

export const register = async({username, email, password}:CreateUser) => {
    try {
        const res = await api.post("/users", {
            username, email, password
        })
        return res.data
    } catch (error) {
        return []
    }
}

export const getCurrentUser = async(id:number) => {
    try {
        const res = await api.get(`/users/${id}`)
        return res.data
    } catch (error) {
        return []
    }
}

export const updateUser = async({id_update, username, email, password}:{id_update:number, username:UpdateUser, email:UpdateUser, password:UpdateUser}) => {
    try {
        const res = await api.put(`users/${id_update}`, {
            email, username, password
        })
        return res.data
    } catch (error) {
        return []
    }
}

export const deleteUser = async(id:number) => {
    try {
        const res = await api.delete(`/users/${id}`)
        return res.data
    } catch (error) {
        return []
    }
}