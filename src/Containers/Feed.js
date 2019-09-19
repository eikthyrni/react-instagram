import React from 'react';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import { addPost, changeView } from '../actions';
import PostsList from './PostsList';

class Feed extends React.Component {
    filterClick = (e) => {
        const view = e.target.value;
        if (view === this.props.store.filters.view) return;
        const { changeView } = this.props;
        changeView(view);
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
                    onClick={this.filterClick}
                    text='List'
                    value='list'
                />
                <Button
                    onClick={this.filterClick}
                    text='Grid'
                    value='grid'
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