import React from "react";
import Card from "./Card"; // নিশ্চিত করুন Card.jsx একই ফোল্ডারে আছে

const AvailablePlayers = ({ allPlayers,setCoin, coin }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {
        allPlayers.map((player, index) => (
          <Card 
            key={index} 
            player={player} 
            setCoin={setCoin}
            coin={coin}
          />
        ))
      }
    </div>
  );
};

export default AvailablePlayers;