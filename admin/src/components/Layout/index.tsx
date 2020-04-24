import React from 'react';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>header</div>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <div>Sidebar</div>
        </Grid>
        <Grid item sm={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
