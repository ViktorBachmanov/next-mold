import React, { useState, useEffect } from "react";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import ArrowButton from "../../components/ArrowButton";

import projects from "../../projects";

const Projects = ({
  project,
  projectIndex,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [value, setValue] = useState("Изделие");

  const isTabExist = React.useMemo(
    () => project.tabs.find((tab) => tab.label === value),
    [project, value]
  );

  useEffect(() => {
    if (!isTabExist) {
      setValue("Изделие");
    }
  }, [isTabExist]);

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
            <CardContent style={{ padding: "0.5em 0.5em" }}>
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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content={`Пресс-форма "${project!.name.ru}"`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex", alignItems: "center" }}>
        <ArrowButton
          type="left"
          projectIndex={projectIndex}
          projects={projects}
        />

        <Typography variant="h5" component="h1" align="center">
          {project!.name.ru}
        </Typography>

        <ArrowButton
          type="right"
          projectIndex={projectIndex}
          projects={projects}
        />
      </div>

      <Box style={{ marginTop: "1rem" }}>
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
  const projectIndex = projects.findIndex(
    (project) => project.name.en === name
  )!;

  //const project = projects.find((project) => project.name.en === name)!;
  const project = projects[projectIndex];

  return {
    props: { project, projectIndex, projects }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "slide" } },
      { params: { name: "shocker" } },
      { params: { name: "dish" } },
      { params: { name: "tube" } },
      { params: { name: "gear" } },
      { params: { name: "sleeve" } },
    ],
    fallback: false,
  };
}
