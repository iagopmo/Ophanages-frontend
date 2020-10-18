// O arquivos global.css será importador pelo app.tsx ou index.tsx -> O react, todas importações vao partir de arquivos javascript ou typescript, deixando o HTML o mais simples possivel.

//.content-wrapper cria automatico <div className="content-wrapper"></div>
// import logoImg from './images/logo.svg'
// import { FiArrowRight } from 'react-icons/fi';

// importar rotas no App.tsx
import React from 'react';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

function App() {
  return (
    // colocar route aqui dentro como um componente
    <Routes />
  );
}

export default App;
