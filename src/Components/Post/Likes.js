import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import LikesCounter from './LikesCounter';
import { incrementLikes } from '../../actions';

class Likes extends React.Component {
    incrementLikes = (e) => {
        e.preventDefault();
        const { incrementLikes, post } = this.props;
        incrementLikes(post.id);
    };

    render () {
        const { post } = this.props;

        return (
            <>
                <LikesCounter likes={post.likes} />
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