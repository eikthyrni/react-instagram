import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link} from 'react-router-dom';

class Header extends React.Component {
    render () {
        const { user } = this.props.store;
        return (
            <header>
                <div className='links'>
                    <Link to="/profile">Profile</Link>
                    <Link to="/feed">Feed</Link>
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