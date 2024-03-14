// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRandomArrayItem = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export default getRandomArrayItem;
