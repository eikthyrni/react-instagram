import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './Components/Header';
import './App.css';

const LoadingHeader = <h5>Loading..</h5>;

const Profile = Loadable({
    loader: () => import('./Containers/Profile'),
    loading: () => LoadingHeader
});

const Feed = Loadable({
    loader: () => import('./Containers/Feed'),
    loading: () => LoadingHeader
});

const App = () => {
    return (
        <>
            <Header />
            <Router>
                <Link to="/profile">Profile</Link>
                <Link to="/feed">Feed</Link>
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route path="/feed" component={Feed} />
                </Switch>
            </Router>
        </>
    )
};

export default App;
