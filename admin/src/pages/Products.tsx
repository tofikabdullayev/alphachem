import React from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import AddItem from '../components/AddItem';

export interface ProductsProps {}

const ProductsPage: React.FC<ProductsProps> = () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" component="h3">
          Products
        </Typography>
        <AddItem title="Add product">
          <p>inputs</p>
        </AddItem>
      </div>
    </Layout>
  );
};

export default ProductsPage;
