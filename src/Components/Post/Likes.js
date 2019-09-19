import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import { incrementLikes } from '../../actions';

class Likes extends React.Component {
    incrementLikes = (e) => {
        e.preventDefault();
        const { incrementLikes, post } = this.props;
        incrementLikes(post.id);
    };

    render () {
        const { post } = this.props,
            LikesCount = () => post.likes;

        return (
            <>
                <LikesCount />
                <Button
                    onClick={this.incrementLikes}
                    text='♥'
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
        incrementLikes: (postID) => dispatch(incrementLikes(postID)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);