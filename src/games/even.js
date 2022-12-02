import readlineSync from 'readline-sync';
import getRandomInt from '../utils.js';
import greet from '../cli.js';

const getChallenge = () => {
  const question = getRandomInt(100);
  const answer = (question % 2) === 0 ? 'yes' : 'no';
  return [question, answer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundsCount = 3;

const play = () => {
  const userName = greet();

  console.log(gameDescription);

  let isWinner = true;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = getChallenge();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      isWinner = false;
      break;
    }
  }

  if (isWinner) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default play;
