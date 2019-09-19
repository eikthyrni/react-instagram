import React from 'react';
import { connect } from 'react-redux';
import InputForm from '../InputForm';
import { addComment } from '../../actions';

class Comments extends React.Component {
    addComment = (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        if (text === '') return;
        const { addComment, post } = this.props;
        addComment(post.id, text);
        e.target.reset();
    };

    render () {
        const { post } = this.props,
            CommentsList = () => post.comments.map(c => <li key={c.id}>{c.text}</li>);
        return (
            <>
                <ul>{<CommentsList />}</ul>
                <InputForm onSubmit={this.addComment} />
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
        addComment: (postID, text) => dispatch(addComment(postID, text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);