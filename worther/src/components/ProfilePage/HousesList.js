import React from 'react';
import House from './House';

const HousesList = props => {
    return(
        <div className="houses-list">
            {props.houses.map(house => 
                <House house={house} />
            )}
        </div>
    );
}

export default HousesList;