import React from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import Loading from '../components/loading';
import useStyles from './styles';

export interface ContactsProps {}

const ContactsPage: React.FC<ContactsProps> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.pageTitle}>
        <Typography variant="h3" component="h3">
          Contacts page
        </Typography>
      </div>
    </Layout>
  );
};

export default ContactsPage;
