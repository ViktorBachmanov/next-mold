import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function AppbarMold() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar style={{ justifyContent: "center" }}>
        <Link href="/" passHref>
          <Button variant="text" component="a">
            Главная
          </Button>
        </Link>
        <Link href="/projects" passHref>
          <Button variant="text" component="a">
            Проекты
          </Button>
        </Link>
        <Link href="/author" passHref>
          <Button variant="text" component="a">
            Автор
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
