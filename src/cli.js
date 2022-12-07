/* eslint-disable fp/no-rest-parameters */
import readlineSync from 'readline-sync';

export const ask = (...arg) => readlineSync.question(...arg);
export const say = (...arg) => console.log(...arg);
