import React from "react";
import "./App.css";

//Components;
import { Switch, Route } from "react-router-dom";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
const HatsPage = () => {
  return <div>This is Hats Page</div>;
};

export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      routes: [
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
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {this.state.routes.map(({ exact, _id, component, route }) => (
            <Route exact={exact} key={_id} component={component} path={route} />
          ))}
        </Switch>
      </div>
    );
  }
}
