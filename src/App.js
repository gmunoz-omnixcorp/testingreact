import {React} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RouterS } from './components/TableRouter/RouterS';
import { Cobertura } from './components/TableCobertura/Cobertura';
import { Source } from './components/TableSource/Source';
import { NavBar } from './shared/navBar';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path='/servicios' component={Cobertura}></Route>
                <Route path='/rutas' component={RouterS}></Route>
                <Route path='/fuentes' component={Source}></Route>
            </Switch>
        </Router>
    )
}
