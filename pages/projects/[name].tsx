import React, { useState } from "react";
import { useRouter } from "next/router";

//import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import projects from "../../projects";
import { typography } from "@mui/system";

export default function Project() {
  const router = useRouter();
  const { name } = router.query;

  const project = projects.find((project) => project.name.en === name);

  const [value, setValue] = useState("Изделие");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let tabs = [];
  let tabPanels = [];
  for (const tabLabel in project?.tabs) {
    const typographyLabel = (
      <Typography variant="button">{tabLabel}</Typography>
    );
    tabs.push(
      <Tab label={typographyLabel} value={tabLabel} key={tabLabel}></Tab>
    );
    tabPanels.push(
      <TabPanel value={tabLabel} key={tabLabel}>
        {tabLabel}
      </TabPanel>
    );
  }

  return (
    <Box>
      <TabContext value={value}>
        <TabList onChange={handleChange} centered={true}>
          {tabs}
        </TabList>
        {tabPanels}
      </TabContext>
    </Box>
  );
}
