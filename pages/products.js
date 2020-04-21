import Header from '../components/header';
import Products from '../components/products';
import PageHeader from '../components/pageHeader';
import Head from 'next/head';
import { withTranslation } from '../i18n';
import axios from 'axios';

const ProductsPage = ({ t, productsData }) => (
  <div>
    <Head>
      <title>Alphachem - Chemical products</title>
    </Head>
    <Header pageTitle="Chemical products" t={t} />
    <PageHeader title="/products" t={t} />
    <main>
      <Products productsData={productsData} t={t} />
    </main>
  </div>
);

ProductsPage.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const productsData = await (await axios.get(`${baseUrl}/api/products`)).data;
  return {
    namespacesRequired: ['common'],
    productsData,
  };
};

export default withTranslation('common')(ProductsPage);
