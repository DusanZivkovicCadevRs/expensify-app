import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardpage = () => (
    <div>
        This is from dash comp
    </div>
);


const expensestuff = () => (
    <div>
        This is f
    </div>
);


const help = () => (
    <div>
    Help page
    </div>
);


const edit = () => (
    <div>
    edit page
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={ExpenseDashboardpage} exact={true}/>
            <Route path='/create' component={expensestuff} />
            <Route path='/edit' component={edit} />
            <Route path='/help' component={help} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
