import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }

    editUserName = newTodo => {
        const { editUserName } = this.props;
        editUserName(newTodo);
    };

    render () {
        return (
            <>
                <div
                    onClick={() => this.editUserName('newName')}
                >
                    {this.props.store.name}
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
