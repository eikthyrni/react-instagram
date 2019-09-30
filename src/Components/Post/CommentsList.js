import React from 'react';

class CommentsList extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(this.props, nextProps);
        return true;
    }

    render () {
        const { comments } = this.props;

        return (
            <ul>{comments.map(c => <li key={c.id}>{c.text}</li>)}</ul>
        )
    }
}

export default CommentsList;