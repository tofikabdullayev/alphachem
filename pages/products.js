import Header from '../components/header';
import Products from '../components/products';
import PageHeader from '../components/pageHeader';

const ProductsPage = () => (
  <div>
    <Header pageTitle="Products" />
    <PageHeader title="Chemical products" />
    <main>
      <Products />
    </main>
  </div>
);

export default ProductsPage;
