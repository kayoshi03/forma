
import { Product } from "@/shared/type/product.type"
import Link from "next/link"
import styles from "./card.module.scss"
import { Star } from "lucide-react"

export const CardProduct = ({product}:{product:Product}) => {
    return (
        <div className={styles.card}>
            <Link href={""}>
                <img className={styles.card__image} src={product.image} alt=""/>
            </Link>
            
            <div className={styles.card__head}>
                <p className={styles.card__price}>{product.price} $</p>
                <p className={styles.card__category}>{product.category}</p>
            </div>
            <div className={styles.card__footer}>
                <h1 className={styles.card__title}>{product.title}</h1>
                <div className={styles.card__rating}>
                    <Star width={20}
                        fill="#ffe015"
                        stroke="#ffe015"    
                    />
                    <p>{product.rating?.count} отзывов</p>
                </div>
            </div>
            <button className={styles.card__button}>Buy</button>
        </div>
    )
}