import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRoutes = () => {
    return (
        <Router>

            <NavBar />

            <div className="container">
                <Switch>
                    <Route exact path="/" component={ HomeScreen } />

                    <Route exact path="/about-screen" component={ AboutScreen } />
                    <Route exact path="/login-screen" component={ LoginScreen } />

                    {/* <Route component={ HomeScreen } /> */}

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
