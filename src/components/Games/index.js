import React from "react";
import { useLocation, Switch, Route, useRouteMatch } from "react-router-dom";
import { parse } from "query-string";
import useGames from "../../hooks/useGames";

import Sidebar from "../Sidebar";
import Game from "../Games/components/Game/";
import Loading from "../Loading";

export default function Games() {
  const location = useLocation();
  const { path } = useRouteMatch();

  const team = location.search ? parse(location.search).teamId : null;

  const { response: games, loading } = useGames(team);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      <Sidebar title="Games" list={games.map((games) => games.name)} />

      <Switch>
        <Route path={`${path}/:gameId`}>
          <Game games={games} />
        </Route>

        <Route path="*">
          <div className="sidebar-instruction">Select a Game</div>
        </Route>
      </Switch>
    </div>
  );
}
