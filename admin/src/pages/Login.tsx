import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginPage}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h5">
            AlphaChem Login
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
