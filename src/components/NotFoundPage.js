import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Error 404: Not found page - <Link to='/'>Go home</Link>
    </div>
);

export default NotFoundPage;
