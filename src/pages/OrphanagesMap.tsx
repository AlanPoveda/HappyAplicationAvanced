import React from 'react';
import { Link } from 'react-router-dom'
//Importando o Mapa  yarn add leaflet react-leaflet
import { Map, TileLayer } from 'react-leaflet'; //Adicionar tipagem yarn add @type/react-leaflet -D
// Importando o icone da página vai usar
import { FiPlus }  from 'react-icons/fi'

import mapMarkerImg from '../images/map-marker.svg'

// Importando o Css
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css'

function OrphanagesMap (){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a tua visita</p>
                </header>
                <footer>
                    <strong>São paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            
            <Map 

            center={[-23.6068481,-47.0263553]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;