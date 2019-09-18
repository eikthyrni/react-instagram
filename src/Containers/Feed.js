import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import Button from '../Components/Button';

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
                    { Object.entries(this.props.store.posts).map(([key, value]) =>
                            <Post key={key} id={key} post={value} />) }
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
        addPost: () => dispatch({ type: 'ADD_POST' }),
        changeView: (view) => dispatch({ type: 'CHANGE_VIEW', payload: view }),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);