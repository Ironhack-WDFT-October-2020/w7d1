import React, { Fragment } from 'react'

export default function Detail(props) {
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
