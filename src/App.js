import React from "react";
import "./App.css";

//Components;
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import {auth} from './Firebase/firebase';

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
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
    component: SignInPage,
    route: "/signIn",
    exact: true,
  },
];

export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      routes: Routes,
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    
    auth.onAuthStateChanged(user => {
      this.unsubscribeFromAuth = this.setState({...this.state, currentUser:user});

      console.log(`Current user is >>> ${this.state.currentUser}`);
      console.log(this.state.currentUser);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          {this.state.routes.map(({ exact, _id, component, route }) => (
            <Route exact={exact} key={_id} component={component} path={route} />
          ))}
        </Switch>
      </div>
    );
  }
}
