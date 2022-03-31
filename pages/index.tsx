import type { NextPage } from "next";
import Image from "next/image";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";

import corpusPhoto from "../public/corpus/IMG_1947.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Пресс-формы для литья пласмассовых изделий</title>
        <meta name="description" content="Пресс-формы, литье пластмасс" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Typography align="center" variant="h6" style={{ color: "#1a237e" }}>
          Добро пожаловать на персональный сайт инженера-конструктора
        </Typography>

        <Typography
          align="center"
          variant="h4"
          variantMapping={{ h4: "h1" }}
          style={{ color: "#1a237e", margin: "2rem auto" }}
        >
          Пресс-формы для литья пласмассовых изделий
        </Typography>

        <Typography variant="body1" style={{ textIndent: "2em" }}>
          Здесь Вы можете заказать проектирование пресс-формы
          (холодноканальной), а также и самого изделия.
        </Typography>

        <Typography
          variant="body1"
          style={{ textIndent: "2em", margin: "1rem 0 2rem" }}
        >
          В разделе &quot;Проекты&quot; представлены некоторые из реализованных
          пресс-форм.
        </Typography>

        <Image src={corpusPhoto} />
      </div>
    </>
  );
};

export default Home;
