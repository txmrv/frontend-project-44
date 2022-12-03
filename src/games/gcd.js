import { getRandomInt } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  const greatest = a < b ? b : a;
  const smallest = a < b ? a : b;

  for (let i = 1; i <= (smallest / 2); i += 1) {
    const remainder = smallest % i;

    if (remainder === 0) {
      const divisor = smallest / i;
      const isCommonDivisor = greatest % divisor === 0;

      if (isCommonDivisor) {
        return divisor;
      }
    }
  }

  return 1;
};

const getChallenge = () => {
  const maxNumber = 100;
  const a = getRandomInt(maxNumber);
  const b = getRandomInt(maxNumber);

  const question = `${a} ${b}`;
  const answer = `${getGCD(a, b)}`;

  return [question, answer];
};

export default [description, getChallenge];
