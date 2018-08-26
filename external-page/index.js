import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { n: 0 };
    }
    render() {
        const { n } = this.state;
        return <button onClick={e => this.setState({ n: n + 1 })}>{n}</button>
    }
}

const FooSubPage = () => (
    <div>
        <h2>FooSubPage</h2>
        <Counter />
    </div>
);

const BarSubPage = () => (
    <div>
        <h2>BarSubPage</h2>
    </div>
);

const ExternalPage = () => (
    <div style={{ background: 'red' }}>
        <p>All pages with red backgrounds were defined in the external-page source code.</p>

        <ul>
            <li><Link to="/external-page/foo">Foo Sub Page</Link></li>
            <li><Link to="/external-page/bar">Bar Sub Page</Link></li>
        </ul>

        <hr/>

        <Switch>
            <Route path="/external-page/foo" component={FooSubPage}/>
            <Route path="/external-page/bar" component={BarSubPage}/>
            <Redirect to="/external-page/foo" />
        </Switch>
    </div>
);
export default ExternalPage;
