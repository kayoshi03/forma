import { User } from "@/shared/type/user.type"
import { create} from "zustand"

type UserProps = {
    state: Omit<User, "id" | "password"> | null,
    error: "Username or password incorrect" | null,
    setError: () => void,
    setUser: (user:Omit<User, "id" | "password">) => void
}

export const UserStore = create<UserProps>((set) => ({
    state: null,
    error: null,
    setUser: (user:Omit<User, "id" | "password">) => {
        set({state: user, error: null})
    },
    setError: () => {
        set({error: "Username or password incorrect"})
    }
}))