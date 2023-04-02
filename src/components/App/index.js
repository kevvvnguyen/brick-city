import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home";
import Players from "../Players";
import Teams from "../Teams";
import NavBar from "../NavBar";
import TeamPage from "../TeamPage";
import Articles from "../Articles";
import Games from "../Games";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/players">
            <Players />
          </Route>

          <Route path="/games">
            <Games />
          </Route>

          <Route path="/teams">
            <Teams />
          </Route>

          <Route exact path="/:teamId">
            <TeamPage />
          </Route>

          <Route path="/brick-city/articles">
            <Articles />
          </Route>

          <Route path="*">
            <h1 className="text-center">Four oh Four</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
