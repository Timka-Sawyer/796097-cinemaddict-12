import {createSiteHeaderTemplate} from "./view/site-header.js";
import {createMainNavigationTemplate} from "./view/main-navigation.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsTemplate} from "./view/films.js";
import {createButtonShowMore} from "./view/button-show-more.js";
import {createFilmCartTemplate} from "./view/film-cart.js";
import {createFooterStatistics} from "./view/footer-statistics.js";
import {generateFilm} from "./mock/film.js";
import {createDetailPopup} from "./view/popup.js";
import {FILMS_COUNT, FILM_COUNT_PER_STEP} from "./const.js";


const films = new Array(FILMS_COUNT).fill().map(generateFilm);

const render = (conteiner, template, place) => {
  conteiner.insertAdjacentHTML(place, template);
};

const renderFilmCarts = function () {
  for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
    render(filmsConteinerElement, createFilmCartTemplate(films[i]), `beforeend`);
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

const siteFooterElement = document.querySelector(`.footer`);
const footerStatistics = siteFooterElement.querySelector(`.footer__statistics`);

render(footerStatistics, createFooterStatistics(FILMS_COUNT), `beforeend`);

render(siteMainElement, createDetailPopup(films[0]), `beforeend`);


const openPopup = document.querySelector(`.film-card__title`);
const details = document.querySelector(`.film-details`);
const buttonClosePopup = details.querySelector(`.film-details__close-btn`);

const openPopupDetails = function () {
  details.classList.remove(`visually-hidden`);
  buttonClosePopup.addEventListener(`click`, closePopupDetails);
};

const closePopupDetails = function () {
  details.classList.add(`visually-hidden`);
  buttonClosePopup.removeEventListener(`click`, closePopupDetails);
};

details.classList.add(`visually-hidden`);
openPopup.addEventListener(`click`, openPopupDetails);
