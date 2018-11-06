import React from 'react';

export default function TotalHeader(props) {
    return (
        <div>
            <h5>{props.label}</h5>
            <h3>{props.count}</h3>
        </div>
    )
}
