import React from 'react';
import Button from '@material-ui/core/Button';
import Layout from '../components/Layout';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <Button>Click me!</Button>
    </Layout>
  );
};

export default HomePage;
