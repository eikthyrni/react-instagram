import React from 'react';

class InputForm extends React.Component {
    render () {
        const { onSubmit, type } = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input type={type || 'text'} />
                <button type='submit'> Submit </button>
            </form>
        )
    }
}

export default InputForm;