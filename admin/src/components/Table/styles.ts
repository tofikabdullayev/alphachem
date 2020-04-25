import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    tableContainer: {
      marginTop: '40px',
      maxHeight: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'visible',
    },
    table: {
      minWidth: 650,
    },
    image: {
      maxWidth: '50px',
    },
  })
);
