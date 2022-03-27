import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import Grid from "@mui/material/Grid";

import ProjectCard from "../../components/ProjectCard";
import projects from "../../projects";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container>
        {projects.map((project) => (
          <Grid item key={project.name.en}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
