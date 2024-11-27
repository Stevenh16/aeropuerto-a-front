import Aerolineas from '../components/airlines';
import Destinations from '../components/detinations';
import FlightList from '../components/flightList';
import Flights from '../components/flights';
import ReserverBar from '../components/searchFlights';
import './../styles/home.css';

function Home() {

    return (
        <div>
            <div className= "container-header">
                <header>
                    <h1>SKY DREAMS</h1>
                    <nav id="nav" class="responsive">
                    <ul>
                        <li><a href="#vuelos" onclick="select()">BUSCAR VUELOS</a></li>
                        <li><a href="#misreservas" onclick="select()">MIS RESERVAS</a></li>
                        <li><a href="#destinos" onclick="select()">DESTINOS</a></li>
                        <li><a href="#aerolineas" onclick="select()">AEROLINEAS</a></li>
                    </ul>
                    </nav>
                </header>
            </div>
            <br/>
            <br/>
            <section>
                <h2>Burcar vuelos: </h2>
                <ReserverBar/>
            </section>

            <section>
                <h2>Detinos disponibles: </h2>
                <Destinations/>
            </section>

            <section>
                <h2>Aerolineas disponibles: </h2>
                <Aerolineas/>
            </section>

            <section>
                <h2>Vuelos disponibles: </h2>
                <Flights/>
            </section>
        </div>
    );
}

export default Home;