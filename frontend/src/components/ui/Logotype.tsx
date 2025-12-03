import Link from "next/link"
import styles from "./logotype.module.scss"
import { PAGES } from "@/config/routes"

export const Logotype = () => {
    return (
        <Link href={PAGES.Home.url} className={styles.logotype}>Forma</Link>
    )
}