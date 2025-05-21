import React from 'react';

const ValidationError = ({ message }) => {
    return (
        <div className="text-red-400">
            {message}
        </div>
    );
};

export default ValidationError;
