import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem("token");
    setToken('')
    setCartItems({})
  }

  return (
    <>
      <div className="flex items-center justify-between bg-[#F6F5F2] py-3 px-2">
        <div className="flex items-center font-medium">
          <img src={assets.logo} alt="logo" className="w-10" />
          <Link to={"/"} className="pacifico-regular text-lg">TrendingGarage</Link>
        </div>
        <ul className="sm:flex items-center gap-5 hidden text-gray-700 text-md">
          <Link to={"/"} className="hover:underline font-medium uppercase">Home</Link>
          <Link to={"/collection"} className="hover:underline font-medium uppercase">Collection</Link>
          <Link to={"/about"} className="hover:underline font-medium uppercase">About</Link>
          <Link to={"/contact"} className="hover:underline font-medium uppercase">Contact</Link>
        </ul>
      <div className="flex items-center gap-5">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="search" className="w-5 cursor-pointer"/>
        <div className="group relative">
          <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} alt="profile" className="w-5 cursor-pointer"/>
          <div className="group-hover:block hidden absolute dropdown-menu right-[-50px] pt-4">
            {
              token && 
              <div className="flex flex-col gap-2 w-32 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
            }
          </div>
        </div>
        <Link to={"/cart"} className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 cursor-pointer"/>
          <p className="absolute text-[10px] right-[-5px] bottom-[-5px] bg-black text-white rounded-full w-4 text-center leading-4">{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="mobile-menu" className="w-5 cursor-pointer sm:hidden"/>
      </div>
      <div className={`overflow-hidden absolute right-0 top-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-500 bg-[#F6F5F2]">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-3 p-2 cursor-pointer">
            <img src={assets.dropdown_icon} alt="dropdown" className="h-5 rotate-180"/>
            <p className="text-2xl font-style">Back</p>
          </div>
          <Link onClick={()=>setVisible(false)} to={"/"} className="hover:underline font-medium py-5 text-center text-xl border border-b-2 uppercase">Home</Link>
          <Link onClick={()=>setVisible(false)} to={"/collection"} className="hover:underline font-medium py-5 text-center text-xl border border-b-2 uppercase">Collection</Link>
          <Link onClick={()=>setVisible(false)} to={"/about"} className="hover:underline font-medium py-5 text-center text-xl border border-b-2 uppercase">About</Link>
          <Link onClick={()=>setVisible(false)} to={"/contact"} className="hover:underline font-medium py-5 text-center text-xl border border-b-2 uppercase">Contact</Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
