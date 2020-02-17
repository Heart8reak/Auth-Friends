import React from 'react'

const Friends = props => {
    return (
        <div>
            <h2> Name: {props.data.name}</h2>
            <p>Age: {props.data.age}</p>
            <p>Email: {props.data.email}</p>
        </div>
    )
}