import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh',
      backgroundColor: 'rgb(0%,52.549744%,63.137817%) !important',
      color: '#fff !important',
      '& a': {
        color: 'white',
        textDecoration: 'none',
      },
    },
    logo: {
      maxWidth: '100%',
      display: 'block',
      margin: '0 auto 20px',
    },
  })
);
