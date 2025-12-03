"use client"
import { Button } from "@/components/ui/Button"
import styles from "./authorization.module.scss"
import React, { useEffect, useState } from "react"
import { Modal } from "@/components/ui/Modal"
import { Login } from "@/components/auth/Login"
import { UserStore } from "@/store/zustand/users"

export const Authorization = () => {
    const [show, setShow] = useState(false)
    const [modal, setModal] = useState("")
    const {state} = UserStore()
    console.log(state)

    const handlerShow = (e:React.MouseEvent<HTMLButtonElement>) => {
        setShow(true)
        setModal(e.currentTarget.innerText)
    }
    return (
        <>
            {
                state ? <p>{state.username}</p> :
                <>
                    <div className={styles.auth}>
                        <Button onFunc={(e) => handlerShow(e)}>Sign In</Button>
                        <Button onFunc={(e) => handlerShow(e)}>Sign Up</Button>
                    </div>
                    <>
                        {
                            show ? <Modal title={modal} closeModal={() => setShow(false)}><Login/></Modal> : <></>
                        }
                    </>
                </>
            }
        </>
    )
}