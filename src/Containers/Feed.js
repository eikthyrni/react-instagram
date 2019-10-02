import React, { memo, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../Components/Button';
import Actions from '../actions';
import Post from "./Post";

const Feed = () => {
    const dispatch = useDispatch();

    const handleLikesIncrement = useCallback((postID) => {
        dispatch(Actions.incrementLikes(postID))
    }, []);

    const handleNewComment = useCallback((postID, text) => {
        dispatch(Actions.addComment(postID, text))
    }, []);

    const { filters, posts } = useSelector((state) => state);

    return (
        <>
            <Button
                onClick={() => dispatch(Actions.changeView('list'))}
                text='List'
            />
            <Button
                onClick={() => dispatch(Actions.changeView('grid'))}
                text='Grid'
            />
            <div className={filters.view}>
                {posts.map(p =>
                    <Post
                        key={p.id}
                        post={p}
                        likes={p.likes}
                        likesIncCallback={handleLikesIncrement}
                        comments={p.comments}
                        addCommentCallback={handleNewComment}
                    />)}
            </div>
            <Button
                onClick={() => dispatch(Actions.addPost())}
                text='Add post'
                className='add-post'
            />
        </>
    )
};

export default Feed;