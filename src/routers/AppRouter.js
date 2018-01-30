import React from 'react';
import { NavLink, Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardpage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardpage} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
