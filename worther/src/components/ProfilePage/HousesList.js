import React from "react";
import House from "./House";
import styled from "styled-components";

const HouseListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const HousesList = props => {
  if(props.houses.length !== 0) {
    return (
      <HouseListDiv>
        props.houses.map(house => (
        <House
          key={house.id}
          house={house}
          setUpdateForm={props.setUpdateForm}
        />
        ))
      </HouseListDiv>
    )
  } else {
    return (
      <HouseListDiv>
        <h2>No homes saved currently.</h2>
      </HouseListDiv>
    )
  }
};

export default HousesList;
