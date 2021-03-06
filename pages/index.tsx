import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import corpusPhoto from "../public/corpus/IMG_1947.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="yandex-verification" content="f56aa98d8eeb568e" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Пресс-формы, литье пластмасс" />
        <title>Пресс-формы для литья пластмассовых изделий</title>
        <meta
          name="keywords"
          content="Пресс-формы, литье пластмасс, проектирование, дизайн, конструирование, инженер-конструктор"
        />
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
          Пресс-формы для литья пластмассовых изделий
        </Typography>

        <Typography
          align="center"
          variant="body1"
          style={{ margin: "1rem 0 2rem" }}
        >
          В разделе{" "}
          <Link href="/projects">
            <a style={{ color: "blue" }}>&quot;Проекты&quot;</a>
          </Link>{" "}
          представлены некоторые из реализованных пресс-форм
        </Typography>

        <Card>
          <CardContent>
            <Image src={corpusPhoto} alt="Фото" loading="eager" priority />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
