import {generateContent} from "../utils.js";
import {EMOJI_SRC} from "../const.js";

const commentsText = [
  `Хорошее кино`,
  `Фиговое кино`,
  `Ничего не понимаю, но очень интересно!`
];

const emoji = [
  `angry.png`,
  `puke.png`,
  `sleeping.png`,
  `smile.png`
];

const authors = [
  `Walter White`,
  `Soul Goodman`,
  `Jessi Pinkman`,
  `Antony Soprano`,
  `Christopher Moltisanti`,
];

export const generateComment = () => {
  return {
    author: generateContent(authors),
    emoji: EMOJI_SRC + generateContent(emoji),
    commentText: generateContent(commentsText),
    date: `Вчера`,
  };
};
