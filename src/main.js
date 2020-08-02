import {createSiteHeaderTemplate} from "./view/site-header.js";
import {createMainNavigationTemplate} from "./view/main-navigation.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsTemplate} from "./view/films.js";
import {createButtonShowMore} from "./view/button-show-more.js";
import {createFilmCartTemplate} from "./view/film-cart.js";

const FILMS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;

const render = (conteiner, template, place) => {
  conteiner.insertAdjacentHTML(place, template);
};

const renderFilmCart = function (count) {
  for (let i = 0; i < count; i++) {
    render(filmsConteinerElement, createFilmCartTemplate(), `beforeend`);
  }
};

const renderExtraFilmCart = function (count) {
  for (let i = 0; i < count; i++) {
    render(extraFilmsConteinerElement, createFilmCartTemplate(), `beforeend`);
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

renderFilmCart(FILMS_COUNT);
render(filmsListElement, createButtonShowMore(), `beforeend`);

const extraFilmsElement = filmsElement.querySelector(`.films-list--extra`);
const extraFilmsConteinerElement = extraFilmsElement.querySelector(`.films-list__container`);

renderExtraFilmCart(EXTRA_FILMS_COUNT);
