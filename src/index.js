import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import PageAlbums from './components/PageAlbums';
import * as serviceWorker from './serviceWorker';
import Album from './components/Album'
import Main from './components/Main'
import Login from './components/Login'
import LoginCreate from './components/LoginCreate'
import Menu from "./components/Menu"
import Faturamento from "./components/Faturamento"
import Ocorrencias from './components/Ocorrencias';
const Routes = () =>(
    <Router>
        <div>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/albums" component={PageAlbums}></Route>
                <Route exact path="/albums/:id" component={Album}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/logincreate" component={LoginCreate}></Route>
                <Route exact path="/faturamento" component={Faturamento}></Route>
                <Route exact path="/ocorrencias" component={Ocorrencias}></Route>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(<Routes />, document.getElementById('root'));
serviceWorker.unregister();
