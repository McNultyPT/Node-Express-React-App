import React from 'react';

import Action from './Action';

const Actions = props => {
    return (
        <div>
            {props.actions.map(action => {
                return (
                    <Action
                       description={action.description}
                       notes={action.notes}
                       key={action.id} 
                    />
                );
            })}
        </div>
    );
}

export default Actions;