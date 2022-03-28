import React, { useState } from "react";
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

import projects from "../../projects";
import { typography } from "@mui/system";

export default function Project() {
  const router = useRouter();
  const { name } = router.query;

  const project = projects.find((project) => project.name.en === name)!;

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
      <TabPanel value={tab.label} key={tab.label}>
        {tab.images.map((image, index) => (
          <Image src={image} key={index} />
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
}
