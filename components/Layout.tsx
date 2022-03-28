import AppbarMold from "./AppbarMold";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Layout(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppbarMold />

      <div className={styles.container}>
        <main className={styles.main}>{props.children}</main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
}
