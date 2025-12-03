import { PAGES } from "@/config/routes"
import { LinkNav } from "./LinkNav"
import styles from "./nav.module.scss"

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <LinkNav path={PAGES.Category.MenClothing.url}>{PAGES.Category.MenClothing.title}</LinkNav>
            <LinkNav path={PAGES.Category.Electronics.url}>{PAGES.Category.Electronics.title}</LinkNav>
            <LinkNav path={PAGES.Category.Jewelery.url}>{PAGES.Category.Jewelery.title}</LinkNav>
            <LinkNav path={PAGES.Category.WomenClothing.url}>{PAGES.Category.WomenClothing.title}</LinkNav>
        </nav>
    )
}