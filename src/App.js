import React from 'react';
import './App.scss';

// pages
import HomePage from './pages/homepage/home-page.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

// components
import NavBar from './components/nav-bar/nav-bar.component';
import Footer from './components/footer/footer.component';

// routing
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// firebase connection
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // event if the userRef changes
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <NavBar />
          <Switch>
            <Route 
              exact 
              path='/'
              render={() => 
                !this.props.currentUser ? (
                  <Redirect to='/signin/' />
                ) : (
                  <HomePage />
              )} />
            <Route 
              exact 
              path = '/signin/'
              render={() => 
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInSignUp />
              )} />
              <Route path='/' component={ HomePage } />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);