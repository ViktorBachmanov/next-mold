import React from "react";

import Link from "next/link";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Image from "next/image";

interface Props {
  project: any;
}

export default function ProjectCard(props: Props) {
  const { project } = props;

  return (
    <Card>
      <Link href={`projects/${project.name.en}`} passHref>
        <CardActionArea>
          <CardContent>
            <Typography>{project.name.ru}</Typography>
            <Image src={project.cardImage} />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
