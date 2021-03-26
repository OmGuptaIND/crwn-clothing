import React from "react";
import "./App.css";

//Components;
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { auth, createUserProfileDocument } from "./Firebase/firebase";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
const HatsPage = () => {
  return <div>This is Hats Page</div>;
};

const Routes = [
  {
    _id: Math.random().toString(),
    component: HomePage,
    route: "/",
    exact: true,
  },
  {
    _id: Math.random().toString(),
    component: ShopPage,
    route: "/shop",
    exact: true,
  },
  {
    _id: Math.random().toString(),
    component: HatsPage,
    route: "/shop/hats",
    exact: true,
  },
  {
    _id: Math.random().toString(),
    component: AuthPage,
    route: "/signIn",
    exact: true,
  },
];

export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      routes: Routes,
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
        await createUserProfileDocument(userAuth).then(async userRef => {
          await userRef.onSnapshot(snap => {
            this.setState({
              ...this.state,
              currentUser:{
                _id:snap.id,
                ...snap.data(),
              }
            });
            console.log(this.state.currentUser);
          })
      }).catch(err => console.log(err));
      }else{
        this.setState({...this.state, currentUser:null})
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {this.state.routes.map(({ exact, _id, component, route }) => (
            <Route exact={exact} key={_id} component={component} path={route} />
          ))}
        </Switch>
      </div>
    );
  }
}
