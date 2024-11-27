import React, { useState } from "react";
import '../styles/reserverbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FlightList from "./flightList";

function ReserverBar() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [originO, setOriginO] = useState(null);
    const [destinationO, setDestinationO] = useState(null);
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fetchData = async ()=>{
            try{
                const originResponse = await fetch(`http://localhost:8080/api/v1/airports/by/city?city=${origin}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            

                if (!originResponse.ok){
                    throw new Error("Error fetching thing data");
                }

                const originData = await originResponse.json();
                setOriginO(originData);

                const destinationResponse = await fetch(`http://localhost:8080/api/v1/airports/by/city?city=${destination}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            

                if (!destinationResponse.ok){
                    throw new Error("Error fetching thing data");
                }

                const destinationData = await destinationResponse.json();
                setDestinationO(destinationData);

                const flightsResponse = await fetch(`http://localhost:8080/api/v1/flights/arguments?date=${date}&origin=${originO.id}&destination=${destinationO.id}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            

                if (!flightsResponse.ok){
                    throw new Error("Error fetching thing data");
                }

                const flightsData = await flightsResponse.json();
                setFlights(flightsData);
            } catch (err){
                setError(err.message);
            }
        };
        fetchData();
    };

    return (
        <div id="vuelos">
            <form className="bar" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Origen: "
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="origin"
                />
                <div className="hr" />
                <input
                    type="text"
                    placeholder="Destino: "
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="destination"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="date-input"
                />
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
                </button>
            </form>

            {/* Renderiza la lista de vuelos si existen */}
            {flights.length > 0 && (
                <div>
                    <FlightList f={flights}/>
                    <button>Reservar vuelo</button>
                </div>
            )}
        </div>
    );
}

export default ReserverBar;
