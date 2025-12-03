import { useForm } from "react-hook-form"
import { Button } from "../ui/Button"
import { LoginUser } from "@/shared/type/user.type"
import { login } from "@/services/api/auth"
import styles from "./login.module.scss"

export const Login = () => {
    const {
        register,
        handleSubmit,
    } = useForm<LoginUser>()

    return (
        <form className={styles.form} onSubmit={handleSubmit(login)}>
            <div className={styles.form__username}>
                <label>Username</label>
                <input 
                {...register("username")}
                type="text" 
                name="username"
                placeholder="Username"
                />  
            </div>
            <div className={styles.form__password}>
                <label>Password</label>
                <input 
                {...register("password")}
                type="password" 
                name="password"
                placeholder="Password"
                />  
            </div>
            <Button>SignIn</Button>
        </form>
    )
}