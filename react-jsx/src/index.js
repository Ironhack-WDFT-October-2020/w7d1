// import react
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// to run the server: $ npm run webpack --watch

// JSX
// no backticks / no quotes
const name = 'Kevin';
// embed any js expression within {}
// const element = <h1>Hello {name + '!!'}</h1>
// we can return jsx from functions
const greet = () => <h1>Hello {name + '!!'}</h1>
// multiple lines
// const element = (
//     <h1 className="someClass">
//         Hello World
//     </h1>
// );
// attributes : class -> className, for -> htmlFor 

// inline styling
const styling = {
    color: 'red'
}
const element = (
    <div>
        <p style={{
            backgroundColor: 'pink'
        }}>
            Random Number: {Math.floor(Math.random() * 10)}
        </p>
        <p style={styling}>
            Second Paragraph
        </p>
    </div>
)
// you need to close all tags
{/* <br> -> <br />
<img src="" alt=""> -> <img src="" alt="" /> */}

ReactDOM.render(
    element,
    document.getElementById('root')
)