import React from "react"
import styles from "./button.module.scss"

type Button = {
    children: React.ReactNode,
    onFunc?: (e:any) => void,
}

export const Button = ({children, onFunc}:Button) => {
    
    return (
        <button className={styles.button} onClick={onFunc}>{children}</button>
    )
}