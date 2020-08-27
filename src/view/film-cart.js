import {getGenresString} from "../utils.js";
import {COMMENTS_COUNT} from "../const.js";

export const createFilmCartTemplate = (film) => {
  const genres = getGenresString(film);
  return (
    `<article class="film-card">
      <h3 class="film-card__title">${film.title}</h3>
      <p class="film-card__rating">${film.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${film.year}</span>
        <span class="film-card__duration">${film.duration}</span>
        <span class="film-card__genre">${genres}</span>
      </p>
      <img src="${film.poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${film.description}</p>
      <a class="film-card__comments">${COMMENTS_COUNT} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${film.categories.watchlist ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${film.categories.watched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${film.categories.favorites ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
      </form>
    </article>`
  );
};
