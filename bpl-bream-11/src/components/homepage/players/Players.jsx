
import React, { use, useState } from "react";
import AvailablePlayers from "../../availablePlayers/AvailablePlayers";

const Players = ({ fetchPlayer,setCoin, coin }) => {
  // use(fetchPlayer) দিয়ে ডেটা রেজলভ করা হচ্ছে
  const playersData = use(fetchPlayer);
  const [selectedType, setSelectedType] = useState("Available");
  return (
    <div className="container mx-auto py-10">
      <div className="mb-3 flex justify-between items-center">
        {selectedType === "Available"?<h2 className="font-bold text-2xl"> Available Players</h2> : <h2 className="font-bold text-2xl"> Selected Players(2/6)</h2>}
        <div className="">
          <button
          onClick={() => setSelectedType("Available")}
            className={`btn ${selectedType === "Available" ? " bg-[#E7FE29]" : ""} rounded-r-none`}
          >
            Available
          </button>
          <button
          onClick={() => setSelectedType("Selected")}
            className={`btn ${selectedType === "Selected" ? " bg-[#E7FE29]" : ""} rounded-r-none`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {selectedType === "Available"? <AvailablePlayers allPlayers={playersData} setCoin={setCoin} coin={coin} ></AvailablePlayers>:<selectedPlayers></selectedPlayers>}
    </div>
  );
};

export default Players;
