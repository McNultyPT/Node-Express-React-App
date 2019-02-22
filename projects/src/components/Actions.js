import React from 'react';

import Action from './Action';

const Actions = props => {
    return (
        <div>
            <h1>Actions</h1>
            {props.actions.map(action => {
                return (
                    <div>
                        <Action
                            description={action.description}
                            notes={action.notes}
                            key={action.id} 
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Actions;