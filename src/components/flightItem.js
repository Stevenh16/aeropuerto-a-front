import React, { useEffect, useState } from "react";
import '../styles/item.css'




function FlightItem({flight}){
    const [airline,setAirline] = useState(null);
    const [origin,setOrigin] = useState(null);
    const [destination,setDestination] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const airlineResponse = await fetch(`http://localhost:8080/api/v1/airlines/id?id=${flight.airline}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            

                if (!airlineResponse.ok){
                    throw new Error("Error fetching thing data");
                }

                const airlineData = await airlineResponse.json();
                setAirline(airlineData);

                const originResponse = await fetch(`http://localhost:8080/api/v1/airports/id?id=${flight.airportOrigin}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            

                if (!originResponse.ok){
                    throw new Error("Error fetching thing data");
                }

                const originData = await originResponse.json();
                setOrigin(originData);

                const destinationResponse = await fetch(`http://localhost:8080/api/v1/airports/id?id=${flight.airportDestination}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            

                if (!destinationResponse.ok){
                    throw new Error("Error fetching thing data");
                }

                const destinationData = await destinationResponse.json();
                setDestination(destinationData);
            } catch (err){
                setError(err.message);
            }
        };
        console.log("Airline:",flight.airline);
        console.log("Origin:",flight.airportOrigin);
        console.log("Destination:",flight.airportDestination);
        fetchData();
    }, [flight]) ;

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!airline || !origin|| !destination) {
        return <div>Loading...</div>;
    }

    return(
        <div className= "item-container">
            <p><strong>Flight:</strong> {airline.name}</p>
            <p><strong>Origin:</strong> {origin.city}</p>
            <p><strong>Destination:</strong> {destination.city}</p>
        </div>
    )
}

export default FlightItem;