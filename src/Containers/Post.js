import React, { memo } from 'react';
import Button from "../Components/Button";
import InputForm from "../Components/InputForm";

const Post = memo(({ post, comments, addCommentCallback, likes, likesIncCallback }) => {
    const newComment = (e) => {
        e.preventDefault();
        const text = e.target[0].value;

        if (text) {
            addCommentCallback(post.id, text);
            e.target.reset();
        }
    };

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
            <InputForm onSubmit={newComment} />
        </div>
    )
});

export default (Post);