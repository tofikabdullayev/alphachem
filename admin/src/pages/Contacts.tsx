import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import Loading from '../components/loading';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsPageState } from './../store/reducers/contacts';
import { getContacts } from '../store/actions/contacts';
import ContactsData from '../components/ContactsData';
import { Contacts } from '../store/interfaces';

export interface ContactsProps {}

const ContactsPage: React.FC<ContactsProps> = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(
    (state: { contactsPage: ContactsPageState }) => state.contactsPage.contacts
  );
  const isLoading = useSelector(
    (state: { contactsPage: ContactsPageState }) => state.contactsPage.isLoading
  );
  const classes = useStyles();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <Layout>
      <div className={classes.pageTitle}>
        <Typography variant="h3" component="h3">
          Contacts page
        </Typography>
      </div>
      <div className={classes.pageContent}>
        {!isLoading ? (
          <ContactsData classes={classes} contacts={contacts as Contacts} />
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default ContactsPage;
