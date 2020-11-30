import React from 'react'
import Profile from './Profile';

const App = () => {
    const user = {
        name: 'Timmy',
        email: 'timmy@southpark.com',
        picture: 'https://bit.ly/2zVs57p'
    }
    return (
        <Profile data={user} />
    )
}

export default App;