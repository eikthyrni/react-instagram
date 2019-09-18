import React from 'react';

class Button extends React.Component {
    render () {
        return (
            <button
                onClick={this.props.onClick}
                value={this.props.value}
                className={this.props.className}
            > { this.props.text } </button>
        )
    }
}

export default Button;