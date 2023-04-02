import useFetch from "./useFetch";

export default function usePlayers(team) {
  console.log(useFetch("/players", "POST", JSON.stringify({ team })))

  let teamObject = {
    "response": [
        {
            "name": "Anthony Morales",
            "position": "Forward/Center",
            "teamId": "Brick City",
            "number": 0,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis",
            "rpg": 0,
            "spg": 0,
            "apg": 0,
            "ppg": 0,
            "id": "anthony-morales"
        },
        {
            "name": "Johnny Ramirez",
            "position": "Forward/Center",
            "teamId": "Brick City",
            "number": 1,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/benadam11",
            "rpg": 0,
            "spg": 0,
            "apg": 0,
            "ppg": 0,
            "id": "johnny-ramirez"
        },
        {
            "name": "Jon Santos",
            "position": "Guard",
            "teamId": "Brick City",
            "number": 93,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/vlh",
            "rpg": 0,
            "spg": 0,
            "apg": 0,
            "ppg": 0,
            "id": "jon-galvaorian"
        },
        {
            "name": "Kevin Nguyen",
            "position": "Guard",
            "teamId": "Brick City",
            "number": 19,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/dan_abramov",
            "rpg": 0,
            "spg": 0,
            "apg": 0,
            "ppg": 0,
            "id": "kevin-nguyen"
        },
        {
            "name": "Matthew Mendoza",
            "position": "Guard",
            "teamId": "Brick City",
            "number": 10,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/brindelle",
            "rpg": 0,
            "spg": 0,
            "apg": 0,
            "ppg": 0,
            "id": "matthew-mendoza"
        },
        {
            "name": "Michael Mendoza",
            "position": "Forward",
            "teamId": "Brick City",
            "number": 32,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993",
            "rpg": 0,
            "spg": 0,
            "apg": 0,
            "ppg": 0,
            "id": "michael-mendoza"
        },
        {
            "name": "Parth Patel",
            "position": "Guard",
            "teamId": "Brick City",
            "number": 28,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/floydophone",
            "rpg": 0,
            "spg": 0,
            "apg": 0,
            "ppg": 0,
            "id": "parth-patel"
        },
        {
            "name": "Ryan Tang",
            "position": "Guard",
            "teamId": "Brick City",
            "number": 8,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/sarah_edo",
            "rpg": 0,
            "spg": 0,
            "apg": 0,
            "ppg": 0,
            "id": "ryan-tang"
        },
    ],
    "loading": false
}

  console.log(teamObject);


  return teamObject;
}
