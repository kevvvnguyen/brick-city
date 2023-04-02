import * as React from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";

import slug from "slug";

import useTeamNames from "../../hooks/useTeamNames";
import useTeamsArticles from "../../hooks/useTeamsArticles";
import useTeam from "../../hooks/useTeam";

import TeamLogo from "../TeamLogo";
import Championships from "./components/Championships";
import Stats from "./components/Stats";
import ArticleList from "./components/ArticleList";
import Loading from "../Loading";
import logo from '../../logo.png';

function useTeamPageData(teamId) {
  const { response: teamNames, loading: loadingTeamNames } = useTeamNames();
  const { response: articles, loading: loadingArticles } = useTeamsArticles(
    teamId
  );
  const { response: team, loading: loadingTeam } = useTeam(teamId);

  return {
    teamNames,
    articles,
    team,
    loading: loadingArticles || loadingTeamNames || loadingTeam,
  };
}

export default function TeamPage() {
  const { teamId } = useParams();
  const { path } = useRouteMatch();

  const { teamNames, articles, team, loading } = useTeamPageData(teamId);

  if (loading === true) {
    return <Loading />;
  }

  if (!teamNames.includes(teamId)) {
    return <h1 className="text-center">The {teamId} is not a valid team.</h1>;
  }
  return (
    <div className="panel">

      <img className="center" src={logo}/>

      {/* <h1 className="medium-header">{team.name}</h1> */}
      <h4 style={{ margin: 5 }}>
        <Link to={{ pathname: "/players" }}>
          View Roster
        </Link>
      </h4>

      <Championships team={team} />

      <Stats team={team} />

      <ArticleList articles={articles} path={path} />
    </div>
  );
}
