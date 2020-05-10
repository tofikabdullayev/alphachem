import React, { useEffect, useState, FormEvent } from 'react';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { About, Slider } from '../../store/interfaces';
import { ItemTitle, initialitemTitle } from '../../pages/Products';

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
  data: About | Slider;
  onUpdate: (about: any) => void;
}

const AboutTab: React.FC<AboutTabProps> = ({ data, onUpdate }) => {
  const classes = useStyles();

  const [value, setValue] = useState<number>(0);

  const [azTitle, setAzTitle] = useState<ItemTitle>(initialitemTitle);
  const [azDescription, setAzDescription] = useState<ItemTitle>(
    initialitemTitle
  );
  const [enTitle, setEnTitle] = useState<ItemTitle>(initialitemTitle);
  const [enDescription, setEnDescription] = useState<ItemTitle>(
    initialitemTitle
  );
  const [ruTitle, setRuTitle] = useState<ItemTitle>(initialitemTitle);
  const [ruDescription, setRuDescription] = useState<ItemTitle>(
    initialitemTitle
  );

  useEffect(() => {
    setAzTitle({ ...initialitemTitle, value: data.title.az, isValid: true });
    setAzDescription({
      ...initialitemTitle,
      value: data.description.az,
      isValid: true,
    });
    setEnTitle({ ...initialitemTitle, value: data.title.en, isValid: true });
    setEnDescription({
      ...initialitemTitle,
      value: data.description.en,
      isValid: true,
    });
    setRuTitle({ ...initialitemTitle, value: data.title.ru, isValid: true });
    setRuDescription({
      ...initialitemTitle,
      value: data.description.ru,
      isValid: true,
    });
  }, [data]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const titleChangehandler = (
    value: string,
    setter: (newData: ItemTitle) => void
  ) => {
    const currentState: ItemTitle = {
      value: value,
      touched: true,
      isValid: value.trim().length > 0,
    };

    setter(currentState);
  };

  const isFormValid = () => {
    return (
      azTitle.isValid &&
      azDescription.isValid &&
      enTitle.isValid &&
      enDescription.isValid &&
      ruTitle.isValid &&
      ruDescription.isValid
    );
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedAbout: About = {
      title: {
        az: azTitle.value,
        en: enTitle.value,
        ru: ruTitle.value,
      },
      description: {
        az: azDescription.value,
        en: enDescription.value,
        ru: ruDescription.value,
      },
      _id: data._id,
    };

    const updateData = (data as Slider).imageSrc
      ? { ...updatedAbout, imageSrc: (data as Slider).imageSrc }
      : updatedAbout;

    onUpdate(updateData);
  };

  return (
    <form onSubmit={onSubmit} style={{ background: '#efefef' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="about tabs"
          style={{ background: 'rgb(0%,52.549744%,63.137817%)' }}
          TabIndicatorProps={{ style: { background: '#fff' } }}
        >
          <Tab
            label="Az"
            {...a11yProps(0)}
            className={
              !(azTitle.isValid && azDescription.isValid)
                ? classes.errorTab
                : ''
            }
          />
          <Tab
            label="En"
            {...a11yProps(1)}
            className={
              !(enTitle.isValid && enDescription.isValid)
                ? classes.errorTab
                : ''
            }
          />
          <Tab
            label="Ru"
            {...a11yProps(2)}
            className={
              !(ruTitle.isValid && ruDescription.isValid)
                ? classes.errorTab
                : ''
            }
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField
          className={classes.textField}
          label="About block title [AZ]"
          value={azTitle.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setAzTitle)}
          error={!azTitle.isValid && azTitle.touched}
          required
        />
        <TextField
          className={classes.textField}
          label="About block description [AZ]"
          value={azDescription.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setAzDescription)}
          error={!azDescription.isValid && azDescription.touched}
          required
          multiline
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField
          className={classes.textField}
          label="About block title [EN]"
          value={enTitle.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setEnTitle)}
          error={!enTitle.isValid && enTitle.touched}
          required
        />
        <TextField
          className={classes.textField}
          label="About block description [EN]"
          value={enDescription.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setEnDescription)}
          error={!enDescription.isValid && enDescription.touched}
          required
          multiline
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField
          className={classes.textField}
          label="About block title [RU]"
          value={ruTitle.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setRuTitle)}
          error={!ruTitle.isValid && ruTitle.touched}
          required
        />
        <TextField
          className={classes.textField}
          label="About block description [RU]"
          value={ruDescription.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setRuDescription)}
          error={!ruDescription.isValid && ruDescription.touched}
          required
          multiline
        />
      </TabPanel>
      {(data as Slider).imageSrc ? (
        <img
          src={(data as Slider).imageSrc}
          style={{ maxWidth: '500px', margin: '0 0 10px 20px' }}
        />
      ) : (
        ''
      )}
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
          disabled={!isFormValid()}
          style={{ margin: '0 20px 20px' }}
        >
          Update about block
        </Button>
      </div>
    </form>
  );
};

export default AboutTab;
