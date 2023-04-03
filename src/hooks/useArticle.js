import useFetch from "./useFetch";

export default function useArticle(args) {
  console.log(useFetch("/article", "POST", JSON.stringify(args)))


  let articleObject = {
    "response": {
        "title": "Brick City Lives Up To Their Name in Preseason Loss",
        "body": `
        Brick City opened up its inaugural game with a 49-36 loss to the Big Boyz. Brick City failed to score in the fourth quarter after only trailing by 4 heading into the final 10 minutes of the contest. 

        Brick City relied on the three ball, with the majority of their points coming from long balls from Johnny Ramirez, Kevin Nguyen, and Matthew Mendoza. Mendoza had a team-high 15 points, followed by 11 from Nguyen, and Ramirez added nine on three long balls. 

        After trailing in the first quarter, Brick City switched to a 2-3 zone and quickly took the lead after the Big Boyz inability to shoot the deep ball. After having all the momentum after leading at halftime, the Big Boyz  retook the lead and never looked back. 

        Despite the loss, Brick City took some positives from the contest, “we stayed in the game but just couldn’t get shots to fall in the 4th quarter,” said team captain Nguyen. "I expect us to play much better with a full squad and a few more practices before the regular season begins” Nguyen said.

        Brick City will have a full roster once they make their season debut on April 11th at Grijalva Park Sports Center in Orange.

        `,
    },
    "loading": false
}

  return articleObject;

  return useFetch("/article", "POST", JSON.stringify(args));
}
