// import React from "react";
// import { FaUser } from "react-icons/fa";
// import { IoFlag } from "react-icons/io5";

// const AvailablePlayers = ({ Players }) => {

//   return (

//     <div>
//         {

//         }
//       <div className="card bg-base-100 w-96 shadow-sm">
//         <figure>
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//             alt="Shoes"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             <FaUser></FaUser>Card Title
//           </h2>
//           <div className="flex justify-between items-center">
//             <div className="flex justify-between gap-1.5 items-center">
//               <IoFlag></IoFlag>
//               <p>Bangladesh</p>
//             </div>
//             <button className="btn">All-Rounder</button>
//           </div>
//           <div className="divider"></div>
//           <h2 className="font-bold">Rating</h2>
//           <div className="flex justify-between gap-2 font-bold">
//             <p>Bating</p>
//             <p>Bowling</p>
//           </div>

//           <div className="card-actions justify-end">
//             <p className="font-semibold">Price</p>
//             <button className="btn">Choose Player</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvailablePlayers;
import React from "react";
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

const AvailablePlayers = ({ allPlayers }) => {
  return (
    // গ্রিড লেআউট যাতে কার্ডগুলো সুন্দরভাবে সাজানো থাকে
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allPlayers.map((player) => (
        <div
          key={player.id}
          className="card bg-base-100 shadow-xl border border-gray-100"
        >
          <figure className="px-5 pt-5">
            <img
              src={player.playerImage} // জেসন ফাইল থেকে আসা ইমেজ
              alt={player.name}
              className="rounded-2xl h-52 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              <FaUser className="text-gray-500" /> {player.name}
            </h2>
            <div className="flex justify-between items-center text-gray-600">
              <div className="flex gap-2 items-center justify-between">
                <IoFlag />
                <p>{player.country}</p>
              </div>
              <div>
                <button className="btn">{player.type}</button>
              </div>
            </div>

            <div className="divider my-1"></div>

            <h2 className="font-bold text-sm">Rating: {player.rating}</h2>
            <div className="flex justify-between text-sm font-semibold">
              <p>{player.batStyle}</p>
              <p className="text-right text-400">{player.bowlingStyle}</p>
            </div>

            <div className="card-actions justify-between items-center mt-4">
              <p className="font-bold">Price: ${player.price}</p>
              <button className="btn btn-outline btn-sm hover:bg-yellow-400 border-gray-300">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
