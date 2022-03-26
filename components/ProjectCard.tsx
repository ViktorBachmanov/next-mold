import React from "react";

import Card from "@mui/material/Card";
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
      <CardContent>
        <Typography>{project.name.ru}</Typography>
        <Image src={project.cardImage} />
      </CardContent>
    </Card>
  );
}
