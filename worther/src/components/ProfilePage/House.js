import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { passHomeToUpdate, deleteHome } from "../../actions";

import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

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

const UpdateBtn = styled(Link)`
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

const unsplashimg = {
  src: "https://source.unsplash.com/255x200/?house",
  alt: "random unsplash image"
};

const CardContainer = styled.div`
  margin: 20px;
`;

const House = props => {
  return (
    <CardContainer>
      <Card>
        <CardHeader tag="h6">
          {props.house.address}
          {"\n"}
          {props.house.city}, {props.house.state} {props.house.zip}
          <Button close />{" "}
        </CardHeader>
        <CardBody>
          <CardTitle>
            <p>
              <strong>Fair Market Value: </strong>
              {props.house.fmv}
            </p>
            <p>
              <strong>Zestimate: </strong>
              {props.house.zestimate}
            </p>
          </CardTitle>
          <i className="fas fa-bath" />
          <CardText>
            <p>
              <strong>Year Built: </strong>
              {props.house.year}
            </p>
            <p>
              <strong>Square Feet: </strong>
              {props.house.sqft}
            </p>
            <p>
              <strong>Beds: </strong>
              {props.house.bed}
            </p>
            <p>
              <strong>Baths: </strong>
              {props.house.bath}
            </p>
          </CardText>
          <Button>Update Estimate</Button>
        </CardBody>
        <CardFooter className="text-muted" />
      </Card>
    </CardContainer>

    // <HouseDiv>
    //   <ImgDiv>
    //     <img src={unsplashimg.src} alt={unsplashimg.alt} />
    //   </ImgDiv>
    //   <DoubleBorder>
    //     <DeleteBtn>X</DeleteBtn>
    //   </DoubleBorder>
    //   <HouseContentDiv>
    //     <p>
    //       <strong>{props.house.address}</strong>
    //     </p>
    //     <p>
    //       <strong>
    //         {props.house.city}, {props.house.state} {props.house.zip}
    //       </strong>
    //     </p>
    //     <p>
    //       <strong>Square Feet: </strong>
    //       {props.house.sqft}
    //     </p>
    //     <p>
    //       <strong>Beds: </strong>
    //       {props.house.bed}
    //     </p>
    //     <p>
    //       <strong>Baths: </strong>
    //       {props.house.bath}
    //     </p>
    //   </HouseContentDiv>
    //   <UpdateBtn
    //     to="/appraisal-form"
    //     onClick={() => props.passHomeToUpdate(props.house)}
    //   >
    //     Update
    //   </UpdateBtn>
    // </HouseDiv>
  );
};

export default connect(
  null,
  { passHomeToUpdate, deleteHome }
)(House);
