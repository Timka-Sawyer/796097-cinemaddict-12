import SiteHeaderView from "./view/site-header.js";
import MainNavigationView from "./view/main-navigation.js";
import SortView from "./view/sort.js";
import FilmsView from "./view/films.js";
import ButtonShowMoreView from "./view/button-show-more.js";
import FilmCardView from "./view/film-card.js";
import FooterStatisticsView from "./view/footer-statistics.js";
import {generateFilm} from "./mock/film.js";
import FilmDetailsView from "./view/film-details.js";
import {FILMS_COUNT, FILM_COUNT_PER_STEP} from "./const.js";
import {render, RenderPosition} from "./utils.js";


const films = new Array(FILMS_COUNT).fill().map(generateFilm);

const renderFilmCard = (filmsContainer, film) => {
  const filmCardComponent = new FilmCardView(film);

  render(filmsContainer, filmCardComponent.getElement(), RenderPosition.BEFOREEND);

  const onFilmCardClick = () => {
    const filmDetails = new FilmDetailsView(film);

    render(siteMainElement, filmDetails.getElement(), RenderPosition.BEFOREEND);

    const buttonClosePopup = filmDetails.getElement().querySelector(`.film-details__close-btn`);

    const closePopupDetails = function () {
      filmDetails.getElement().classList.add(`visually-hidden`);
      buttonClosePopup.removeEventListener(`click`, closePopupDetails);
      filmDetails.removeElement();
    };

    buttonClosePopup.addEventListener(`click`, closePopupDetails);
  };

  const filmTitle = filmCardComponent.getElement().querySelector(`.film-card__title`);
  const filmPoster = filmCardComponent.getElement().querySelector(`.film-card__poster`);
  const filmComments = filmCardComponent.getElement().querySelector(`.film-card__comments`);

  filmTitle.addEventListener(`click`, onFilmCardClick);
  filmPoster.addEventListener(`click`, onFilmCardClick);
  filmComments.addEventListener(`click`, onFilmCardClick);
};

const renderFilmCards = function () {
  for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
    renderFilmCard(filmsContainerElement, films[i]);
  }
};

const getNextFilms = (evt, renderedTaskCount, loadMoreButton) => {
  evt.preventDefault();
  films.slice(renderedTaskCount, renderedTaskCount + FILM_COUNT_PER_STEP)
    .forEach((film) => renderFilmCard(filmsContainerElement, film));

  renderedTaskCount += FILM_COUNT_PER_STEP;

  if (renderedTaskCount >= films.length) {
    loadMoreButton.remove();
  }
  return renderedTaskCount;
};

const siteHeaderElement = document.querySelector(`.header`);

render(siteHeaderElement, new SiteHeaderView().getElement(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);

render(siteMainElement, new MainNavigationView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SortView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilmsView().getElement(), RenderPosition.BEFOREEND);

const filmsElement = siteMainElement.querySelector(`.films`);
const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsContainerElement = filmsListElement.querySelector(`.films-list__container`);

renderFilmCards();

if (films.length > FILM_COUNT_PER_STEP) {
  let renderedFilmCount = FILM_COUNT_PER_STEP;

  render(filmsListElement, new ButtonShowMoreView().getElement(), RenderPosition.BEFOREEND);

  const loadMoreButton = filmsElement.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    renderedFilmCount = getNextFilms(evt, renderedFilmCount, loadMoreButton);
  });
}

const siteFooterElement = document.querySelector(`.footer`);
const footerStatistics = siteFooterElement.querySelector(`.footer__statistics`);

render(footerStatistics, new FooterStatisticsView(FILMS_COUNT).getElement(), RenderPosition.BEFOREEND);
