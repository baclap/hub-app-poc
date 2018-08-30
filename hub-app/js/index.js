import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDOM from 'react-router-dom';
import Loadable from 'react-loadable';
import history from './history';
import loadExternalComponent from './loadExternalComponent';
import DashboardPage from './pages/DashboardPage';
import InternalPage from './pages/InternalPage';
import Loading from './components/Loading';

// HACK: expose React and ReactRouterDOM on window so external-page
// doesn't need to bundle these libraries also...
window.React = React;
window.ReactRouterDOM = ReactRouterDOM;
const { Router, Switch, Route, Redirect, NavLink } = ReactRouterDOM;

// For demonstration purposes only...
function delayedLoadExternalPage() {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => loadExternalComponent(
                'http://localhost:8001/page.js',
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
            <nav className="navbar is-link">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink className="navbar-item" activeClassName="is-active" to="/dashboard">Dashboard</NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/internal-page">Internal Page</NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/external-page">External Page</NavLink>
                    </div>
                </div>
            </nav>
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
