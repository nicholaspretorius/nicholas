import React from "react";
import { Switch, Route } from "react-router-dom";

import Films from "./components/Films";
import FilmPage from "./components/FilmPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Films}></Route>
        <Route exact path="/films/:id" component={FilmPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
