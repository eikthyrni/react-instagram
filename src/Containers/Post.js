import React from 'react';
import Button from "../Components/Button";
import InputForm from "../Components/InputForm";

class Post extends React.PureComponent {
    newComment = (e) => {
        const { post, addCommentCallback } = this.props;
        e.preventDefault();
        const text = e.target[0].value;
        if (text === '') return;
        addCommentCallback(post.id, text);
        e.target.reset();
    };

    render () {
        const {
            post,
            likesIncCallback,
            comments,
            likes
        } = this.props;

        console.log('render post', post.id);

        return (
            <div className='post'>
                <img src={post.pic} alt='' />
                {likes}
                <Button
                    onClick={() => likesIncCallback(post.id)}
                    text='♥'
                />

                <ul>{comments.map(c => <li key={c.id}>{c.text}</li>)}</ul>
                <InputForm onSubmit={this.newComment} />
            </div>
        )
    }
}

export default Post;