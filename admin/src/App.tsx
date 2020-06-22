import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductsPage from './pages/Products';
import SliderPage from './pages/Slider';
import AboutPage from './pages/About';
import ContactsPage from './pages/Contacts';
import LoginPage from './pages/Login';
import ProtectedRoute from './components/protectedRoute';
import AuthRoute from './components/authRoute';

function App() {
  return (
    <>
      <Switch>
        <ProtectedRoute path="/" component={ProductsPage} exact />
        <ProtectedRoute path="/slider" component={SliderPage} exact />
        <ProtectedRoute path="/about" component={AboutPage} exact />
        <ProtectedRoute path="/contacts" component={ContactsPage} exact />
        <AuthRoute path="/login" component={LoginPage} exact />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}

export default App;
