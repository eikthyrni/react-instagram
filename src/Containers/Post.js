import React from 'react';
import Comments from '../Components/Post/Comments';
import Likes from '../Components/Post/Likes';

class Post extends React.PureComponent {
    render () {
        const { post } = this.props,
            Pic = () => <img src={post.pic} />;

        return (
            <div className='post'>
                <Pic />
                <Likes post={post} />
                <Comments post={post} />
            </div>
        )
    }
}

export default Post;