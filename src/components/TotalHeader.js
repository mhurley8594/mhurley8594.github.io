import React from 'react';

export default function TotalHeader(props) {
    return (
        <div>
            <h6>{props.label}</h6>
            <h4>{props.count}</h4>
        </div>
    )
}
