import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    pageTitle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    formRoot: {
      '& > *': {
        margin: '0 0 20px !important',
      },
    },
    pageContent: {
      marginTop: '17px',
    },
    fieldsTitle: { marginTop: '17px' },
    fullTextFields: {
      marginBottom: '20px',
    },
  })
);
