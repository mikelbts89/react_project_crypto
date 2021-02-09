import React from "react";
import { Route, Switch } from "react-router-dom";
import CoinsList from "../../MainArea/CoinsList/CoinsList";
const Routing = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/coins-list">
          <CoinsList />
        </Route>
        <Route exact path="/live-report"></Route>
        <Route exact path="/about"></Route>
      </Switch>
    </div>
  );
};

export default Routing;
