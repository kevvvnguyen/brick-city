import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container navbar">
      <Link to="/">Home</Link>
      <nav className="nav-links">
        <Link to="/players">Players</Link>
        <Link to="/brick-city">Team</Link>
        <Link to="/games">Games</Link>
        <Link to="/brick-city/articles">Articles</Link>
      </nav>
    </div>
  );
}
