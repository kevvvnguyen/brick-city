import useFetch from "./useFetch";

export default function usePlayers(team) {
  console.log(useFetch("/players", "POST", JSON.stringify({ team })))

  let teamObject = {
    "response": [
        {
            "name": "Anthony Morales",
            "position": "Forward/Center",
            "teamId": "bulls",
            "number": 33,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis",
            "rpg": 3,
            "spg": 4,
            "apg": 8,
            "ppg": 12,
            "id": "anthony-morales"
        },
        {
            "name": "Johnny Ramirez",
            "position": "Forward/Center",
            "teamId": "bulls",
            "number": 15,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/benadam11",
            "rpg": 5,
            "spg": 2,
            "apg": 4,
            "ppg": 15,
            "id": "johnny-ramirez"
        },
        {
            "name": "Jon Galvorian",
            "position": "Guard",
            "teamId": "bulls",
            "number": 1,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/vlh",
            "rpg": 6,
            "spg": 2,
            "apg": 3,
            "ppg": 13,
            "id": "jon-galvaorian"
        },
        {
            "name": "Kevin Nguyen",
            "position": "Guard",
            "teamId": "bulls",
            "number": 99,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/dan_abramov",
            "rpg": 8,
            "spg": 1,
            "apg": 2,
            "ppg": 10,
            "id": "kevin-nguyen"
        },
        {
            "name": "Matthew Mendoza",
            "position": "Guard",
            "teamId": "bulls",
            "number": 11,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/brindelle",
            "rpg": 10,
            "spg": 1,
            "apg": 1,
            "ppg": 10,
            "id": "matthew-mendoza"
        },
        {
            "name": "Michael Mendoza",
            "position": "Forward",
            "teamId": "foxes",
            "number": 10,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993",
            "rpg": 3,
            "spg": 4,
            "apg": 8,
            "ppg": 12,
            "id": "michael-mendoza"
        },
        {
            "name": "Parth Patel",
            "position": "Guard",
            "teamId": "foxes",
            "number": 13,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/floydophone",
            "rpg": 5,
            "spg": 2,
            "apg": 4,
            "ppg": 15,
            "id": "parth-patel"
        },
        {
            "name": "Ryan Tang",
            "position": "Guard",
            "teamId": "foxes",
            "number": 21,
            "avatar": "https://res.cloudinary.com/uidotdev/image/twitter_name/sarah_edo",
            "rpg": 6,
            "spg": 2,
            "apg": 3,
            "ppg": 13,
            "id": "ryan-tang"
        },
    ],
    "loading": false
}

  console.log(teamObject);


  return teamObject;
}
