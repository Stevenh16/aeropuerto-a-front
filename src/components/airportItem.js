import React from "react";
import '../styles/item.css'


function AirportItem({airport}){
    return(
        <div className= "item-container">
            <h4>Airport: </h4><p>{airport.name}</p>
            <h5>City: </h5><p>{airport.city}</p>
            <h5>Country: </h5><p>{airport.country}</p>
        </div>
    )
}

export default AirportItem;