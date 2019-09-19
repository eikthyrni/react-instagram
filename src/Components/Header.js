import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render () {
        const user = this.props.store.user;
        return (
            <header>
                <div className='links'>
                    <a href='/feed'>Feed</a>
                    <a href='/profile'>Profile</a>
                </div>
                <div className='user-info'>
                    <div>{user.name}</div>
                    <img src={user.avatar} />
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        store: state
    }
};

export default connect(mapStateToProps)(Header);