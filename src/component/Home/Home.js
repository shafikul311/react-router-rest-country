import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Counrty from '../Country/Country';


const Home = () => {
    const [country , setCountry] = useState([])
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`
        fetch(url)
        .then(res => res.json())
        .then(data =>setCountry(data))

    },[])

    const countryStyle  = {

        display: "grid",
        flexWrap:" wrap",

        gridTemplateColumns: "repeat(3, 1fr)",
        justifyContent:" center",
        // border : '1px solid green',
        margin : '20px',
        padding : '20px',
        borderRadius : '25px',
        textAlign : 'center'
    }
    return (
        <div style={countryStyle}>
            <h1>   Total Country  :{country.length}</h1>
            {
                country.map(country =><Counrty country={country}>  </Counrty>)
            }
        </div>
    );
};

export default Home;