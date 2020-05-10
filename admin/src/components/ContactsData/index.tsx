import React, { useState, useEffect, FormEvent } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Contacts } from '../../store/interfaces';
import { ItemTitle, initialitemTitle } from '../../pages/Products';

export interface ContactsDataProps {
  classes: any;
  contacts: Contacts;
  onSubmit: (data: any) => void;
}

const ContactsData: React.FC<ContactsDataProps> = ({
  classes,
  contacts,
  onSubmit,
}) => {
  const [adressAZ, setAdressAZ] = useState<ItemTitle>(initialitemTitle);
  const [adressEN, setAdressEN] = useState<ItemTitle>(initialitemTitle);
  const [adressRU, setAdressRU] = useState<ItemTitle>(initialitemTitle);

  const [lat, setLat] = useState<ItemTitle>(initialitemTitle);
  const [long, setLong] = useState<ItemTitle>(initialitemTitle);

  const [phones, setPhones] = useState<ItemTitle[]>([]);
  const [emails, setEmails] = useState<ItemTitle[]>([]);

  useEffect(() => {
    setAdressAZ({
      ...initialitemTitle,
      value: contacts.adress.az,
      isValid: true,
    });
    setAdressEN({
      ...initialitemTitle,
      value: contacts.adress.en,
      isValid: true,
    });
    setAdressRU({
      ...initialitemTitle,
      value: contacts.adress.ru,
      isValid: true,
    });

    setLat({
      ...initialitemTitle,
      value: contacts.location.lat,
      isValid: true,
    });
    setLong({
      ...initialitemTitle,
      value: contacts.location.long,
      isValid: true,
    });

    setPhones(
      contacts.phones.map((phone) => ({
        ...initialitemTitle,
        value: phone,
        isValid: true,
      }))
    );
    setEmails(
      contacts.emails.map((email) => ({
        ...initialitemTitle,
        value: email,
        isValid: true,
      }))
    );
  }, [contacts]);

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

  const phoneChangeHandler = (value: string, i: number) => {
    phones[i] = {
      ...phones[i],
      value: value,
      touched: true,
      isValid: value.trim().length > 0,
    };
    setPhones([...phones]);
  };

  const emailChangeHandler = (value: string, i: number) => {
    emails[i] = {
      ...emails[i],
      value: value,
      touched: true,
      isValid: value.trim().length > 0,
    };
    setEmails([...emails]);
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedContacts: Contacts = {
      adress: {
        az: adressAZ.value,
        en: adressEN.value,
        ru: adressRU.value,
      },
      location: {
        lat: lat.value,
        long: long.value,
      },
      phones: phones.map((v) => v.value),
      emails: emails.map((v) => v.value),
    };
    onSubmit(updatedContacts);
  };

  const isFormValid = () => {
    let isPhonesValid: boolean = true;
    phones.forEach((p) => {
      isPhonesValid = p.isValid && isPhonesValid;
    });
    let isEmailsValid: boolean = true;
    emails.forEach((p) => {
      isEmailsValid = p.isValid && isEmailsValid;
    });
    return (
      adressAZ.isValid &&
      adressEN.isValid &&
      adressRU.isValid &&
      lat.isValid &&
      long.isValid &&
      isPhonesValid &&
      isEmailsValid
    );
  };

  return (
    <form onSubmit={(event: FormEvent<HTMLFormElement>) => onFormSubmit(event)}>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Grid item sm={12}>
            <Typography
              variant="h5"
              component="h5"
              className={classes.fieldsTitle}
            >
              Adress:
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <TextField
              label="Adress [AZ]"
              value={adressAZ.value}
              fullWidth
              onChange={(e) => titleChangehandler(e.target.value, setAdressAZ)}
              error={!adressAZ.isValid && adressAZ.touched}
              required
              className={classes.fullTextFields}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              label="Adress [EN]"
              value={adressEN.value}
              fullWidth
              onChange={(e) => titleChangehandler(e.target.value, setAdressEN)}
              error={!adressEN.isValid && adressEN.touched}
              required
              className={classes.fullTextFields}
            />
          </Grid>
          <Grid item sm={12}>
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
        </Grid>
        <Grid item sm={6}>
          <Grid item sm={12}>
            <Typography
              variant="h5"
              component="h5"
              className={classes.fieldsTitle}
            >
              Location:
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <TextField
              label="Latitude"
              value={lat.value}
              fullWidth
              onChange={(e) => titleChangehandler(e.target.value, setLat)}
              error={!lat.isValid && lat.touched}
              required
              className={classes.fullTextFields}
            />
          </Grid>
          <Grid item sm={12}>
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
        </Grid>
        <Grid item sm={12}>
          <Divider />
        </Grid>
        <Grid item sm={6}>
          <Grid item sm={12}>
            <Typography
              variant="h5"
              component="h5"
              className={classes.fieldsTitle}
            >
              Phones:
            </Typography>
          </Grid>

          {phones.map((phone: ItemTitle, i: number) => (
            <Grid item sm={12} key={`phone-${i}`} style={{ display: 'flex' }}>
              <TextField
                label={`Phone - ${i + 1}`}
                value={phone.value}
                onChange={(e) => phoneChangeHandler(e.target.value, i)}
                error={!phone.isValid && phone.touched}
                required
                className={classes.fullTextFields}
                style={{ width: '100%' }}
              />
              <IconButton
                color="primary"
                aria-label="Delete"
                onClick={() => setPhones(phones.filter((v, idx) => idx !== i))}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          ))}
          {phones.length < 4 && (
            <Grid item sm={12}>
              <Button
                variant="outlined"
                color="primary"
                style={{ width: '100%' }}
                onClick={() =>
                  setPhones([
                    ...phones,
                    {
                      ...initialitemTitle,
                      value: '',
                      isValid: false,
                    },
                  ])
                }
              >
                <AddIcon />
              </Button>
            </Grid>
          )}
        </Grid>
        <Grid item sm={6}>
          <Grid item sm={12}>
            <Typography
              variant="h5"
              component="h5"
              className={classes.fieldsTitle}
            >
              Emails:
            </Typography>
          </Grid>

          {emails.map((email: ItemTitle, i: number) => (
            <Grid item sm={12} key={`email-${i}`} style={{ display: 'flex' }}>
              <TextField
                label={`Email - ${i + 1}`}
                value={email.value}
                fullWidth
                onChange={(e) => emailChangeHandler(e.target.value, i)}
                error={!email.isValid && email.touched}
                required
                className={classes.fullTextFields}
                style={{ width: '100%' }}
              />
              <IconButton
                color="primary"
                aria-label="Delete"
                onClick={() => setEmails(emails.filter((v, idx) => idx !== i))}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          ))}
          {emails.length < 4 && (
            <Grid item sm={12}>
              <Button
                variant="outlined"
                color="primary"
                style={{ width: '100%' }}
                onClick={() =>
                  setEmails([
                    ...emails,
                    {
                      ...initialitemTitle,
                      value: '',
                      isValid: false,
                    },
                  ])
                }
              >
                <AddIcon />
              </Button>
            </Grid>
          )}
        </Grid>
        <Grid item sm={12} style={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            type="submit"
            disabled={!isFormValid()}
          >
            Save contact info
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactsData;
