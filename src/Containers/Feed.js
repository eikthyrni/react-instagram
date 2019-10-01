import React from 'react';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import {addComment, addPost, changeView, incrementLikes} from '../actions';
import Post from "./Post";

class Feed extends React.PureComponent {
    setListView = () => {
        const { changeView } = this.props;
        changeView('list');
    };

    setGridView = () => {
        const { changeView } = this.props;
        changeView('grid');
    };

    addPost = (e) => {
        e.preventDefault();
        const { addPost } = this.props;
        addPost();
    };

    incrementLikes = (postID) => {
        const { incrementLikes } = this.props;
        incrementLikes(postID);
    };

    addComment = (postID, text) => {
        const { addComment } = this.props;
        addComment(postID, text);
    };

    render () {
        const { filters, posts } = this.props;
        return (
            <>
                <Button
                    onClick={this.setListView}
                    text='List'
                />
                <Button
                    onClick={this.setGridView}
                    text='Grid'
                />
                <div className={filters.view}>
                    {posts.map(p =>
                        <Post
                            key={p.id}
                            post={p}
                            likes={p.likes}
                            likesIncCallback={this.incrementLikes}
                            comments={p.comments}
                            addCommentCallback={this.addComment}
                        />)}
                </div>
                <Button
                    onClick={this.addPost}
                    text='Add post'
                    className='add-post'
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        filters: state.filters
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: () => dispatch(addPost()),
        changeView: (view) => dispatch(changeView(view)),
        incrementLikes: (postID) => dispatch(incrementLikes(postID)),
        addComment: (postID, text) => dispatch(addComment(postID, text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);