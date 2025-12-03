"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import styles from "./nav.module.scss"

type Props = {
    children: React.ReactNode,
    path: string
}

export const LinkNav = ({children, path}:Props) => {
    const params = useParams()
    return (
        <Link className={`/category/${params.url}` === path ? styles.active : ""} href={path}>{children}</Link>
    )
}