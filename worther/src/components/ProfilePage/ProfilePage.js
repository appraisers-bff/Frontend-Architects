import React from "react";
import HousesList from "./HousesList";
import styled from "styled-components";
import { connect } from "react-redux";

const houses = [
  {
    id: 2,
    first_name: "Rickert",
    last_name: "Sharville",
    email: "rsharville0@cisco.com",
    number_bedrooms: 5,
    number_bathrooms: 1,
    number_sq_ft: 880007,
    year_built: "12/1/1992",
    heating: true,
    cooling: false
  },
  {
    id: 3,
    first_name: "Sheilah",
    last_name: "Sheather",
    email: "ssheather1@irs.gov",
    number_bedrooms: 1,
    number_bathrooms: 1,
    number_sq_ft: 679426,
    year_built: "7/16/1971",
    heating: false,
    cooling: false
  },
  {
    id: 4,
    first_name: "Bride",
    last_name: "Roblett",
    email: "broblett2@youtube.com",
    number_bedrooms: 7,
    number_bathrooms: 0,
    number_sq_ft: 341573,
    year_built: "9/14/1992",
    heating: false,
    cooling: false
  },
  {
    id: 5,
    first_name: "Aleksandr",
    last_name: "Dyer",
    email: "adyer3@shop-pro.jp",
    number_bedrooms: 11,
    number_bathrooms: 14,
    number_sq_ft: 143554,
    year_built: "9/21/1971",
    heating: true,
    cooling: false
  },
  {
    id: 6,
    first_name: "Drusi",
    last_name: "Riquet",
    email: "driquet4@barnesandnoble.com",
    number_bedrooms: 6,
    number_bathrooms: 1,
    number_sq_ft: 862676,
    year_built: "12/6/1986",
    heating: false,
    cooling: true
  },
  {
    id: 7,
    first_name: "Reta",
    last_name: "Ditter",
    email: "rditter5@sphinn.com",
    number_bedrooms: 11,
    number_bathrooms: 14,
    number_sq_ft: 899894,
    year_built: "10/1/1968",
    heating: false,
    cooling: false
  },
  {
    id: 8,
    first_name: "Jobi",
    last_name: "Placido",
    email: "jplacido6@sogou.com",
    number_bedrooms: 3,
    number_bathrooms: 0,
    number_sq_ft: 522250,
    year_built: "10/29/1985",
    heating: true,
    cooling: true
  },
  {
    id: 9,
    first_name: "Rudd",
    last_name: "Peet",
    email: "rpeet7@apache.org",
    number_bedrooms: 13,
    number_bathrooms: 8,
    number_sq_ft: 784916,
    year_built: "9/18/1987",
    heating: true,
    cooling: false
  },
  {
    id: 10,
    first_name: "Cary",
    last_name: "Jellings",
    email: "cjellings8@craigslist.org",
    number_bedrooms: 13,
    number_bathrooms: 9,
    number_sq_ft: 379175,
    year_built: "11/5/1993",
    heating: false,
    cooling: false
  },
  {
    id: 11,
    first_name: "Audra",
    last_name: "Litherland",
    email: "alitherland9@github.io",
    number_bedrooms: 14,
    number_bathrooms: 2,
    number_sq_ft: 972037,
    year_built: "1/7/1977",
    heating: true,
    cooling: true
  }
];

const ProfileDiv = styled.div`
  width: 100%;
`;

const ProfileHeadingDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 30px 0 0 0;
  padding: 0 3%;
`;

const GreetingsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Greetingh1 = styled.h1`
  font-weight: bold;
  margin: 0 15px 0 0;
  margin-bottom: 10px;
`;

const Greetingh5 = styled.h5`
  color: #64668d;
  margin-bottom: 20px;
`;

class ProfilePage extends React.Component {
  render() {
    console.log(this.props.houses);
    return (
      <ProfileDiv>
        <ProfileHeadingDiv>
          <GreetingsDiv>
            <Greetingh1>Profile Page</Greetingh1>
            <Greetingh5>See below for your saved home estimates.</Greetingh5>
          </GreetingsDiv>
        </ProfileHeadingDiv>

        <HousesList houses={this.props.houses} />
      </ProfileDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    houses: state.homes.houses
  };
};

export default connect(
  mapStateToProps,
  {}
)(ProfilePage);
