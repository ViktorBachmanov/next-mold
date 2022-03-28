import slideCard from "./public/slide/productCard.gif";
import slideProduct from "./public/slide/product_light.gif";
import slideProductDrw from "./public/slide/product_drw_light.gif";
import slidePf from "./public/slide/press_forma.gif";
import slidePfDrw from "./public/slide/sb_drw_light_tr.gif";
import slidePfPhoto from "./public/slide/IMG00084.jpg";

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
    tabs: [
      { label: "Изделие", images: [slideProduct, slideProductDrw] },
      { label: "Пресс-форма", images: [slidePf, slidePfDrw] },
      { label: "Фото", images: [slidePfPhoto] },
    ],
  },
  {
    name: {
      ru: "Электрошокер",
      en: "shocker",
    },
    cardImage: shockerCard,
    cardRatio: 2.1,
    tabs: [
      { label: "Изделие", images: [slideProduct, slideProductDrw] },
      { label: "Пресс-форма", images: [slidePf, slidePfDrw] },
      { label: "Фото", images: [slidePfPhoto] },
    ],
  },
  {
    name: {
      ru: "Поилка",
      en: "dish",
    },
    cardImage: dishCard,
    cardRatio: 2,
    tabs: [
      { label: "Изделие", images: [slideProduct, slideProductDrw] },
      { label: "Пресс-форма", images: [slidePf, slidePfDrw] },
      { label: "Фото", images: [slidePfPhoto] },
    ],
  },
  {
    name: {
      ru: "Туба",
      en: "tube",
    },
    cardImage: tubeCard,
    cardRatio: 2.5,
    tabs: [
      { label: "Изделие", images: [slideProduct, slideProductDrw] },
      { label: "Пресс-форма", images: [slidePf, slidePfDrw] },
      { label: "Фото", images: [slidePfPhoto] },
    ],
  },
];

export default projects;

// helper functions

// function getPic(isDarkMode: boolean, lightPic: string, darkPic?: string) {

//   return isDarkMode && darkPic ? darkPic : lightPic
// }
