import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { useParams } from 'react-router';
import Card from 'react-bootstrap/Card';
import { Table } from 'react-bootstrap';


const CountryDetails = () => {
    const {alpha3Code} = useParams();

    const [countres , setCountries] = useState({})
    
    useEffect(() =>{

        const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`

       
        fetch(url)
        .then(response =>response.json())
        .then(data =>setCountries(data))
    },[])
    const {name , capital} = countres

    const countryStyle  = {
        border : '1px solid green',
        margin : '20px',
        padding : '20px',
        borderRadius : '25px',
        textAlign : 'center'
    }

    return (
        <div style={countryStyle}>
            <h2>country details here</h2>

            <h1>{name}</h1>
            <h1> capital : {capital}</h1>

            <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
 <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
 </ul>
  </tbody>
</Table>


                          
         
        </div>
        
    );
};

export default CountryDetails;