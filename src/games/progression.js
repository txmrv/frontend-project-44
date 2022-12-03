import { getRandomInt, getRandomIntBetween } from '../utils.js';

const description = 'What number is missing in the progression?';

const hideProgressionElem = (progression, idx) => {
  const progressionCopy = progression.concat();
  progressionCopy[idx] = '..';
  return progressionCopy;
};

const buildProgression = (size) => {
  const progression = [];

  const minStep = 1;
  const maxStep = 10;
  const step = getRandomIntBetween(minStep, maxStep);

  const maxNumber = 100;
  const begin = getRandomInt(maxNumber - step * (size - 1));

  for (let i = 0; i < size; i += 1) {
    const elem = begin + (step * i);
    progression.push(elem);
  }

  return progression;
};

const getChallenge = () => {
  const progressionSize = 10;
  const progression = buildProgression(progressionSize);

  const randomIdx = getRandomInt(progressionSize - 1);
  const blurredProgression = hideProgressionElem(progression, randomIdx);

  const question = blurredProgression.join(' ');
  const answer = `${progression[randomIdx]}`;

  return [question, answer];
};

export default [description, getChallenge];
