import AirportItem from "./airportItem";
import '../styles/list.css'

function AirportList({airports}) {
    return (
        <div id = "destinos" className="airport-list">
            {airports.map(airport => (
                <AirportItem key={airport.id} airport={airport} />
            ))}
        </div>
    );
}

export default AirportList;