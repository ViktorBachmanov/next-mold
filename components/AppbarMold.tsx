import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import NavButton from "./NavButton";

export default function AppbarMold() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar style={{ justifyContent: "center" }}>
        <NavButton href="/" label="Главная" />
        <NavButton href="/projects" label="Проекты" />
        <NavButton href="/contacts" label="Контакты" />
      </Toolbar>
    </AppBar>
  );
}
