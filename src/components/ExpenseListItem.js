import React from 'react';
import { Link } from 'react-router-dom';

// Export a stateless functional component
// description, amount, createdAt

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`} >
            <h1>{description}</h1>
        </Link>
        <p>{amount} - {createdAt}</p>

    </div>
);

export default ExpenseListItem;
