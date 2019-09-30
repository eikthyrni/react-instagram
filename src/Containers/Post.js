import React from 'react';
import Comments from '../Components/Post/Comments';
import CommentsList from '../Components/Post/CommentsList';
import Likes from '../Components/Post/Likes';

class Post extends React.PureComponent {
    render () {
        const { post } = this.props;

        return (
            <div className='post'>
                <img src={post.pic} />
                <Likes post={post} />
                {/*<CommentsList data={post.comments} />*/}
                <Comments post={post} />
            </div>
        )
    }
}

export default Post;