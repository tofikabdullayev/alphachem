import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { About } from '../../store/interfaces';

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    marginBottom: '20px',
  },
}));

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
      {value === index && <Box p={3}>{children}</Box>}
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
  const classes = useStyles();

  const [value, setValue] = useState<number>(0);
  const [azTitle, setAzTitle] = useState<string>('');
  const [azDescription, setAzDescription] = useState<string>('');
  const [enTitle, setEnTitle] = useState<string>('');
  const [enDescription, setEnDescription] = useState<string>('');
  const [ruTitle, setRuTitle] = useState<string>('');
  const [ruDescription, setRuDescription] = useState<string>('');

  useEffect(() => {
    setAzTitle(data.title.az);
    setAzDescription(data.description.az);
    setEnTitle(data.title.en);
    setEnDescription(data.description.en);
    setRuTitle(data.title.ru);
    setRuDescription(data.description.ru);
  }, [data]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ background: '#efefef' }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="about tabs example"
          style={{ background: 'rgb(0%,52.549744%,63.137817%)' }}
          TabIndicatorProps={{ style: { background: '#fff' } }}
        >
          <Tab label="Az" {...a11yProps(0)} />
          <Tab label="En" {...a11yProps(1)} />
          <Tab label="Ru" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField
          className={classes.textField}
          label="About block title [AZ]"
          value={azTitle}
          fullWidth
          onChange={(e) => setAzTitle(e.target.value)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          //   className={classes.fullTextFields}
        />
        <TextField
          className={classes.textField}
          label="About block description [AZ]"
          value={azDescription}
          fullWidth
          onChange={(e) => setAzDescription(e.target.value)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          multiline
          //   className={classes.fullTextFields}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField
          className={classes.textField}
          label="About block title [EN]"
          value={enTitle}
          fullWidth
          onChange={(e) => setEnTitle(e.target.value)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          //   className={classes.fullTextFields}
        />
        <TextField
          className={classes.textField}
          label="About block description [EN]"
          value={enDescription}
          fullWidth
          onChange={(e) => setEnDescription(e.target.value)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          multiline
          //   className={classes.fullTextFields}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField
          className={classes.textField}
          label="About block title [RU]"
          value={ruTitle}
          fullWidth
          onChange={(e) => setRuTitle(e.target.value)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          //   className={classes.fullTextFields}
        />
        <TextField
          className={classes.textField}
          label="About block description [RU]"
          value={ruDescription}
          fullWidth
          onChange={(e) => setRuDescription(e.target.value)}
          //   error={!adressAZ.isValid && adressAZ.touched}
          required
          multiline
          //   className={classes.fullTextFields}
        />
      </TabPanel>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          type="submit"
          // disabled={!isFormValid()}
          style={{ margin: '0 20px 20px' }}
        >
          Update about block
        </Button>
      </div>
    </form>
  );
};

export default AboutTab;
