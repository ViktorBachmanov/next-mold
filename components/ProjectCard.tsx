import React from "react";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Image from "next/image";

import styles from "../styles/ProjectCard.module.css";

// interface Props {
//   project: any;
//   href: string;
//   onClick: any;
// }

const ProjectCard = React.forwardRef<any, any>(function ProjectCard(
  props,
  ref
) {
  const { project, href, onClick } = props;

  return (
    <Card className={styles.card}>
      <CardActionArea
        className={styles.cardActionArea}
        href={href}
        ref={ref}
        onClick={onClick}
      >
        <CardContent className={styles.cardContent}>
          <Typography className={styles.cardTitle} variant="h6">
            {project.name.ru}
          </Typography>
          <div className={styles.imageWrapper}>
            <Image src={project.cardImage} alt={project.name.ru} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export default ProjectCard;
