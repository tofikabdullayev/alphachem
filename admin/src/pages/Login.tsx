import React, { useState } from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import logo from '../logo.png';
import { initialitemTitle, ItemTitle } from './Products';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [username, setUserName] = useState<ItemTitle>(initialitemTitle);
  const [password, setPassword] = useState<ItemTitle>(initialitemTitle);
  const classes = useStyles();

  const titleChangehandler = (
    value: string,
    setter: (newData: ItemTitle) => void
  ) => {
    const currentState: ItemTitle = {
      value: value,
      touched: true,
      isValid: value.trim().length > 5,
    };

    setter(currentState);
  };

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
          <form
            className={classes.loginForm}
            onSubmit={(e) => {
              e.preventDefault();
              if (!(username.isValid && password.isValid)) {
                return;
              }
              window.location.href = '/';
            }}
          >
            <TextField
              name="username"
              type="text"
              label="Username"
              value={username.value}
              fullWidth
              className={classes.loginInput}
              onChange={(e) => titleChangehandler(e.target.value, setUserName)}
              error={!username.isValid && username.touched}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={password.value}
              fullWidth
              className={classes.loginInput}
              onChange={(e) => titleChangehandler(e.target.value, setPassword)}
              error={!password.isValid && password.touched}
            />
            <Button
              variant="contained"
              className={classes.loginBtn}
              disabled={!(username.isValid && password.isValid)}
              type="submit"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
