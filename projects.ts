import slideCard from "./public/slide/productCard.gif";
import slideProduct from "./public/slide/product.png";
import slideProductDrw from "./public/slide/product_drw.jpg";
import slidePf from "./public/slide/press_forma.jpg";
import slidePfDrw from "./public/slide/sb_drw_light_tr.gif";
import slidePfPhoto from "./public/slide/IMG00086.jpg";

import shockerCard from "./public/shocker/productCard.gif";
import shockerProduct from "./public/shocker/product.jpg";
import shockerProductDrw from "./public/shocker/product_drw.jpg";
import shockerPf from "./public/shocker/press_forma.jpg";
import shockerPfDrw1 from "./public/shocker/sb-1.jpg";
import shockerE_2 from "./public/shocker/e-2.jpg";

import dishCard from "./public/dish/productCard.gif";
import dishProduct from "./public/dish/product.jpg";
import dishProductDrw from "./public/dish/product_drw.jpg";
import dishFlow from "./public/dish/plastic_flow2.gif";
import dishPf from "./public/dish/press_forma.jpg";
import dishPfDrw from "./public/dish/sb_1.jpg";

import tubeCard from "./public/tube/productCard.gif";

//import StaticImageData from 'next/image'

function pic(data: any, desc: string) {
  return { data, desc };
}

const projects = [
  {
    name: {
      ru: "Направляющая",
      en: "slide",
    },
    cardImage: slideCard,
    cardRatio: 2.12,
    tabs: [
      //{ label: "Изделие", images: [[slideProduct, 'Изделие'], [slideProductDrw, 'Эскиз изделия']] },
      {
        label: "Изделие",
        images: [
          pic(slideProduct, "Изделие"),
          pic(slideProductDrw, "Эскиз изделия"),
        ],
      },
      {
        label: "Пресс-форма",
        images: [
          pic(slidePf, "Пресс-форма"),
          pic(slidePfDrw, "Сборочный чертеж"),
        ],
      },
      { label: "Фото", images: [pic(slidePfPhoto, "Фото")] },
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
      {
        label: "Изделие",
        images: [
          pic(shockerProduct, "Изделие"),
          pic(shockerProductDrw, "Эскиз изделия"),
        ],
      },
      {
        label: "Пресс-форма",
        images: [
          pic(shockerPf, "Пресс-форма"),
          pic(shockerPfDrw1, "Сборочный чертеж"),
        ],
      },
      { label: "Электроды", images: [pic(shockerE_2, "Электрод")] },
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
      {
        label: "Изделие",
        images: [
          pic(dishProduct, "Изделие"),
          pic(dishProductDrw, "Эскиз изделия"),
        ],
      },
      { label: "Анализ", images: [pic(dishFlow, "Анализ литья")] },
      {
        label: "Пресс-форма",
        images: [
          pic(dishPf, "Пресс-форма"),
          pic(dishPfDrw, "Сборочный чертеж"),
        ],
      },
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
      {
        label: "Изделие",
        images: [
          pic(slideProduct, "Изделие"),
          pic(slideProductDrw, "Эскиз изделия"),
        ],
      },
      {
        label: "Пресс-форма",
        images: [
          pic(slidePf, "Пресс-форма"),
          pic(slidePfDrw, "Сборочный чертеж"),
        ],
      },
      { label: "Фото", images: [pic(slidePfPhoto, "Фото")] },
    ],
  },
];

export default projects;

// helper functions

// function getPic(isDarkMode: boolean, lightPic: string, darkPic?: string) {

//   return isDarkMode && darkPic ? darkPic : lightPic
// }
