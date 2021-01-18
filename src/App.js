import {React} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RouterIndex } from './components/TableRouter/RouterIndex';
import { RouterService } from './components/TableRouter/RouterService';
import { Services } from './components/TableServices/Services';
import { NavBar } from './shared/navBar';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path='/servicios' component={Services}></Route>
                <Route path='/rutas' component={RouterService}></Route>
            </Switch>
        </Router>
    )
}
