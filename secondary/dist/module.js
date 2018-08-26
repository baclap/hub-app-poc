// import React, { Component } from 'react';

const React = window.React;

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { n: 0 };
    }
    render() {
        const { n } = this.state;
        return React.createElement(
            "button",
            { onClick: e => this.setState({ n: n + 1 }) },
            n
        );
    }
}
