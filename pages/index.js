import Header from '../components/header';
import Slider from '../components/slider';
import About from '../components/about';
import Products from '../components/products';
import { productsData } from '../data/products';
import { sliderData } from '../data/slider';
import Head from 'next/head';
import { withTranslation } from '../i18n';

const Index = ({ t }) => (
  <div>
    <Head>
      <title>Alphachem - Home</title>
    </Head>
    <Header pageTitle="Home" />
    <Slider sliderData={sliderData} />
    <main>
      <div>{t('test')}</div>
      <About />
      <Products productsData={productsData} />
    </main>
  </div>
);

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Index);
