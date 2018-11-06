import React from 'react';

export default function TotalHeader(props) {
    return (
        <div>
            <h2>{props.label}</h2>
            <p>{props.count}</p>
        </div>
    )
}
