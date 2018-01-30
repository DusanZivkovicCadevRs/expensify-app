import React from 'react';
import { NavLink, Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import PortfolioExact from '../components/PortfolioExact';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/portfolio/:id' component={PortfolioExact} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
