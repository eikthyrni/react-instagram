import React from 'react';
import { connect } from "react-redux";
import './styles.css';

class AvatarForm extends React.Component {
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
                <form onSubmit={this.editUserAvatar}>
                    <input type="file"/>
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
        editUserAvatar: (newUserAvatar) => dispatch({ type: 'EDIT_AVATAR', payload: newUserAvatar }),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvatarForm);