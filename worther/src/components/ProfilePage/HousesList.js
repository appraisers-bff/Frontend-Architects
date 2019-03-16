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
  let houses = props.houses;
  if(houses.length === 0) {
    homes = <div className="homes">
      houses.map(house => (
      <House
        key={house.id}
        house={house}
        setUpdateForm={props.setUpdateForm}
      />
      ))
    </div>
  } else {
    homes = <h2>No homes saved currently.</h2>
  }
  return (
    <HouseListDiv>
      {houses}
    </HouseListDiv>
  );
};

export default HousesList;
