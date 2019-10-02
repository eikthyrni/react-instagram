import React from 'react';

const Button = (props) => {
    const { value, onClick, className, text } = props;

    return (
        <button
            onClick={onClick}
            value={value}
            className={className}
        >{text}</button>
    )
};

export default Button;