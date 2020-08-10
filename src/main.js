import {createSiteHeaderTemplate} from "./view/site-header.js";
import {createMainNavigationTemplate} from "./view/main-navigation.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsTemplate} from "./view/films.js";
import {createButtonShowMore} from "./view/button-show-more.js";
import {createFilmCartTemplate} from "./view/film-cart.js";
import {createFooterStatistics} from "./view/footer-statistics.js";
import {generateFilm} from "./mock/film.js";

const FILMS_COUNT = 22;
const EXTRA_FILMS_COUNT = 2;
const FILM_COUNT_PER_STEP = 5;

const films = new Array(FILMS_COUNT).fill().map(generateFilm);

const render = (conteiner, template, place) => {
  conteiner.insertAdjacentHTML(place, template);
};

const renderFilmCarts = function () {
  for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
    render(filmsConteinerElement, createFilmCartTemplate(films[i]), `beforeend`);
  }
};

const renderExtraFilmCart = function (count) {
  for (let i = 0; i < count; i++) {
    const film = generateFilm();
    render(extraFilmsConteinerElement, createFilmCartTemplate(film), `beforeend`);
  }
};

const siteHeaderElement = document.querySelector(`.header`);

render(siteHeaderElement, createSiteHeaderTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);

render(siteMainElement, createMainNavigationTemplate(), `beforeend`);

render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmsTemplate(), `beforeend`);

const filmsElement = siteMainElement.querySelector(`.films`);
const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsConteinerElement = filmsListElement.querySelector(`.films-list__container`);

renderFilmCarts();

const getNextFilms = (evt, renderedTaskCount, loadMoreButton) => {
  evt.preventDefault();
  films.slice(renderedTaskCount, renderedTaskCount + FILM_COUNT_PER_STEP)
    .forEach((film) => render(filmsConteinerElement, createFilmCartTemplate(film), `beforeend`));

  renderedTaskCount += FILM_COUNT_PER_STEP;

  if (renderedTaskCount >= films.length) {
    loadMoreButton.remove();
  }
  return renderedTaskCount;
};

if (films.length > FILM_COUNT_PER_STEP) {
  let renderedFilmCount = FILM_COUNT_PER_STEP;

  render(filmsListElement, createButtonShowMore(), `beforeend`);

  const loadMoreButton = filmsElement.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    renderedFilmCount = getNextFilms(evt, renderedFilmCount, loadMoreButton);
  });
}

const extraFilmsElement = filmsElement.querySelector(`.films-list--extra`);
const extraFilmsConteinerElement = extraFilmsElement.querySelector(`.films-list__container`);

renderExtraFilmCart(EXTRA_FILMS_COUNT);

const siteFooterElement = document.querySelector(`.footer`);
const footerStatistics = siteFooterElement.querySelector(`.footer__statistics`);

render(footerStatistics, createFooterStatistics(FILMS_COUNT), `beforeend`);
