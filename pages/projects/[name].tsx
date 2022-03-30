import React, { useState } from "react";
import type { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

//import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import projects from "../../projects";
import { typography } from "@mui/system";

import styles from "../../styles/Home.module.css";

const Projects = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { name } = router.query;

  // console.log("projects: ", projects);
  // console.log("name = router.query: ", name);
  //const project = projects.find((project) => project.name.en === name)!;

  const [value, setValue] = useState("Изделие");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let tabs: Array<any> = [];
  let tabPanels: Array<any> = [];
  project.tabs.forEach((tab) => {
    const typographyLabel = (
      <Typography variant="button">{tab.label}</Typography>
    );
    tabs.push(
      <Tab label={typographyLabel} value={tab.label} key={tab.label}></Tab>
    );
    tabPanels.push(
      <TabPanel
        value={tab.label}
        key={tab.label}
        style={{ textAlign: "center", padding: "2rem 0" }}
      >
        {tab.images.map((image, index) => (
          <Card key={index} style={{ margin: "1em 0" }} square={true}>
            <CardContent>
              <Image
                src={image.data}
                priority={index === 0 ? true : false}
                alt={image.desc}
                loading="eager"
              />
            </CardContent>
          </Card>
        ))}
      </TabPanel>
    );
  });

  return (
    <>
      <Head>
        <title>{`Пресс-форма "${project!.name.ru}"`}</title>
        <meta
          name="description"
          content={`Пресс-форма "${project!.name.ru}"`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography
        variant="h5"
        component="h1"
        align="center"
        style={{ marginBottom: "1rem" }}
      >
        {project!.name.ru}
      </Typography>

      <Box>
        <TabContext value={value}>
          <TabList onChange={handleChange} centered={true}>
            {tabs}
          </TabList>
          {tabPanels}
        </TabContext>
      </Box>
    </>
  );
};

export default Projects;

export async function getStaticProps(context: any) {
  const { name } = context.params;
  const project = projects.find((project) => project.name.en === name)!;

  return {
    props: { project }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "slide" } },
      { params: { name: "shocker" } },
      { params: { name: "dish" } },
      { params: { name: "tube" } },
    ],
    fallback: false,
  };
}
