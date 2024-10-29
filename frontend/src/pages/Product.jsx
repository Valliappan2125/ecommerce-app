/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { id } = useParams();

  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);

  const [image, setImage] = useState("");

  const [size, setSize] = useState("");

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === id) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [id, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row sm:gap-12">
        <div className="flex-1 flex flex-col sm:flex-row sm:gap-12">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt="image"
                className="sm:w-full w-[24%] sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="image" className="w-full h-auto" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_dull_icon} alt="star" className="w-3" />
            <p className="pl-2">122</p>
          </div>
          <p className="font-medium text-3xl mt-5">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-3/4">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-200 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="uppercase text-white bg-black active:bg-gray-700 px-8 py-3 text-sm">
            Add to cart
          </button>
          <hr className="mt-8 sm:w-3/4 border" />
          <div className="mt-5 flex flex-col gap-1 text-gray-500 text-sm">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy with 7 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <b className="text-sm border px-5 py-3">Description</b>
          <p className="text-sm border px-5 py-3">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border py-6 px-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
