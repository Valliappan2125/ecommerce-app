import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="hero-left-side">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-black"></p>
            <p className="font-medium text-sm sm:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl leading-relaxed sm:py-3 lg:text-5xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm sm:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-black"></p>
          </div>
        </div>
      </div>
        <img src={assets.hero_img} alt="hero" className="w-full sm:w-1/2"/>
    </div>
  );
};

export default Hero;
