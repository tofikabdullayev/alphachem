import Header from '../components/header';
import Products from '../components/products';
import PageHeader from '../components/pageHeader';
import { productsData } from '../data/products';

const ProductsPage = () => (
  <div>
    <Header pageTitle="Products" />
    <PageHeader title="Chemical products" />
    <main>
      <Products productsData={productsData} />
    </main>
  </div>
);

export default ProductsPage;
