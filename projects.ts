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
import tubeProduct from "./public/tube/product.jpg";
import tubeProductDrw from "./public/tube/product_drw.jpg";
import tubePf from "./public/tube/pf.jpg";
import tubePfDrw1 from "./public/tube/sb-1.jpg";
import tubePfDrw2 from "./public/tube/sb-2.jpg";
import tubePhoto from "./public/tube/IMG00032.jpg";

import gearCard from "./public/gear/productCard.jpg";
import gearProduct from "./public/gear/product.jpg";
import gearProductDrw from "./public/gear/product_drw.jpg";
import gearPf from "./public/gear/pf.jpg";
import gearSb1 from "./public/gear/sb_1.jpg";
import gearSb2 from "./public/gear/sb_2.jpg";

import sleeveCard from "./public/sleeve/productCard.jpg";
import sleeveProduct from "./public/sleeve/product.jpg";
import sleeveProductDrw from "./public/sleeve/product_drw.jpg";
import sleeveFlow from "./public/sleeve/plastic_flow1.gif";
import sleevePf from "./public/sleeve/pf.jpg";
import sleeveSb1 from "./public/sleeve/sb_1.jpg";
import sleeveSb2 from "./public/sleeve/sb_2.jpg";

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
    tabs: [
      {
        label: "Изделие",
        images: [
          pic(tubeProduct, "Изделие"),
          pic(tubeProductDrw, "Эскиз изделия"),
        ],
      },
      {
        label: "Пресс-форма",
        images: [
          pic(tubePf, "Пресс-форма"),
          pic(tubePfDrw1, "Сборочный чертеж 1"),
          pic(tubePfDrw2, "Сборочный чертеж 2"),
        ],
      },
      { label: "Фото", images: [pic(tubePhoto, "Фото")] },
    ],
  },
  {
    name: {
      ru: "Колесо зубчатое",
      en: "gear",
    },
    cardImage: gearCard,
    tabs: [
      {
        label: "Изделие",
        images: [
          pic(gearProduct, "Изделие"),
          pic(gearProductDrw, "Эскиз изделия"),
        ],
      },
      {
        label: "Пресс-форма",
        images: [
          pic(gearPf, "Пресс-форма"),
          pic(gearSb1, "Сборочный чертеж 1"),
          pic(gearSb2, "Сборочный чертеж 2"),
        ],
      },
    ],
  },
  {
    name: {
      ru: "Муфта",
      en: "sleeve",
    },
    cardImage: sleeveCard,
    tabs: [
      {
        label: "Изделие",
        images: [
          pic(sleeveProduct, "Изделие"),
          pic(sleeveProductDrw, "Эскиз изделия"),
          pic(sleeveFlow, "Анализ литья"),
        ],
      },
      {
        label: "Пресс-форма",
        images: [
          pic(sleevePf, "Пресс-форма"),
          pic(sleeveSb1, "Сборочный чертеж 1"),
          pic(sleeveSb2, "Сборочный чертеж 2"),
        ],
      },
    ],
  },
];

export default projects;

// helper functions

// function getPic(isDarkMode: boolean, lightPic: string, darkPic?: string) {

//   return isDarkMode && darkPic ? darkPic : lightPic
// }
