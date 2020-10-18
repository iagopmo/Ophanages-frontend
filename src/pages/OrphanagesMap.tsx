// Cria um novo componente para uma pagina nova
// importar um icone
// importar map de dentro do react leaflet
// caso erro pedindo para adicionar tipagem: npm install @types/react-leaflet -D
// TileLayer fica dentro de <Map/> ele é um servidor que pega as imagens do mapa, traz as imagens do mapa
// exemplo de tileLayer é o open street map
// variavel ambiente -> não fica exposta ao mundo, possivel customizar de acordo com ambiente e ela nao vai pro github

            // {/* criar um array pq contem latitude e longitude. */}                
            // {/* // primeira chave indica que haver um codigo js que é um objeto e a segunda chave é esse objeto, em react a chave indica objeto
            //     style={{width: '100%', height='100%'}} */}
            //     {/* outro mapa que pode ser usado é o mapbox.com que gera um token e esse token é privado e nao é necessario que ele seja visivel */}
            //     {/* guarda lo em uma variavel ambiente, que oculta o token dos usuarios e de qlqr um */}
            //     {/* arquivo .env é a variavel de ambiente e todas deve começar com REACT_APP_ */}
            //     {/* No arquivo gitignore adicionar .env, que o ignora, nao o deixando ir para o github.*/}
            //     {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}

            //             {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}
            // {/* // o access toke agora é uma variavel, entao é necessario colocar em chave {}, sendo possivel colocar variaveis dentro do texto
            // // ${Nome da variavel ambiente, que contem o token do mapbox} */}

            //       {/* há tambem um icone para marcar no map e vem como um link tendo que importar */}
            // {/* O link envia o usuario para outra tela */}

            // useeffect é uma função chamada no componente, o primeiro param é qual ação e o segundo é qndo, o segundo é um vetor. Executa a função qndo algum valor do vetor mudar.
            // useSate componente, propriedade e estado -> principais do react
            // estado qlqr tipo de informação manipulada pelo componente
            // sempre que tiver uma variavel que precisa ser alterada pelo proprio componente, ela é salva no estado
    // criar um estado: -> é uma lista, criar um array vazio

            // console.log(response.data); -> contem os orfanatos - tem q salvar ela em variavel para usar em componente

import React, {useEffect, useState} from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';

import {FiPlus, FiArrowRight} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';

import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}
// generic em typescrip é um parametro de tipagem -> fala ao useState q a lista nele é uma lista de orfanatos
function OrphanagesMap(){    
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

  return(
    <div id="page-map">
        <aside>
            <header>
                <img src={mapMarkerImg} alt="Happy"/>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando sua visita :)</p>
            </header>

            <footer>
                <strong>Contagem</strong>
                <span>Minas Gerais</span>
            </footer>
        </aside>

        <Map 
            center={[-19.9010646, -44.0279333]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
        >

            <TileLayer         
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
             />

            {orphanages.map(orphanages => {
                return(
                    <Marker
                    icon={mapIcon}
                    position={[orphanages.latitude, orphanages.longitude]}
                    key= {orphanages.id}
                > 
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    {orphanages.name}
                    <Link to={`/orphanages/${orphanages.id}`}>
                      <FiArrowRight size={20} color="#FFF" />
                    </Link>
                  </Popup>    
                </Marker>
                )
            })}

            </Map>

        <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
        </Link>
    </div>
    );
}

export default OrphanagesMap;