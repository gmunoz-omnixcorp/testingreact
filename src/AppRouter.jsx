import {React} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RouterIndex } from './components/TableRouter/RouterIndex';
import { Services } from './components/TableServices/Services';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'servicios'} components={Services}></Route>
                <Route path={'rutas'} components={RouterIndex}></Route>
            </Switch>
        </BrowserRouter>
    )
}
