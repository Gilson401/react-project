
import './App.css';
import { Route, Router, Switch } from 'react-router-dom'
import Home from './components/home';
import Dog from './components/dog';
import Smooth from './components/smooth';
import history from './config/history';
import Excel from './components/excelrender';
import Cms from './components/cms';
import Tenis from './components/tenis';
import Paralax from './components/paralax';
import Layout from './components/layout/layout';



const links = [
    { path: "/", label: "Home", description: "Its me", component: Home },
    {
        path: "/doguinho", label: "Dogs",
        description: "Aplicação de React Reveal. Os elementos são exibidos na tela a medida que o scroll é acionado",
        component: Dog
    },
    {
        path: "/smooth", label: "Dog Select",
        description: "Escolha um doguinho e leia informações sobre ele. Baseado num select screen de jogos de luta",
        component: Smooth
    },
    {
        path: "/excel", label: "Excel",
        description: "Excel numa aplicação do mundo real. Quem trabalha em escritório e nunca precisou importar uma planilha de excel? Esta página não é para mobile.",
        component: Excel
    },
    {
        path: "/cms", label: "Cms",
        description: "Um site para uma influencer de moda e estilo.",
        component: Cms
    },
    {
        path: "/paralax", label: "Paralax", description: "Aplicando imagens de fundo dinâmicas utilizando efeito paralax.",
        component: Paralax
    },
    {
        path: "/tenis", label: "Tenis", description: "Um desafio que fiz em 2021 exibindo um display de produto de um ecommerce",
        component: Tenis
    }]


    
    function App() {
 

    return (
        <Router history={history}>
            <Switch>
                <Layout links={links} >
                    {links.map((item, i) => (
                        <Route key={i} exact component={item.component} path={item.path} />
                    ))}
                </Layout>
            </Switch>
        </Router>

    );
}

App.links = links
export default App;
