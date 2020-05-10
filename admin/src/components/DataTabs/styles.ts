import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginBottom: '20px',
    },
    errorTab: {
      color: 'red !important',
    },
    btnContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
    },
    image: {
      maxWidth: '500px',
      margin: '0 0 10px 20px',
    },
  })
);
