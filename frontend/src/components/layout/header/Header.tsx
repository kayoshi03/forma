import { Navigation } from "./Navigation"
import { Logotype } from "@/components/ui/Logotype"
import { Cabinet } from "./Cabinet"
import { Authorization } from "./Authorization"
import styles from "./header.module.scss"

export const Header = () => {
    const auth = false
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="wrapper">
                    <div className={styles.header__wrapper}>
                        <div className={styles.header__static}>
                            <Logotype/>
                            <Navigation/>  
                        </div>
                        {
                            auth ? <Cabinet/> : <Authorization/>
                        }
                        
                    </div>
                </div>
            </div>
        </header>
    )
}