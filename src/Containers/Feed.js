import React from 'react';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import { addPost, changeView } from '../actions';
import PostsList from './PostsList';

class Feed extends React.Component {
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

    render () {
        const { filters, posts } = this.props.store;
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
                    <PostsList posts={posts} />
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
        store: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: () => dispatch(addPost()),
        changeView: (view) => dispatch(changeView(view)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);