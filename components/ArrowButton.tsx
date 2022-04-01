import React from "react";

import Link from "next/link";

import IconButton from "@mui/material/IconButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  type: "left" | "right";
  projectIndex: number;
  projects: Array<any>;
}

function ArrowButton(props: Props) {
  const { type, projectIndex, projects } = props;

  let icon;
  let disabled: boolean;
  let href: string;
  let title = "";

  switch (type) {
    case "left":
      icon = <ArrowLeftIcon />;
      if (projectIndex === 0) {
        disabled = true;
        href = "/";
      } else {
        disabled = false;
        href = `/projects/${projects[projectIndex - 1].name.en}`;
        title = projects[projectIndex - 1].name.ru;
      }
      break;

    case "right":
      icon = <ArrowRightIcon />;
      if (projectIndex === projects.length - 1) {
        disabled = true;
        href = "/";
      } else {
        disabled = false;
        href = `/projects/${projects[projectIndex + 1].name.en}`;
        title = projects[projectIndex + 1].name.ru;
      }
      break;
  }

  return (
    <Tooltip title={title} placement={type}>
      <Link href={href} passHref>
        <IconButton size="large" disabled={disabled}>
          {icon}
        </IconButton>
      </Link>
    </Tooltip>
  );
}

export default ArrowButton;
