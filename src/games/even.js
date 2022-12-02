import getRandomInt from '../utils.js';

const getChallenge = () => {
  const maxNumber = 100;
  const question = getRandomInt(maxNumber);

  const answer = (question % 2) === 0 ? 'yes' : 'no';

  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default [description, getChallenge];
