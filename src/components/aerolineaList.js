import AerolineaItem from "./aerolineaItem";
import '../styles/list.css'

function AerolineaList({airlines}) {
    return (
        <div id = "aerolineas" className="airport-list">
            {airlines.map(airline => (
                <AerolineaItem key={airline.id} airline={airline} />
            ))}
        </div>
    );
}

export default AerolineaList;