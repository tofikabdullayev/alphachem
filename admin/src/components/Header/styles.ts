import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '50px',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'rgb(0%,52.549744%,63.137817%) !important',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 12px',
    },
  })
);
