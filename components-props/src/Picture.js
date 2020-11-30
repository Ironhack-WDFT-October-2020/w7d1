import React from 'react'

export default function Picture(props) {
    return (
        <img src={props.imageUrl} style={{ width: '200px' }} />
    )
}
