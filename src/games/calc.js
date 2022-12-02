import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const getChallenge = () => {
  const operationsCount = operations.length;
  const randomIdx = getRandomInt(operationsCount - 1);
  const [operationSign, calcOperation] = operations[randomIdx];

  const maxNumber = 100;
  const a = getRandomInt(maxNumber);
  const b = getRandomInt(maxNumber);

  const question = `${a} ${operationSign} ${b}`;
  const answer = `${calcOperation(a, b)}`;

  return [question, answer];
};

export default [description, getChallenge];
