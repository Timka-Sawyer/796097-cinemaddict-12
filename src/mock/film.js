import {getRandomInteger} from "../utils.js";

const filmTitle = [
  `Во все тяжкие`,
  `Лучше звоните Солу`,
  `Семья Сопрано`,
  `Мылодрама`,
  `Любой ценой`,
  `Братья из Гримсби`
];

const filmPoster = [
  `./images/posters/made-for-each-other.png`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
];

const filmDescription = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const filmGenre = [
  `Crime`,
  `Horror`,
  `Fantasy`,
  `Cartoon`
];

const generateContent = (content) => {
  const randomIndex = getRandomInteger(0, content.length - 1);

  return content[randomIndex];
};

const generateDuration = () => {
  return getRandomInteger(1, 4) + `h` + ` ` + getRandomInteger(1, 59) + `m`;
};

const generateRating = () => {
  return getRandomInteger(0, 9) + `.` + getRandomInteger(0, 9);
};

const generateDescription = (content) => {
  const randomIndex = getRandomInteger(1, 5);
  let descriptions = ``;

  for (let i = 1; i <= randomIndex; i++) {
    descriptions += ` ` + generateContent(content);
  }
  return descriptions;
};

export const generateFilm = () => {
  return {
    title: generateContent(filmTitle),
    poster: generateContent(filmPoster),
    description: generateDescription(filmDescription),
    commentsCount: getRandomInteger(0, 5),
    year: getRandomInteger(1920, 2020),
    duration: generateDuration(),
    genre: generateContent(filmGenre),
    rating: generateRating(),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
    isHistory: Boolean(getRandomInteger(0, 1)),
    isFavorites: Boolean(getRandomInteger(0, 1)),
  };
};
