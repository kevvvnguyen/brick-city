import useFetch from "./useFetch";

export default function useTeamsArticles(team) {
  let articlesObject = {
    "response": [
        {
            "date": "2023-04-02T00:00:00.000Z",
            "title": "Preseason Game 1",
            "id": "preseason-game-1"
        },
        {
            "date": "2023-04-11T00:00:00.000Z",
            "title": "Brick City Game 1",
            "id": "brick-city-fall-into-late-slump"
        },
        {
            "date": "2023-04-18T00:00:00.000Z",
            "title": "Brick City Game 2",
            "id": "brick-city-lose-key-player"
        },
        {
            "date": "2023-04-25T00:00:00.000Z",
            "title": "Brick City Game 3",
            "id": "brick-city-heating-up-in-october"
        },
        {
            "date": "2023-04-02T00:00:00.000Z",
            "title": "Brick City Game 4",
            "id": "brick-city-continue-to-get-worse"
        },
        {
            "date": "2023-04-02T00:00:00.000Z",
            "title": "Brick City Game 5",
            "id": "brick-city-lose-again"
        },
        {
            "date": "2023-04-02T00:00:00.000Z",
            "title": "Brick City Game 6",
            "id": "brick-city-get-free-agent-for-cheap"
        },
        {
            "date": "2023-04-02T00:00:00.000Z",
            "title": "Brick City Game 7",
            "id": "brick-city-off-to-great-start"
        },
        {
            "date": "2023-04-02T00:00:00.000Z",
            "title": "Brick City Game 8",
            "id": "brick-city-lose-another-to-injury"
        },
        {
            "date": "2023-04-02T00:00:00.000Z",
            "title": "Brick City Game 9",
            "id": "brick-city-worst-case-scenario"
        },
    ],
    "loading": false
}

  return articlesObject;
}
