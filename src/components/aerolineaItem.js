import React from "react";
import '../styles/item.css'


function AerolineaItem({airline}){
    return(
        <div className= "item-container">
            <h4>Airline: </h4><p>{airline.name}</p>
            <h5>Code: </h5><p>{airline.airlineCode}</p>
            <h5>Country: </h5><p>{airline.countryOfOrigin}</p>
        </div>
    )
}

export default AerolineaItem;