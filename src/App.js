import {React} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RouterS } from './components/TableRouter/RouterS';
import { Cobertura } from './components/TableCobertura/Cobertura';
import { Source } from './components/TableSource/Source';
import { NavBar } from './shared/navBar';
import { EspesificSource } from './components/EspesificSource/EspesificSource';
import Grid from '@material-ui/core/Grid';

export const AppRouter = () => {

    return (
        <Grid  container className="h-100">
            <Grid item lg={2}>
                <NavBar />
            </Grid>
            <Grid item lg={10}>
                <Router>
                    <Switch>
                        <Route path='/servicios' component={Cobertura} exact></Route>
                        <Route path='/rutas' component={RouterS} exact></Route>
                        <Route path='/fuentes/' component={Source} exact></Route>
                        <Route path='/fuentes/:id' component={EspesificSource} exact></Route>
                    </Switch>
                </Router>
            </Grid>
        </Grid>
    )
}
