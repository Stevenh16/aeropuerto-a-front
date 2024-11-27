import React, { useState, useEffect } from "react";
import AerolineaList from "./aerolineaList";
import '../styles/destinations.css'

function Aerolineas(){
    const [aerolineas, setAerolineas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/airlines" ,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then((response)=> response.json())
        .then((data)=>{
            setAerolineas(data);
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
            <AerolineaList airlines = {aerolineas}/>
        </div>
    );
}

export default Aerolineas;