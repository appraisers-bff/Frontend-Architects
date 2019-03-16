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
  let houses;
  if(houses === undefined || houses.length === 0) {
    houses = <h2>No homes saved currently.</h2>
  } else {
    houses = props.houses.map(house => (
      <House
        key={house.id}
        house={house}
        setUpdateForm={props.setUpdateForm}
      />
    ))
  }
  return (
    <HouseListDiv>
      {houses}
    </HouseListDiv>
  );
};

export default HousesList;
