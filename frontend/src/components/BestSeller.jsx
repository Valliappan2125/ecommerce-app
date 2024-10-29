import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item)=>item.bestseller);
    setBestSeller(bestProduct.slice(0,5));
  },[products])
  return (
    <div>
        <div className="text-center py-10 text-4xl">
      <Title text1={"BEST"} text2={"SELLERS"} />
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro vel,
        modi voluptas, eum obcaecati quas fugit quae eius atque!
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5">
    {
        bestSeller.map((item, index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
    }
  </div>
    </div>
  );
};

export default BestSeller;
