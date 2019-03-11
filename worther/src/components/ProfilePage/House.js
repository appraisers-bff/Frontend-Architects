import React from 'react';

const House = props => {
    return(
        <div className="house">
            <p>Bedrooms: {props.house.number_bedrooms}</p>
            <p>Bathrooms: {props.house.number_bathrooms}</p>
            <p>Year Built: {props.house.year_built}</p>
            <p>Square Feet: {props.house.number_sq_ft}</p>
            <p>Heating: {props.house.heating ? "Yes" : "No"}</p>
            <p>Cooling: {props.house.cooling ? "Yes" : "No"}</p>
        </div>
    );
}

export default House;