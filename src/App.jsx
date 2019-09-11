import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './Components/Header';

const LoadingHeader = <h5>Loading..</h5>;

const Profile = Loadable({
    loader: () => import('./Containers/Profile'),
    loading: () => LoadingHeader
});

class App extends React.Component {
    render () {
        return (
            <>
                <Header />
                <Router>
                    <Switch>
                        <Route path="/profile" component={Profile} />
                        {/*<Route path="/feed" component={Feed} />*/}
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App;
