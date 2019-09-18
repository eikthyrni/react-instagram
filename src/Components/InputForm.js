import React from 'react';

class InputForm extends React.Component {
    render () {
        return (
            <form onSubmit={ this.props.onSubmit }>
                <input type={ this.props.type || 'text' } />
                <button type='submit'> Submit </button>
            </form>
        )
    }
}

export default InputForm;