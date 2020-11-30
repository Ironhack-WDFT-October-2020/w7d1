// src/index.js
import React from 'react';
// import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);