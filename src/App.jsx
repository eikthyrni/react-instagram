import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    editUserName = newUserName => {
        const { editUserName } = this.props;
        editUserName(newUserName);
    };

    render () {
        return (
            <>
                <div
                    onClick={() => this.editUserName(Math.random())}
                >
                    {this.props.store.user.name}
                </div>
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
        editUserName: (newUserName) => dispatch({ type: 'EDIT_USER_NAME', payload: newUserName }),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
