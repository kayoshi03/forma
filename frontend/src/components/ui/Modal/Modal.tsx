import { X } from "lucide-react"
import styles from "./modal.module.scss"
import React from "react"
import { ModalStore } from "@/store/zustand/modal"

type Props = {
    title: string
    children: React.ReactNode
}

export const Modal = ({title, children}:Props) => {
    const {closeModal} = ModalStore()
    
    return (
        <div onClick={() => closeModal(title)} className={styles.window}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
                <div className={styles.modal__header}>
                    <h2>{title}</h2>
                    <button onClick={() => closeModal(title)}><X/></button>
                </div>
                <div className={styles.modal__body}>
                    {children}
                </div>
            </div>
        </div>
    )
}