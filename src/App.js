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
  Route,
  Redirect
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    console.log(this.props.auth0);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header
              auth={this.props.auth0.authenticated}
            />
            <Switch>

              <Route exact path="/">
                {this.props.auth0.isAuthenticated ?
                  <MyFavoriteBooks /> : <Login />
                }
              </Route>
              <Route exact path="/login">
                {this.props.auth0.isAuthenticated ?
                  <Redirect to='/profile' /> : <Login />
                }
              </Route>
              <Route exact path="/profile">
                {this.props.auth0.isAuthenticated ?
                  <Profile /> : <Redirect to='/login' />
                }
              </Route>

            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
