import useFetch from "./useFetch";

export default function useTeamNames(team) {
  let teamObject = {
    "response": [
        "brick-city",
        "foxes",
        "hedgehogs",
        "lemurs",
        "koalas"
    ],
    "loading": false
}
  return teamObject;
}
