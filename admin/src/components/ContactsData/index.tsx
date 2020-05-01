import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Contacts } from '../../store/interfaces';

export interface ContactsDataProps {
  classes: any;
  contacts: Contacts;
}

const ContactsData: React.SFC<ContactsDataProps> = ({ classes, contacts }) => {
  const [adressAZ, setAdressAZ] = useState<string>('');
  const [adressEN, setAdressEN] = useState<string>('');
  const [adressRU, setAdressRU] = useState<string>('');

  useEffect(() => {
    setAdressAZ(contacts.adress.az);
    setAdressEN(contacts.adress.en);
    setAdressRU(contacts.adress.ru);
  }, [contacts]);
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
          value={adressAZ}
          fullWidth
          // onChange={(e) => titleChangehandler(e.target.value, setAzTitle)}
          onChange={(e) => setAdressAZ(e.target.value)}
          // error={!azTitle.isValid && azTitle.touched}
          required
          className={classes.fullTextFields}
        />
        <TextField
          label="Adress [EN]"
          value={adressEN}
          fullWidth
          // onChange={(e) => titleChangehandler(e.target.value, setAzTitle)}
          onChange={(e) => setAdressEN(e.target.value)}
          // error={!azTitle.isValid && azTitle.touched}
          required
          className={classes.fullTextFields}
        />
        <TextField
          label="Adress [RU]"
          value={adressRU}
          fullWidth
          // onChange={(e) => titleChangehandler(e.target.value, setAzTitle)}
          onChange={(e) => setAdressRU(e.target.value)}
          // error={!azTitle.isValid && azTitle.touched}
          required
          className={classes.fullTextFields}
        />
      </Grid>
      <Grid item sm={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default ContactsData;
