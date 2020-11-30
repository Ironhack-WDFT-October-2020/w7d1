import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

// class App extends React.Component {
//     render() {
//         return (
//             <Fragment>
//                 <Greeting person='Marty' />
//                 <Greeting person='Biff' />
//             </Fragment>
//         )
//     }
// }

// Class component
// class Greeting extends React.Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>Hello {this.props.person}</h1>
//                 <h1>Hello {this.props.anotherPerson}</h1>
//             </div>
//         )
//     }
// }

// Functional component
// const Greeting = (props) => {
//     return <h1>Hello {props.person}</h1>
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)