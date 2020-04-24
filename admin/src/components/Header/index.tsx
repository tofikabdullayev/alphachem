import React from 'react';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  return (
    <Paper elevation={4} square className={classes.root}>
      <Typography variant="body1" component="p" style={{ color: 'white' }}>
        Hello, Admin!
      </Typography>
      <IconButton
        color="primary"
        style={{ color: 'white', marginLeft: '12px' }}
        aria-label="Log out"
      >
        <ExitToAppIcon />
      </IconButton>
    </Paper>
  );
};

export default Header;
