import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Контакты</title>
        <meta name="description" content="Контакты" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h6" align="center" style={{ lineHeight: "200%" }}>
        Инженер-конструктор
        <br />
        Виктор Бачманов
        <br />
        vbachmanov@mail.ru
      </Typography>
    </>
  );
};

export default Contacts;
