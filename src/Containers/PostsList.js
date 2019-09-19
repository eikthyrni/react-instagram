import React from 'react';
import Post from './Post';

class PostsList extends React.PureComponent {
    render () {
        const { posts } = this.props;
        return (
            <>
                {posts.map(c => <Post key={c.id} post={c} />)}
            </>
        )
    }
}

export default PostsList;