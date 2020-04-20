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
    <PageHeader title="/products" t={t} />
    <main>
      <Products productsData={productsData} t={t} />
    </main>
  </div>
);

ProductsPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(ProductsPage);
