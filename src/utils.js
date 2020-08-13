export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateContent = (content) => {
  const randomIndex = getRandomInteger(0, content.length - 1);

  return content[randomIndex];
};
