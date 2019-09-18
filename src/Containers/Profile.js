import React from 'react';
import { connect } from 'react-redux';
import InputForm from '../Components/InputForm';

class Profile extends React.Component {
    editUserName = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        if (name === '') return;
        const { editUserName } = this.props;
        editUserName(name);
        e.target.reset();
    };

    editUserAvatar = (e) => {
        e.preventDefault();
        const pic = e.target[0].files[0];
        if (pic === undefined) return;
        const { editUserAvatar } = this.props;
        const picBlob = URL.createObjectURL(pic);
        editUserAvatar(picBlob);
        e.target.reset();
    };

    render () {
        return (
            <>
                <InputForm onSubmit={this.editUserName} />
                <InputForm
                    onSubmit={this.editUserAvatar}
                    type='file'
                />
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
        editUserAvatar: (newUserAvatar) => dispatch({ type: 'EDIT_AVATAR', payload: newUserAvatar }),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);