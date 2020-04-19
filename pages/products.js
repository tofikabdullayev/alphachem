import Header from '../components/header';
import Products from '../components/products';
import PageHeader from '../components/pageHeader';
import { productsData } from '../data/products';
import Head from 'next/head';

const ProductsPage = () => (
  <div>
    <Head>
      <title>Alphachem - Chemical products</title>
    </Head>
    <Header pageTitle="Products" />
    <PageHeader title="Chemical products" />
    <main>
      <Products productsData={productsData} />
    </main>
  </div>
);

export default ProductsPage;
