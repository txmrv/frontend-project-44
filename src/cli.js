import readlineSync from 'readline-sync';

const ask = readlineSync.question;
const say = console.log;

const greet = () => {
  say('Welcome to the Brain Games!');
  const name = ask('May I have your name? ');
  say(`Hello, ${name}!`);
  return name;
};

export { ask, say };

export default greet;
