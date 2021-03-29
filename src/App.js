import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import MyFavoriteBooks from './MyFavoriteBooks';
import Login from './Login';
import Profile from './Profile';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    console.log(this.props.auth0);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              {this.state.authenticated &&
                <Route exact path="/" component={MyFavoriteBooks} />
              }
              {!this.state.authenticated &&
                <Route exact path="/login" component={Login} />
              }
              {this.state.authenticated &&
                <Route exact path="/profile" component={Profile} />
              }
              {this.props.auth0.isAuthenticated &&
                <Profile />
              }
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
