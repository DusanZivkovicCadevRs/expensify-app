import React from 'react';

// Export a stateless functional component
// description, amount, createdAt

export default ({description, amount, createdAt}) => (
    <div>
        <h1>{description}</h1>
        <p>{amount} - {createdAt}</p> 
    </div>
);
