import React from 'react';

const Action = props => {
    return (
        <div>
            <h2>{props.description}</h2>
            <p>{props.notes}</p>
        </div>
    );
}

export default Action;