import React from "react";

const quotes = [
  "Golf is deceptively simple and endlessly complicated; it satisfies the soul and frustrates the intellect. It is at the same time rewarding and maddening—and it is without a doubt the greatest game mankind has ever invented. - Arnold Palmer",
  "Golf is a game in which you yell 'fore,' shoot six, and write down five. - Paul Harvey",
  "Golf is a puzzle without an answer. I've played the game for 50 years, and I still haven't the slightest idea of how to play. - Gary Player",
  "Golf is the closest game to the game we call life. You get bad breaks from good shots; you get good breaks from bad shots, but you have to play the ball where it lies. - Bobby Jones",
  "Success in golf depends less on strength of body than upon strength of mind and character. - Arnold Palmer",
  "Golf is about how well you accept, respond to, and score with your misses much more than it is a game of your perfect shots. - Dr. Bob Rotella",
  "The most important shot in golf is the next one. - Ben Hogan",
  "Golf is the only game I know of that actually becomes harder the longer you play it. - Jack Nicklaus",
  "Golf is a game that is played on a five-inch course—the distance between your ears. - Bobby Jones",
  "The harder you practice, the luckier you get. - Gary Player",
];

function RandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return (
    <div>
      <p>{randomQuote}</p>
    </div>
  );
}

export default RandomQuote;
