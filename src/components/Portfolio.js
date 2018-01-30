import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import PortfolioExact from './PortfolioExact';

const Portfolio = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Portfolio page</h1>
            <NavLink to='/portfolio/1' activeClassName='is-active'>Go to thing ONE</NavLink>
            <NavLink to='/portfolio/2' activeClassName='is-active'>Go to thing TWO</NavLink>
            <Route path='/portfolio/:id' component={PortfolioExact} />
        </div>
    )
}

export default Portfolio;