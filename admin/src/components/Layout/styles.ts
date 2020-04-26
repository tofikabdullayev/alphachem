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
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    content: {
      padding: '12px',
    },
  })
);
