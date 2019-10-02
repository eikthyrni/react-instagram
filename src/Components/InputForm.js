import React from 'react';

const InputForm = ({ onSubmit, type }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type={type || 'text'} />
            <button type='submit'> Submit </button>
        </form>
    )
};

export default InputForm;