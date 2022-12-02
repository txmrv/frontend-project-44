import greet, { ask, say } from './cli.js';

const startGameLoop = (getChallenge, roundsCount = 3) => {
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = getChallenge();

    say(`Question: ${question}`);

    const userAnswer = ask('Your answer: ');

    if (userAnswer !== answer) {
      say(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return false;
    }

    say('Correct!');
  }

  return true;
};

const play = (game) => {
  const [description, getChallenge] = game;

  const userName = greet();

  say(description);

  const isWinner = startGameLoop(getChallenge);

  const goodbye = isWinner ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;

  say(goodbye);
};

export default play;
