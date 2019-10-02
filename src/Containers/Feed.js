import React, { memo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../Components/Button';
import Actions from '../actions';
import Post from "./Post";

const Feed = () => {
    const dispatch = useDispatch();
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
                        likesIncCallback={(postID) => dispatch(Actions.incrementLikes(postID))}
                        comments={p.comments}
                        addCommentCallback={(postID, text) => dispatch(Actions.addComment(postID, text))}
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

export default memo(Feed);