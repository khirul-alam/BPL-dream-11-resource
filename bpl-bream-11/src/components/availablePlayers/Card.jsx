import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import Swal from 'sweetalert2'; // উপরে এটি ইমপোর্ট করুন

const Card = ({ player,setCoin,coin}) => {
  // প্রতিটি কার্ডের জন্য আলাদা স্টেট
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    // ডাইনামিক এবং আকর্ষণীয় এরর বক্স (কয়েন কম থাকলে)
    if (coin < player.price) {
      const missingAmount = player.price - coin;
      
      Swal.fire({
        title: "দুঃখিত!",
        text: `আপনার পর্যাপ্ত কয়েন নেই। আরও $${missingAmount.toLocaleString()} প্রয়োজন।`,
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "ঠিক আছে",
        background: "#fff",
        color: "#333"
      });
      return;
    }

    // সফলভাবে সিলেক্ট হলে সুন্দর সাকসেস বক্স
    setCoin(prevCoin => prevCoin - player.price);
    setIsSelected(true);

    Swal.fire({
      title: "অভিনন্দন!",
      text: `${player.name} এখন আপনার দলে।`,
      icon: "success",
      confirmButtonColor: "#E7FE29",
      confirmButtonText: "দারুণ!",
      iconColor: "#E7FE29"
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100 p-4 rounded-2xl">
      <figure>
        <img
          src={player.playerImage}
          alt={player.name}
          className="rounded-xl h-60 w-full object-cover"
        />
      </figure>
      <div className="mt-4 text-left">
        <div className="flex items-center gap-2 text-xl font-bold mb-2">
          <FaUser className="text-gray-400" /> {player.name}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <IoFlag /> {player.country}
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-bold uppercase">
            {player.type}
          </div>
        </div>
        
        <hr className="mb-4" />
        
        <p className="font-bold text-sm mb-3 text-gray-800 text-left">Rating: {player.rating}</p>
        
        <div className="flex justify-between text-sm font-bold mb-3">
          <p>{player.batStyle}</p>
          <p className="text-gray-400">{player.bowlingStyle}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="font-bold">Price: ${player.price.toLocaleString()}</p>
          <button 
      onClick={handleChoosePlayer}
      disabled={isSelected}
      className={`btn ${isSelected ? "bg-gray-200" : "bg-[#E7FE29]"}`}
    >
      {isSelected ? "Selected" : "Choose Player"}
    </button>
        </div>
      </div>
    </div>
  );
};

export default Card;