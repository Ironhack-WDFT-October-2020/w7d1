# Components

Components are the main building blocks of react applications. 

If you have a To Do List the list itself could be a component and every list item would be a component 
as well.

The root component is usually named App.js 

### Functional and class components

We can have functional and class components. Functional components cannot have state (if we are not usinn hooks) - more on state later. 

Let's write a class component called Greeting

```
// src/index.js
import React from 'react';
// import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';


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
```

### The same done with a functional component

```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Greeting = () => {
    return <h1>Hello</h1>
}

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);
```

### Now we want to give a name to the compoment that should then be displayed much like the parameter of a function - that is called a prop in react - data that is passed from outside to the component

### Pops and class components

```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Greeting extends React.Component {
    render() {
        console.log(this.props);
        return (
            <h1>Hello {this.props.name}!!</h1>
        )
    }
}


ReactDOM.render(
    <Greeting name="Alice" />,
    document.getElementById('root')
);
```

### Now exactly the same but with a functional component

```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// props is the first argument of the functional component
const Greeting = (props) => {
    return <h1>Hello {props.name}</h1>
}

ReactDOM.render(
    <Greeting name="Alice" />,
    document.getElementById('root')
);

```
### We can use the same component multiple times with different props
### We add the mentioned root component App to our structure and inside there we render two Greeting components
```
// src/index.js
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Greeting name="Marty" />
                <Greeting name="Biff" />
            </Fragment>
        )
    }
}

const Greeting = (props) => {
    return <h1>Hello {props.name}</h1>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

### Now let's have the components in different files - we want a Profile component that has a picture and some details - we want three components, a Profile, Picture and Detail component. Plus our App root component in a separate file

```
$ touch src/App.js
$ touch src/Profile.js
$ touch src/Picture.js
$ touch src/Detail.js
```

### First add the App.js
```
// src/App.js

import React from 'react'

const App = () => {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default App;
```

### And import and render it in index.js
```
// src/index.js
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

### Now add the Profile Component - the App component renders the profile component
```
// src/Profile.js

import React from 'react'

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;
```

### And in the App component:
```
// src/App.js
import React from 'react'
import Profile from './Profile';

const App = () => {
    return (
        <Profile />
    )
}

export default App;
```

### From the App component we want to pass a user object to the Profile

### Add user object to App.js

```
// src/App.js

import React from 'react'
import Profile from './Profile';

const App = () => {
    const user = {
        name: 'Alice',
        email: 'alice@dundermifflin.com',
        picture: 'https://bit.ly/2zVs57p'
    }
    return (
        <Profile data={user} />
    )
}

export default App;
```

```
// src/Profile.js

import React from 'react'

const Profile = (props) => {
    console.log(props.data.name);
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;
```

### Now the data should be passed to Detail and Picture that will be rendered in the Profile component

```
// src/Profile.js

import React, { Fragment } from 'react'
import Picture from './Picture';
import Detail from './Detail';


const Profile = (props) => {
    console.log(props.data.name);
    return (
        <Fragment>
            <h1>Profile</h1>
            <Picture imageUrl={props.data.picture} />
            <Detail name={props.data.name} email={props.data.email} />
        </Fragment>
    )
}

export default Profile;
```

```
// src/Detail.js

import React, { Fragment } from 'react'

const Detail = (props) => {
    return (
        <Fragment>
            <p>
                Name: {props.name}
            </p>
            <p>
                Email: {props.email}
            </p>
        </Fragment>
    )
}

export default Detail;
```

```
// src/Picture.js

import React from 'react'

const Picture = (props) => {
    return (
        <img src={props.imageUrl} style={{ width: '200px' }} />
    )
}
export default Picture;

```