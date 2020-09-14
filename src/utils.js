export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateContent = (content) => {
  const randomIndex = getRandomInteger(0, content.length - 1);

  return content[randomIndex];
};

export const getGenresString = (film) => {
  let genres = ``;
  for (let i = 0; i < film.genre.length; i++) {
    if (genres === ``) {
      genres += film.genre[i];
    } else {
      genres += `, ` + film.genre[i];
    }
  }
  return genres;
};

export const renderTemplate = (conteiner, template, place) => {
  conteiner.insertAdjacentHTML(place, template);
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};
