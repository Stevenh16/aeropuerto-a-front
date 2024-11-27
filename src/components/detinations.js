import React, { useState, useEffect } from "react";
import AirportList from "./airportList";
import '../styles/destinations.css'

function Destinations(){
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/airports" ,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then((response)=> response.json())
        .then((data)=>{
            setDestinations(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("Error fetching destinations:",error);
        });
    }, []);

    if(loading){
        return <p>Loading...</p>;
    }

    return(
        <div className="donations">
            <AirportList airports = {destinations}/>
        </div>
    );
}

export default Destinations;