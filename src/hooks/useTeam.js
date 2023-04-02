import useFetch from "./useFetch";

export default function useTeam(team) {
  let teamObject = {
    "response": {
        "id": "brick-city",
        "name": "Brick City",
        "wins": 0,
        "losses": 0,
        "established": 2023,
        "coach": "Melon Nguyen",
        "manager": "Kenji Patterson",
        "championships": [
            2023,
        ],
    },
    "loading": false
}
  return teamObject;
}
