import type { NextPage } from "next";
import Head from "next/head";
import Typography from "@mui/material/Typography";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Контакты" />
        <title>Контакты</title>
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
