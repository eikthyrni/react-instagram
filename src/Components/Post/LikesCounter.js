import React from 'react';

class Likes extends React.PureComponent {
    render () {
        const { likes } = this.props;

        return (
            <>{likes}</>
        )
    }
}

export default Likes;