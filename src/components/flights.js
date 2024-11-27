import React, { useState, useEffect } from "react";
import FlightList from "./flightList";
import '../styles/destinations.css'

function Flights(){
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/flights" ,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then((response)=> response.json())
        .then((data)=>{
            setFlights(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("Error fetching flights:",error);
        });
    }, []);

    if(loading){
        return <p>Loading...</p>;
    }

    return(
        <div className="donations">
            <FlightList f = {flights}/>
        </div>
    );
}

export default Flights;