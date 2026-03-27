import React from "react";
import Currency from "../../assets/Currency.png";
const NavBar = ({coin}) => {
  return (
    <div className="container mx-auto" >
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="font-bold text-2xl flex justify-between items-center gap-1.5">
            {coin} Coins
            <img src={Currency} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
