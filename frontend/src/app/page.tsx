"use client"
import { List } from "@/components/ListProducts/List";
import { getAllProducts } from "@/services/api/products";
import { useQuery } from "@tanstack/react-query";


export default function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts
  })
  return (
    <>
      <List products={data}/>
    </>
  );
}
