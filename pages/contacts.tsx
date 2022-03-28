import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";

const Contacts: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Контакты</title>
        <meta name="description" content="Контакты" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="body2">
        Виктор Бачманов, инженер-конструктор
      </Typography>
    </div>
  );
};

export default Contacts;
