"use client"
import { Button } from "@/components/ui/Button"
import styles from "./authorization.module.scss"
import React, { useEffect, useState } from "react"
import { Login } from "@/components/auth/Login"
import { UserStore } from "@/store/zustand/users"
import { SignUp } from "@/components/auth/SignUp"
import { ModalStore } from "@/store/zustand/modal"
import { ModalRoot } from "@/components/ui/Modal/ModalRoot"

export const Authorization = () => {
    const {state, isLogging, isLogout} = UserStore()
    const {register, openModal} = ModalStore()

    useEffect(() => {
        register("Sign In", <Login />)
        register("Sign Up", <SignUp />)
        isLogging()
    }, [])

    return (
        <>
            {
                state ? 
                <>
                    <p>{state.username}</p>
                    <button onClick={isLogout}>LogOut</button>
                </>
                     :
                <>
                    <div className={styles.auth}>
                        <Button onFunc={() => openModal("Sign In")}>Sign In</Button>
                        <Button onFunc={() => openModal("Sign Up")}>Sign Up</Button>
                    </div>
                    <ModalRoot/>
                </>
            }
        </>
    )
}