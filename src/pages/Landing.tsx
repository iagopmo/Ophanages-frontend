// estrutura padrao de um componente:
// function Landing(){
//     return(

//     );
// }

// export default Landing;

import React from 'react';
// {Link} é usado no lugar da ancora, que faz o reaproveitamento de todo html, css e js ao ser chamado
import {Link} from 'react-router-dom';

// '../' -> volta um diretorio para acessar styles e pages que possui arquivo landing.css
import '../styles/pages/landing.css';
import '../styles/global.css';

import logoImg from '../images/logo.svg'
import { FiArrowRight } from 'react-icons/fi';

function Landing(){
    return(
        <div id="page-landing">      
            <div className="content-wrapper">
                {/* ao tentar colocar logoImg dentro de src em img nao funciona pq ele interpreta como um texto sempre que quiser no javascript no react colocar uma variavel no lugar do HTML é preciso colocar uma chave */}
                {/* alt -> um texto alternativo escrito Happy */}
                <img src={logoImg} alt="Happy"/>

                <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                <strong>Contagem</strong>
                <span>Minas Gerais</span>         
                </div>
                {/* <a> é uma ancora - que agora navegará o usuario para /app*/}
                {/* assim faz reload do zero css js, html, que gera um monte de requisição  */}
                {/* para reutilizar toda a navegação é necessario importar Link de react router dom */}
                {/* que será usado no lugar da ancora. */}
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
            </div>
        );
}

export default Landing;