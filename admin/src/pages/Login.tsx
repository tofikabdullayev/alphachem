import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import logo from '../logo.png';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginPage}>
      <Card variant="outlined">
        <CardContent style={{ paddingBottom: 16 }}>
          <img src={logo} className={classes.loginLogo} alt="logo" />
          <Typography
            variant="h6"
            component="h6"
            className={classes.loginTitle}
          >
            Enter your username and password
          </Typography>
          <form className={classes.loginForm}>
            <TextField
              name="username"
              type="text"
              label="Username"
              fullWidth
              className={classes.loginInput}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              fullWidth
              className={classes.loginInput}
            />
            <Button variant="contained" className={classes.loginBtn}>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
