import React from 'react';

const Button = ({ value, onClick, className, text }) => {
    return (
        <button
            onClick={onClick}
            value={value}
            className={className}
        >{text}</button>
    )
};

export default Button;