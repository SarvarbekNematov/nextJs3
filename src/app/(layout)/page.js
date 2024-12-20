import Hero from "@/components/Hero";
import Products from "@/components/products";
import { memo } from "react";

async function Home() {

  const data = await fetch('https://dummyjson.com/products')
  const posts = await data.json()
  
  return (
    <div className="">
      <Products data={posts}/>
    </div>
  );
}

export default memo(Home)
