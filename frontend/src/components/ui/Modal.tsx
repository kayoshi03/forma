import { X } from "lucide-react"
import styles from "./modal.module.scss"
import React from "react"

type Props = {
    title: string
    closeModal: () => void,
    children: React.ReactNode
}

export const Modal = ({title, closeModal, children}:Props) => {
    return (
        <div onClick={closeModal} className={styles.window}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
                <div className={styles.modal__header}>
                    <h2>{title}</h2>
                    <button onClick={closeModal}><X/></button>
                </div>
                <div className={styles.modal__body}>
                    {children}
                </div>
            </div>
        </div>
    )
}