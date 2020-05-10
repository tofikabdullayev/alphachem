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

type FieldControl = [
  ItemTitle,
  (item: ItemTitle) => void,
  ItemTitle,
  (item: ItemTitle) => void
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`data-tabpanel-${index}`}
      aria-labelledby={`data-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `data-tab-${index}`,
    'aria-controls': `data-tabpanel-${index}`,
  };
}

export interface DataTabsProps {
  data: About | Slider;
  onUpdate: (about: any) => void;
}

const DataTabs: React.FC<DataTabsProps> = ({ data, onUpdate }) => {
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

  const fieldControls: FieldControl[] = [
    [azTitle, setAzTitle, azDescription, setAzDescription],
    [enTitle, setEnTitle, enDescription, setEnDescription],
    [ruTitle, setRuTitle, ruDescription, setRuDescription],
  ];

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

  const tabValidator = ([title, description]: [
    ItemTitle,
    ItemTitle
  ]): string => {
    return !(title.isValid && description.isValid) ? classes.errorTab : '';
  };

  return (
    <form onSubmit={onSubmit} style={{ background: '#efefef' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={(e: React.ChangeEvent<{}>, value: number) =>
            setValue(value)
          }
          aria-label="data tabs"
          style={{ background: 'rgb(0%,52.549744%,63.137817%)' }}
          TabIndicatorProps={{ style: { background: '#fff' } }}
        >
          <Tab
            label="Az"
            {...a11yProps(0)}
            className={tabValidator([azTitle, azDescription])}
          />
          <Tab
            label="En"
            {...a11yProps(1)}
            className={tabValidator([enTitle, enDescription])}
          />
          <Tab
            label="Ru"
            {...a11yProps(2)}
            className={tabValidator([ruTitle, ruDescription])}
          />
        </Tabs>
      </AppBar>
      {fieldControls.map(
        (
          [title, setTitle, description, setDescription]: FieldControl,
          idx: number
        ) => (
          <TabPanel value={value} index={idx}>
            <TextField
              className={classes.textField}
              label="Title"
              value={title.value}
              fullWidth
              onChange={(e) => titleChangehandler(e.target.value, setTitle)}
              error={!title.isValid && title.touched}
              required
            />
            <TextField
              className={classes.textField}
              label="Description"
              value={description.value}
              fullWidth
              onChange={(e) =>
                titleChangehandler(e.target.value, setDescription)
              }
              error={!description.isValid && description.touched}
              required
              multiline
            />
          </TabPanel>
        )
      )}
      {(data as Slider).imageSrc && (
        <img
          src={(data as Slider).imageSrc}
          alt={data.description.az}
          className={classes.image}
        />
      )}
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          type="submit"
          disabled={!isFormValid()}
          style={{ margin: '0 20px 20px' }}
        >
          Update
        </Button>
      </div>
    </form>
  );
};

export default DataTabs;
