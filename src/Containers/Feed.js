import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import { addPost, changeView } from '../actions';

class Feed extends React.Component {
    filterClick = (e) => {
        e.preventDefault();
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
                <div className={this.props.store.filters.view}>
                    {this.props.store.posts.map(c => <Post key={c.id} post={c} />)}
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