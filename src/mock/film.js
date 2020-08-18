import {getRandomInteger} from "../utils.js";
import {generateContent} from "../utils.js";
import {POSTER_SRC} from "../const.js";
import {EARLY_YEAR, LATE_YEAR} from "../const.js";

const filmTitle = [
  `Во все тяжкие`,
  `Лучше звоните Солу`,
  `Семья Сопрано`,
  `Мылодрама`,
  `Любой ценой`,
  `Братья из Гримсби`
];

const filmPoster = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
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

const names = [
  `Aaron Paul`,
  `Bryan Cranston`,
  `Bob Odenkirk`,
  `Deborah Seehorn`,
  `Raymond Cruz`,
  `Jonathan Banks`,
  `Michael Mando`,
  `Giancarlo Esposito`,
  `Mark Margolis`
];

const countrys = [
  `America`,
  `Wacanda`,
  `Hogsmit`,
  `Russia`,
  `Australia`,
  `Japan`,
  `China`,
  `Konoha`,
  `Surgut`
];

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

const generateNames = (content) => {
  const randomIndex = getRandomInteger(1, 5);
  let namesArr = ``;

  for (let i = 1; i <= randomIndex; i++) {
    if (namesArr === ``) {
      namesArr += generateContent(content);
    } else {
      namesArr += `, ` + generateContent(content);
    }
  }
  return namesArr;
};

const generateGenres = (content) => {
  const randomIndex = getRandomInteger(1, 5);
  let namesArr = [];

  for (let i = 1; i <= randomIndex; i++) {
    namesArr.push(generateContent(content));
  }
  return namesArr;
};

export const generateFilm = () => {
  return {
    title: generateContent(filmTitle),
    poster: POSTER_SRC + generateContent(filmPoster),
    description: generateDescription(filmDescription),
    year: getRandomInteger(EARLY_YEAR, LATE_YEAR),
    duration: generateDuration(),
    genre: generateGenres(filmGenre),
    rating: generateRating(),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
    isHistory: Boolean(getRandomInteger(0, 1)),
    isFavorites: Boolean(getRandomInteger(0, 1)),
    director: generateNames(names),
    writers: generateNames(names),
    actors: generateNames(names),
    country: generateNames(countrys),
  };
};
