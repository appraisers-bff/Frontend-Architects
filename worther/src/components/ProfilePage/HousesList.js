import React from 'react';
import House from './House';
import styled from 'styled-components';

const HouseListDiv = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const HousesList = props => {
    return(
        <HouseListDiv>
            {props.houses.map(house => 
                <House key={house.id} house={house} />
            )}
        </HouseListDiv>
    );
}

export default HousesList;