import React from "react";

import { useRouter } from "next/router";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Image from "next/image";

import styles from "../styles/ProjectCard.module.css";

interface Props {
  project: any;
}

export default function ProjectCard(props: Props) {
  const { project } = props;

  const router = useRouter();

  const href = `projects/${project.name.en}`;

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Card className={styles.card}>
      <CardActionArea
        className={styles.cardActionArea}
        href={href}
        onClick={handleClick}
      >
        <CardContent className={styles.cardContent}>
          <Typography className={styles.cardTitle}>
            {project.name.ru}
          </Typography>
          <div className={styles.imageWrapper}>
            <Image src={project.cardImage} alt={project.name.ru} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
