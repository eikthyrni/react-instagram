import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

class Header extends React.Component {
    render () {
        const storeUser = this.props.store.user;
        return (
            <header>
                <div className="links">
                    <a href='/feed'>Feed</a>
                    <a href='/profile'>Profile</a>
                </div>
                <div className="user-info">
                    <div> {storeUser.name} </div>
                    <img
                        src={storeUser.avatar}
                        alt="pic"
                    />
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

export default connect(
    mapStateToProps,
)(Header);