import React, { useState } from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import logo from '../logo.png';
import { initialitemTitle, ItemTitle } from './Products';
import Axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

export interface LoginPageProps extends RouteComponentProps {}

const LoginPage: React.FC<LoginPageProps> = ({ history }: LoginPageProps) => {
  const [username, setUserName] = useState<ItemTitle>(initialitemTitle);
  const [password, setPassword] = useState<ItemTitle>(initialitemTitle);
  const [error, setError] = useState<boolean>(false);
  const classes = useStyles();

  const titleChangehandler = (
    value: string,
    setter: (newData: ItemTitle) => void
  ) => {
    const currentState: ItemTitle = {
      value: value,
      touched: true,
      isValid: value.trim().length > 4,
    };

    setter(currentState);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!(username.isValid && password.isValid)) {
      return;
    }
    try {
      const response = await Axios.post('/api/auth/login', {
        username: username.value,
        password: password.value,
      });
      const data = await response.data;

      setError(false);

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      history.push('/');
    } catch (error) {
      setError(true);
      console.error(error.message);
    }
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
          <form className={classes.loginForm} onSubmit={onSubmit}>
            {error && (
              <Typography
                variant="body2"
                component="p"
                className={classes.errorMessage}
              >
                Invalid login or password
              </Typography>
            )}

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
