import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name ,alpha3Code, capital, flag} = props.country

    const countryStyle  = {
        margin:'20px',
        boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        paddingTop:'20px',
        flexWrap:" wrap",
        
    }

    return (
        <div style={countryStyle}>

            <Link to={`/country/${alpha3Code}`}>
          
                    <img style={{width:'200px'}} src={flag} alt=""/>
                
                    <div>
                    <p>{name} </p>
                    <p>{capital}</p>
                
                    </div>
            </Link>
                          
        </div>
    );
};

export default Country;