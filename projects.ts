import slideCard from "./public/slide/productCard.gif";
import shockerCard from "./public/shocker/productCard.gif";
import dishCard from "./public/dish/productCard.gif";
import tubeCard from "./public/tube/productCard.gif";

const projects = [
  {
    name: {
      ru: "Направляющая",
      en: "slide",
    },
    cardImage: slideCard,
    cardRatio: 2.12,
    tabs: {
      Изделие: [],
      "Пресс-форма": [],
      Фото: [],
    },
  },
  {
    name: {
      ru: "Электрошокер",
      en: "shocker",
    },
    cardImage: shockerCard,
    cardRatio: 2.1,
    tabs: {
      Изделие: [],
      "Пресс-форма": [],
      Электроды: [],
    },
  },
  {
    name: {
      ru: "Поилка",
      en: "dish",
    },
    cardImage: dishCard,
    cardRatio: 2,
    tabs: {
      Изделие: [],
      "Пресс-форма": [],
      Электроды: [],
    },
  },
  {
    name: {
      ru: "Туба",
      en: "tube",
    },
    cardImage: tubeCard,
    cardRatio: 2.5,
    tabs: {
      Изделие: [],
      "Пресс-форма": [],
      Электроды: [],
    },
  },
];

export default projects;

// helper functions

// function getPic(isDarkMode: boolean, lightPic: string, darkPic?: string) {

//   return isDarkMode && darkPic ? darkPic : lightPic
// }
