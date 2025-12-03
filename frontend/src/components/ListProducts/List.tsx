"use client"
import { Product } from "@/shared/type/product.type"
import { CardProduct } from "../ui/CardProduct"
import styles from "./list.module.scss"

export const List = ({products}:{products:Product[]}) => {

    return (
        <div className={styles.list}>
            {products?.map((item:Product) => (
                <CardProduct key={item.id} product={item}/>
            ))}
        </div>
    )
}