import React from 'react';
import styled from 'styled-components';

const HouseDiv = styled.div`
    width: 26%;
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
    padding: 20px;
`;

const UpdateBtn = styled.button`
    width: 50%;
    border-bottom-left-radius: 10px;
    border: none;
    border-right: 1px solid white;
    background-color: #64668D;
    color: white;
`;

const DeleteBtn = styled.button`
    width: 50%;
    border-bottom-right-radius: 10px;
    border: none;
    border-left: 1px solid white;
    background-color: #64668D;
    color: white;
`;

const NewDeleteBtn = styled.button`
    text-align: center;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    border: 2px solid yellow;
    color: yellow;
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
    return(
        <HouseDiv>
            <ImgDiv>
                <DoubleBorder><NewDeleteBtn>X</NewDeleteBtn></DoubleBorder>
            </ImgDiv>
            <HouseContentDiv>
                <p><strong>Year Built: </strong>{props.house.year_built}</p>
                <p><strong>Square Feet: </strong>{props.house.number_sq_ft}</p>
                <p><strong>Beds: </strong>{props.house.number_bedrooms}</p>
                <p><strong>Baths: </strong>{props.house.number_bathrooms}</p>
                <p><strong>Heating: </strong>{props.house.heating ? "Yes" : "No"}</p>
                <p><strong>Cooling: </strong>{props.house.cooling ? "Yes" : "No"}</p>
            </HouseContentDiv>
            <UpdateBtn>Update</UpdateBtn>
            <DeleteBtn>Delete</DeleteBtn>
        </HouseDiv>
    );
}

export default House;