import React from "react";
import styled from "styled-components";

const HouseDiv = styled.div`
  width: 20%;
  border: 1px solid lightgray;
  margin: 5% 30px;
  border-radius: 10px;
`;

const ImgDiv = styled.div`
  background-color: gray;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const HouseContentDiv = styled.div`
  line-height: 0.75; /* Makes child line height half spaced*/
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 20px 20px 0 20px;
`;

const UpdateBtn = styled.button`
  width: 40%;
  height: 37px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #95813b;
  color: white;
`;

const DeleteBtn = styled.button`
  text-align: center;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  border: 2px solid #95813b;
  color: #95813b;
  background-color: white;
  font-size: 1.8rem;
  font-weight: bold;

  position: relative;
  bottom: 15px;
  left: 47%;
`;

const DoubleBorder = styled.div`
  border: none;
`;

const House = props => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 206);
  };

  return (
    <HouseDiv>
      <ImgDiv>
        <DoubleBorder>
          <DeleteBtn>X</DeleteBtn>
        </DoubleBorder>
      </ImgDiv>
      <HouseContentDiv>
        <p>Address</p>
        <p>
          <strong>Year Built: </strong>
          {props.house.year_built}
        </p>
        <p>
          <strong>Square Feet: </strong>
          {props.house.number_sq_ft}
        </p>
        <p>
          <strong>Beds: </strong>
          {props.house.number_bedrooms}
        </p>
        <p>
          <strong>Baths: </strong>
          {props.house.number_bathrooms}
        </p>
        <p>
          <strong>Heating: </strong>
          {props.house.heating ? "Yes" : "No"}
        </p>
        <p>
          <strong>Cooling: </strong>
          {props.house.cooling ? "Yes" : "No"}
        </p>
      </HouseContentDiv>
      <UpdateBtn>Update</UpdateBtn>
    </HouseDiv>
  );
};

export default House;
