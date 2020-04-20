import Header from '../components/header';
import Products from '../components/products';
import PageHeader from '../components/pageHeader';
import { productsData } from '../data/products';
import Head from 'next/head';
import { withTranslation } from '../i18n';
const ProductsPage = ({ t }) => (
  <div>
    <Head>
      <title>Alphachem - Chemical products</title>
    </Head>
    <Header pageTitle="Chemical products" t={t} />
    <PageHeader title="Chemical products" />
    <main>
      <Products productsData={productsData} />
    </main>
  </div>
);

export default withTranslation('common')(ProductsPage);
