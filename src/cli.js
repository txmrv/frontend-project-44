import readlineSync from 'readline-sync';

export const ask = (...args) => readlineSync.question(...args);
export const say = (...args) => console.log(...args);
