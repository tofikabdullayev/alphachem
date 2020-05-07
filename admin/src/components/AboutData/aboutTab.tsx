import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { About } from '../../store/interfaces';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`about-tabpanel-${index}`}
      aria-labelledby={`about-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `about-tab-${index}`,
    'aria-controls': `about-tabpanel-${index}`,
  };
}

export interface AboutTabProps {
  data: About;
}

const AboutTab: React.FC<AboutTabProps> = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="about tabs example"
        >
          <Tab label="Az" {...a11yProps(0)} />
          <Tab label="En" {...a11yProps(1)} />
          <Tab label="Ru" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField
          label="About block title [AZ]"
          value={data.title.az}
          fullWidth
          onChange={(e) => console.log(e)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          //   className={classes.fullTextFields}
        />
        <TextField
          label="About block description [AZ]"
          value={data.description.az}
          fullWidth
          onChange={(e) => console.log(e)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          multiline
          //   className={classes.fullTextFields}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField
          label="About block title [AZ]"
          value={data.title.en}
          fullWidth
          onChange={(e) => console.log(e)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          //   className={classes.fullTextFields}
        />
        <TextField
          label="About block title [AZ]"
          value={data.description.en}
          fullWidth
          onChange={(e) => console.log(e)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          multiline
          //   className={classes.fullTextFields}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField
          label="About block title [AZ]"
          value={data.title.ru}
          fullWidth
          onChange={(e) => console.log(e)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          //   className={classes.fullTextFields}
        />
        <TextField
          label="About block title [AZ]"
          value={data.description.ru}
          fullWidth
          onChange={(e) => console.log(e)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          //   className={classes.fullTextFields}
          multiline
        />
      </TabPanel>
    </div>
  );
};

export default AboutTab;
