"use client"
import { List } from "@/components/ListProducts/List";
import { PAGES } from "@/config/routes";
import { getAllProducts } from "@/services/api/products";
import { Product } from "@/shared/type/product.type";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([])
  const {data, isLoading} = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts
  })
  const params = useParams()
  useEffect(() => {
    if(!isLoading) {
      const matchCategory = Object.values(PAGES.Category).find((c) => c.url === `/category/${params.url}`)
        const res = data.filter((c:Product) => c.category === matchCategory?.title)
        setProducts(res)
    }
  },[data])
  return (
    <div>
      {
        isLoading && products?.length !== 0 ?<p>Loading</p>:<List products={products}/>
      }
    </div>
  );
}