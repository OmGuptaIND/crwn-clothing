import React from "react";
import "./App.css";

//Redux;
import { connect } from "react-redux";
import setCurrentUser from "./redux/user/user.actions.js";
import { selectCurrentUser } from "./redux/user/user.selectors";

//Components;
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import { auth, createUserProfileDocument } from "./Firebase/firebase";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import CheckOut from "./Pages/CheckOut/CheckOut";
import CollectionPage from "./Pages/CollectionPage/CollectionPage";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else setUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route path="/shop/:categoryId" component={CollectionPage} />
          <Route path = '*' render = {()=><div>Does not Exist</div>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
