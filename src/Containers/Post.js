import React from 'react';
import { connect } from 'react-redux';
import InputForm from '../Components/InputForm';
import Button from '../Components/Button';
import { incrementLikes, addComment } from '../actions';

class Post extends React.Component {
    incrementLikes = (e) => {
        e.preventDefault();
        const { incrementLikes } = this.props;
        incrementLikes(this.props.post.id);
    };

    addComment = (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        if (text === '') return;
        const { addComment } = this.props;
        addComment(this.props.post.id, text);
        e.target.reset();
    };

    render () {
        const post = this.props.post,
              Pic = () => <img src={post.pic} />,
              LikesCount = () => post.likes,
              CommentsList = () => post.comments.map(c => <li key={c.id}>{c.text}</li>);

        return (
            <div className='post'>
                <Pic />
                <LikesCount />
                <Button
                    onClick={this.incrementLikes}
                    text='♥'
                />
                <ul>{ <CommentsList /> }</ul>
                <InputForm onSubmit={this.addComment} />
            </div>
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
        addComment: (postID, text) => dispatch(addComment(postID, text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);