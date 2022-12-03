export const getRandomInt = (max = 1) => {
  const int = Math.round(Math.random() * max);
  return int;
};

export const getRandomIntBetween = (min = 0, max = 1) => {
  const int = Math.round(Math.random() * (max - min) + min);
  return int;
};
