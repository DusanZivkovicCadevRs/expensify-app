import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardpage = () => (
    <div>
        This is from dash comp
    </div>
);


const CreateExpensePage = () => (
    <div>
        Create expense
    </div>
);


const HelpPage = () => (
    <div>
        Help page
    </div>
);


const NotFoundPage = () => (
    <div>
        Error 404: Not found page - <Link to='/'>Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
);

const EditPage = () => (
    <div>
        edit page
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardpage} exact={true} />
                <Route path='/create' component={CreateExpensePage} />
                <Route path='/edit' component={EditPage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
