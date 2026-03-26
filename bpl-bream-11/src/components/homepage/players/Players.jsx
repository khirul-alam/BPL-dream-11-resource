// import React, { use } from 'react';
// import AvailablePlayers from '../../availablePlayers/AvailablePlayers';

// const Players = ({fetchPlayer}) => {
//     const player = use(fetchPlayer);
//     console.log(player);
    
//     return (
//         <div className='container mx-auto'>
//             Players: {player.length}
//             <AvailablePlayers Players={Players}></AvailablePlayers>
//         </div>
//     );
// };

// export default Players;
import React, { use } from 'react';
import AvailablePlayers from '../../availablePlayers/AvailablePlayers';

const Players = ({ fetchPlayer }) => {
    // use(fetchPlayer) দিয়ে ডেটা রেজলভ করা হচ্ছে
    const playersData = use(fetchPlayer); 
    
    return (
        <div className='container mx-auto py-10'>
            <h2 className="text-2xl font-bold mb-5">Available Players: {playersData.length}</h2>
            {/* এখানে সঠিক ডেটা 'playersData' পাঠানো হচ্ছে */}
            <AvailablePlayers allPlayers={playersData}></AvailablePlayers>
        </div>
    );
};

export default Players;