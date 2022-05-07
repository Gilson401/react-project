
import './App.css';
import { Route, Router, Switch } from 'react-router-dom'
import Home from './components/home';
import Dog from './components/dog';
import Smooth from './components/smooth';
import Glass from './components/glass';
import Movingbg from './components/movingbg';
import history from './config/history';
import Excel from './components/excelrender';
import Navbars from './components/navbars';
import MenuAnimado from './components/menuAnimado';
import Tenis from './components/tenis';
import Paralax from './components/paralax';

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact component={Home}   path="/" />
                <Route exact component={Dog}    path="/dog" />
                <Route exact component={Smooth} path="/smooth" />
                <Route exact component={Glass}  path="/glass" />
                <Route exact component={Movingbg} path="/movingbg" />
                <Route exact component={Excel}  path="/excel" />
                <Route exact component={Navbars}path="/navbars" />
                <Route exact component={MenuAnimado}path="/menuanimado" />
                <Route exact component={Tenis}path="/tenis" />
                 <Route exact component={Paralax}path="/paralax" />
            </Switch>
        </Router>

    );
}

export default App;
