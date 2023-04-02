import React from "react";
import TeamLogo from "../TeamLogo";
import { Link } from "react-router-dom";
import useTeamNames from "../../hooks/useTeamNames";
import logo from '../../logo.png';

export default function Home() {
  const { loading, response: teamNames } = useTeamNames();

  if (loading) return null;

  return (
    <div className="container">
      <img className="center" src={logo}/>
    </div>
  );
}
