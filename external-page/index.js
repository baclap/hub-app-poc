import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

const ExternalSubPageA = () => (
    <div>
        <h1 className="title">External Sub Page A</h1>
        <p className="subtitle">
            This page is defined within the external-page source code.
        </p>
    </div>
);

const ExternalSubPageB = () => (
    <div>
        <h1 className="title">External Sub Page B</h1>
        <p className="subtitle">
            This page is defined within the external-page source code.
        </p>
    </div>
);

const ExternalSubPageC = () => (
    <div>
        <h1 className="title">External Sub Page C</h1>
        <p className="subtitle">
            This page is defined within the external-page source code.
        </p>
    </div>
);

const ExternalSubPageD = () => (
    <div>
        <h1 className="title">External Sub Page D</h1>
        <p className="subtitle">
            This page is defined within the external-page source code.
        </p>
    </div>
);

const ExternalPage = () => (
    <section className="section">
        <div className="container">
            <div className="columns">
                <div className="column is-one-quarter">
                    <aside className="menu">
                        <ul className="menu-list">
                            <li><NavLink activeClassName="is-active" to="/external-page/subpage-a">Sub Page A</NavLink></li>
                            <li><NavLink activeClassName="is-active" to="/external-page/subpage-b">Sub Page B</NavLink></li>
                            <li><NavLink activeClassName="is-active" to="/external-page/subpage-c">Sub Page C</NavLink></li>
                            <li><NavLink activeClassName="is-active" to="/external-page/subpage-d">Sub Page D</NavLink></li>
                        </ul>
                    </aside>
                </div>
                <div className="column is-three-quarters">
                    <Switch>
                        <Route path="/external-page/subpage-a" component={ExternalSubPageA}/>
                        <Route path="/external-page/subpage-b" component={ExternalSubPageB}/>
                        <Route path="/external-page/subpage-c" component={ExternalSubPageC}/>
                        <Route path="/external-page/subpage-d" component={ExternalSubPageD}/>
                        <Redirect to="/external-page/subpage-a" />
                    </Switch>
                </div>
            </div>
        </div>
    </section>
);
export default ExternalPage;
