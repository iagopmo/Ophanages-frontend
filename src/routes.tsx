// precisa ser um arquivo tsx pois vai possuir codigo html e cada rota é um componente da aplicação
//tudo e componente em react
// toda vez q coloca um componente em tela, e necesssario importar o react, por enquanto
// modulo react router dom -> lida com roteamento do react 
// -D -> dependecia de desenvolvimento, é usado somente durante o desenvolvimento
// Link é importado de react router dom e é usado no lugar da ancora

// function Routes é um componente e sempre que há um componente em tela, é necessario importar o react.
// dentro do componente Routes, são importadas as rotas
// path é o caminho - component, é o componente que sera exibido em tela
// cada tela possui um componente e a tela para componente Routes será a landing.tsx

// {/* {Landing} as chaves indicam que é uma variavel */}
// {/* Agora toda vez que acessar '/' , vai acessar esta pagina. */}
// {/* Se quiser acessar outra pagina, criar aruivo dentro do diretoio ./src/pages ex: a que mostra os orfanatos nome: OrphanageMap.tsx> */}
// {/* criar uma nova rota chamada app para acessar OrphanagesMap */}
// {/* ao acessar o app mostrou as duas telas juntas pois esse arquivo nao faz comparação de igualdade, ele verifica se o caminho 'path' é igual e o dois caminhos criado possuem o '/'  */}
// {/*para não dar problema com o caminho 'path', é necessario colocar o 'exact' que faz ele verificar que seja somente a barra. Geralmente usada somente no primeiro path '/' */}
// {/* switch faz com q somente uma rota seja chamada por vez */}
// {/* SPA fazer transição de uma tela pra outra sem ter que recarregar o site do zero */}
// id -> qndo recebe parametro dinamico, que pode mudar
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes(){
    return(
        <BrowserRouter>

            <switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </switch>
        </BrowserRouter>
    );
}

export default Routes;

// 1:23