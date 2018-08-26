import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import history from './history';
import loadExternalComponent from './loadExternalComponent';
import DashboardPage from './pages/DashboardPage';
import InternalPage from './pages/InternalPage';
import Loading from './components/Loading';

// For demonstration purposes only...
function delayedLoadExternalPage() {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => loadExternalComponent(
                'http://localhost:8001/dist/page.js',
                'external-page'
            ).then(resolve),
            1000
        );
    })
}

const LoadableExternalPage = Loadable({
    // This is all we need to do...
    // loader: () => loadExternalComponent('http://localhost:8001/dist/page.js', 'external-page'),
    // ...but for demonstration purposes we'll force a delay
    loader: delayedLoadExternalPage,
    loading: Loading
});

ReactDOM.render(
    <Router history={history}>
        <div>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/internal-page">Internal Page</Link></li>
                <li><Link to="/external-page">External Page</Link></li>
            </ul>

            <hr/>

            <Switch>
                <Route path="/dashboard" component={DashboardPage}/>
                <Route path="/internal-page" component={InternalPage}/>
                <Route path="/external-page" component={LoadableExternalPage}/>
                <Redirect to="/dashboard" />
            </Switch>
        </div>
    </Router>,
    document.querySelector('#app')
);
