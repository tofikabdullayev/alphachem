import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Contacts } from '../../store/interfaces';
import { ItemTitle, initialitemTitle } from '../../pages/Products';

export interface ContactsDataProps {
  classes: any;
  contacts: Contacts;
}

interface ContactItems extends Omit<ItemTitle, 'value'> {
  value: string[];
}

const ContactsData: React.SFC<ContactsDataProps> = ({ classes, contacts }) => {
  const [adressAZ, setAdressAZ] = useState<ItemTitle>(initialitemTitle);
  const [adressEN, setAdressEN] = useState<ItemTitle>(initialitemTitle);
  const [adressRU, setAdressRU] = useState<ItemTitle>(initialitemTitle);

  const [lat, setLat] = useState<ItemTitle>(initialitemTitle);
  const [long, setLong] = useState<ItemTitle>(initialitemTitle);

  const [phones, setPhones] = useState<ContactItems>({
    ...initialitemTitle,
    value: [],
  });

  const [emails, setEmails] = useState<ContactItems>({
    ...initialitemTitle,
    value: [],
  });

  useEffect(() => {
    setAdressAZ({ ...initialitemTitle, value: contacts.adress.az });
    setAdressEN({ ...initialitemTitle, value: contacts.adress.en });
    setAdressRU({ ...initialitemTitle, value: contacts.adress.ru });

    setLat({ ...initialitemTitle, value: contacts.location.lat });
    setLong({ ...initialitemTitle, value: contacts.location.long });

    setPhones({ ...initialitemTitle, value: contacts.phones });

    setEmails({ ...initialitemTitle, value: contacts.emails });
  }, [contacts]);

  const titleChangehandler = (
    value: string,
    setter: (newData: ItemTitle) => void
  ) => {
    const currentState: ItemTitle = {
      value: value,
      touched: true,
      isValid: value.length > 0,
    };

    setter(currentState);
  };

  return (
    <Grid container spacing={3}>
      <Grid item sm={3}>
        <Typography variant="h5" component="h5">
          Adress:
        </Typography>
      </Grid>
      <Grid item sm={9}>
        <TextField
          label="Adress [AZ]"
          value={adressAZ.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setAdressAZ)}
          error={!adressAZ.isValid && adressAZ.touched}
          required
          className={classes.fullTextFields}
        />
        <TextField
          label="Adress [EN]"
          value={adressEN.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setAdressEN)}
          error={!adressEN.isValid && adressEN.touched}
          required
          className={classes.fullTextFields}
        />
        <TextField
          label="Adress [RU]"
          value={adressRU.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setAdressRU)}
          error={!adressRU.isValid && adressRU.touched}
          required
          className={classes.fullTextFields}
        />
      </Grid>
      <Grid item sm={12}>
        <Divider />
      </Grid>
      <Grid item sm={3}>
        <Typography variant="h5" component="h5">
          Location:
        </Typography>
      </Grid>
      <Grid item sm={9}>
        <TextField
          label="Latitude"
          value={lat.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setLat)}
          error={!lat.isValid && lat.touched}
          required
          className={classes.fullTextFields}
        />
        <TextField
          label="Longitude"
          value={long.value}
          fullWidth
          onChange={(e) => titleChangehandler(e.target.value, setLong)}
          error={!long.isValid && long.touched}
          required
          className={classes.fullTextFields}
        />
      </Grid>
      <Grid item sm={12}>
        <Divider />
      </Grid>
      <Grid item sm={3}>
        <Typography variant="h5" component="h5">
          Phones:
        </Typography>
      </Grid>
      <Grid item sm={9}>
        <Grid item sm={9}>
          <TextField
            label="Phone"
            // value={phones.value[0]}
            fullWidth
            // onChange={(e) =>
            //   contactItemChangehandler(e.target.value, phones, setPhones)
            // }
            //   error={!lat.isValid && lat.touched}
            required
            className={classes.fullTextFields}
          />
          <TextField
            label="Phone"
            // value={phones.value[1]}
            fullWidth
            // onChange={(e) =>
            //   contactItemChangehandler(e.target.value, phones, setPhones)
            // }
            //   error={!long.isValid && long.touched}
            required
            className={classes.fullTextFields}
          />
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Divider />
      </Grid>
      <Grid item sm={3}>
        <Typography variant="h5" component="h5">
          Emails:
        </Typography>
      </Grid>
      <Grid item sm={9}>
        <Grid item sm={9}>
          <TextField
            label="Email"
            // value={emails.value[0]}
            fullWidth
            // onChange={(e) =>
            //   contactItemChangehandler(e.target.value, emails, setEmails)
            // }
            //   error={!lat.isValid && lat.touched}
            required
            className={classes.fullTextFields}
          />
          <TextField
            label="Email"
            // value={emails.value[1]}
            fullWidth
            // onChange={(e) =>
            //   contactItemChangehandler(e.target.value, emails, setEmails)
            // }
            //   error={!long.isValid && long.touched}
            required
            className={classes.fullTextFields}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactsData;
