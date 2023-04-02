import * as React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import slug from "slug";

function InfoList({ game }) {
  return (
    <ul className="info-list">
      <li>
        Three Percentage<div>{game.threePercentage}</div>
      </li>
      <li>
        
      </li>
      <li>
        
      </li>
    </ul>
  );
}

InfoList.propTypes = {
  game: PropTypes.object.isRequired,
};

export default function Game({ games }) {
  const { gameId } = useParams();
  const game = games.find(({ name }) => slug(name) === gameId);

  return (
    <div className="panel">
      <img
        className="avatar"
        src={`${game.avatar}`}
        alt={`${game.name}'s avatar`}
      />
      <h1 className="medium-header">{game.name}</h1>
      <h3 className="header">Game #{game.number}</h3>
      <div className="row">
        <ul className="info-list" style={{ marginRight: 80 }}>
          <li>
            Score<div>{game.score}</div>
          </li>
          <li>
            FG Percentage<div>{game.fgPercentage}</div>
          </li>
          <li>
            FT Percentage<div>{game.ftPercentage}</div>
          </li>
        </ul>
        <InfoList game={game} />
      </div>

      <h3 className="header">Team stats</h3>

      <div className="row">
        <ul className="info-list" style={{ marginRight: 310 }}>
          <li>
            Anthony Morales<div>Test</div>
          </li>
          <li>
            Johnny Ramirez<div>Test</div>
          </li>
          <li>
            Jon Galvorian<div>Test</div>
          </li>
          <li>
            Kevin Nguyen<div>Test</div>
          </li>
          <li>
            Matthew Mendoza<div>Test</div>
          </li>
          <li>
            Michael Mendoza<div>Test</div>
          </li>
          <li>
            Parth Patel<div>Test</div>
          </li>
          <li>
            Ryan Tang<div>Test</div>
          </li>
        </ul>
      </div>

    </div>
  );
}

Game.propTypes = {
  games: PropTypes.array.isRequired,
};
