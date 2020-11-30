import React, { Fragment } from 'react'
import Picture from './Picture';
import Detail from './Detail';

export default function Profile(props) {
    console.log(props.data.name);
    return (
        <Fragment>
            <h1>Profile</h1>
            <Detail name={props.data.name} email={props.data.email} />
            <Picture imageUrl={props.data.picture} />
        </Fragment>
    )
}