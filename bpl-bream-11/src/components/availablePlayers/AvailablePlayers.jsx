import React from "react";
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

const AvailablePlayers = ({ Players }) => {
  
  return (
    
    <div>
        {
            
        }
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser></FaUser>Card Title
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex justify-between gap-1.5 items-center">
              <IoFlag></IoFlag>
              <p>Bangladesh</p>
            </div>
            <button className="btn">All-Rounder</button>
          </div>
          <div className="divider"></div>
          <h2 className="font-bold">Rating</h2>
          <div className="flex justify-between gap-2 font-bold">
            <p>Bating</p>
            <p>Bowling</p>
          </div>
          
          <div className="card-actions justify-end">
            <p className="font-semibold">Price</p>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
