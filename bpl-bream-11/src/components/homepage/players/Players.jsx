import React, { use } from 'react';
import AvailablePlayers from '../../availablePlayers/AvailablePlayers';

const Players = ({fetchPlayer}) => {
    const player = use(fetchPlayer);
    console.log(player);
    
    return (
        <div className='container mx-auto'>
            Players: {player.length}
            <AvailablePlayers Players={Players}></AvailablePlayers>
        </div>
    );
};

export default Players;