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
    loginLogo: { display: 'block', margin: '0 auto 20px' },
    loginPage: {
      width: '100%',
      height: '100vh',
      background: 'rgb(0%,52.549744%,63.137817%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    loginTitle: {
      marginBottom: 20,
      textAlign: 'center',
    },
    loginForm: {
      textAlign: 'right',
    },
    loginInput: {
      marginBottom: 10,
    },
    loginBtn: {
      background: 'rgb(0%,52.549744%,63.137817%)',
      color: '#fff',
      marginTop: 10,
    },
  })
);
