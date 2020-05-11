import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsPage from './pages/Products';
import SliderPage from './pages/Slider';
import AboutPage from './pages/About';
import ContactsPage from './pages/Contacts';
import LoginPage from './pages/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/slider" component={SliderPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/contacts" component={ContactsPage} exact />
        <Route path="/login" component={LoginPage} exact />
      </Switch>
    </>
  );
}

export default App;
