import React from 'react';

const InputForm = (props) => {
    const { onSubmit, type } = props;

    return (
        <form onSubmit={onSubmit}>
            <input type={type || 'text'} />
            <button type='submit'> Submit </button>
        </form>
    )
};

export default InputForm;