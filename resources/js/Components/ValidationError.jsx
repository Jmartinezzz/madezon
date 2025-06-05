import React from 'react';

const ValidationError = ({ message, className = "" }) => {
    return (
        <div className={`text-red-400 ${className}`}>
            {message}
        </div>
    );
};

export default ValidationError;
