import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
    },
    sidebar: {
      width: '300px',
    },
    contentWrapper: {
      width: 'calc(100% - 300px)',
      height: '100%',
    },
  })
);
