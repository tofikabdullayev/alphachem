import React from 'react';
import useStyles from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>

      <div className={classes.contentWrapper}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
