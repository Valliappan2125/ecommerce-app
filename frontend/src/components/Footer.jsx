import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <div className="flex items-center font-medium">
            <img src={assets.logo} alt="logo" className="w-10" />
            <Link to={"/"} className="pacifico-regular text-lg">
              TrendingGarage
            </Link>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officia illum consequatur nisi officiis cumque delectus illo rerum
            ipsa? Itaque, repudiandae. Iure aspernatur necessitatibus, illo
            tenetur dolor blanditiis asperiores at!
          </p>
        </div>

        <div>
          <p className="uppercase text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <Link to={"/"} className="hover:underline font-medium">
              Home
            </Link>
            <Link to={"/about"} className="hover:underline font-medium">
              About us
            </Link>
            <Link id={"/orders"} className="hover:underline font-medium">
              Delivery
            </Link>
            <Link id="#policy" className="hover:underline font-medium">
              Privacy policy
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li>+91 9087426315</li>
            <li>contact@trendinggarage.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center py-6 text-sm">
          Copyright 2024@ TrendingGarage.in - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
