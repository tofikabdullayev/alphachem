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
      height: 'calc(100vh - 147px)',
      overflow: 'hidden',
      overflowY: 'visible',
    },
    fieldsTitle: { marginTop: '17px', marginBottom: '20px' },
    fullTextFields: {
      marginBottom: '20px',
    },
  })
);
