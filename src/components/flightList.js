import FlightItem from "./flightItem";
import '../styles/list.css'

function FlightList({f}) {
    return (
        <div id = "destinos" className="airport-list">
            {f.map(flight => (
                <FlightItem key={flight.id} flight={flight} />
            ))}
        </div>
    );
}

export default FlightList;