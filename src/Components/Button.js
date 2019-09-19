import React from 'react';

class Button extends React.Component {
    render () {
        const { value, onClick, className, text } = this.props;
        return (
            <button
                onClick={onClick}
                value={value}
                className={className}
            >{text}</button>
        )
    }
}

export default Button;