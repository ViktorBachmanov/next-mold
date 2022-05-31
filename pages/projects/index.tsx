import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Grid from "@mui/material/Grid";

import ProjectCard from "../../components/ProjectCard";
import projects from "../../projects";

import styles from "../../styles/Home.module.css";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Примеры пресс-форм</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Примеры пресс-форм" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        spacing={2}
        style={{ justifyContent: "center" }}
        className={styles.container}
      >
        {projects.map((project) => (
          <Grid item key={project.name.en}>
            <Link href={`/projects/${project.name.en}`} passHref>
              <ProjectCard project={project} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
