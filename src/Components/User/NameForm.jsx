import React from 'react';
import { connect } from "react-redux";
import './styles.css';

class NameForm extends React.Component {
    editUserName = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        if (name === '') return;
        const { editUserName } = this.props;
        editUserName(name);
        e.target.reset();
    };

    render () {
        return (
            <>
                <form onSubmit={this.editUserName}>
                    <input
                        type="text"
                        placeholder="New user name"
                    />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        store: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editUserName: (newUserName) => dispatch({ type: 'EDIT_NAME', payload: newUserName }),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameForm);