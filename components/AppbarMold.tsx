import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

import NavButton from "./NavButton";

export default function AppbarMold() {
  return (
    <AppBar
      position="static"
      color="transparent"
      style={{ flexDirection: "row", justifyContent: "center" }}
    >
      <Toolbar style={{ justifyContent: "center" }}>
        <NavButton href="/" label="Главная" />
        <NavButton href="/projects" label="Проекты" />
        <NavButton href="/contacts" label="Контакты" />
      </Toolbar>

      <Link href="https://github.com/ViktorBachmanov/next-mold" passHref>
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </Link>
    </AppBar>
  );
}
