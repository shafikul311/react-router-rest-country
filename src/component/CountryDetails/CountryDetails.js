import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router";
import Card from "react-bootstrap/Card";
import { Table } from "react-bootstrap";

const CountryDetails = () => {
  const { alpha3Code } = useParams();

  const [countres, setCountries] = useState({});

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  const {
    name,
    capital,
    flag,
    population,
    region,
    timezones,
  
    area
  
  } = countres;

  const countryStyle = {
      
    // border: "1px solid green",
    justifiedContent:'centre',
    marginTop:'30px',
    marginLeft:'35%',
   
    padding: "20px",
    borderRadius: "25px",
    textAlign: "center",
  };

  return (
    <div style={countryStyle}>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title style={{fontSize:'40px'}}>{name}</Card.Title>
          <Card.Title>Capital :{capital}</Card.Title>
          <Card.Title>Population :{population} </Card.Title>
          <Card.Title>Area : {area}</Card.Title>
          <Card.Title>Region : {region}</Card.Title>
          <Card.Title>Timezone :{timezones} </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountryDetails;
