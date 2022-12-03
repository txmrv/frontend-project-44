export const getRandomInt = (max = 1) => {
  const int = Math.round(Math.random() * max);
  return int;
};

export default getRandomInt;
