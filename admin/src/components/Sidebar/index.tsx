import React from 'react';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Divider from '@material-ui/core/Divider';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

export interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const classes = useStyles();
  return (
    <Paper elevation={4} square className={classes.root}>
      <div style={{ paddingTop: '20px' }}>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>

      <Divider />
      <List component="nav">
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <AddBoxIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>
        <Link to="/slider">
          <ListItem button>
            <ListItemIcon>
              <SlideshowIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Slider" />
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link to="/contacts">
          <ListItem button>
            <ListItemIcon>
              <ContactSupportIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItem>
        </Link>
      </List>
    </Paper>
  );
};

export default Sidebar;
