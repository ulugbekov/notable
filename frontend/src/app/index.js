import React from "react";

import { Provider } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "assets/styles.scss";

import store from "app/store";
import history from "app/history";

import Main from "app/screens/main";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} render={(props) => <Main {...props} />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
