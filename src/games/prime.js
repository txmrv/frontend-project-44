import { getRandomInt } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num % 2 === 0) {
    if (num === 2) {
      return true;
    }

    return false;
  }

  for (let i = 3; i < (num / 2); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getChallenge = () => {
  const maxNumber = 100;
  const question = getRandomInt(maxNumber);

  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default [description, getChallenge];
