import Header from '../components/header';
import Slider from '../components/slider';
import About from '../components/about';
import Products from '../components/products';
import { productsData } from '../data/products';
import { sliderData } from '../data/slider';
import Head from 'next/head';
import { withTranslation } from '../i18n';

const Index = ({ t }) => {
  return (
    <div>
      <Head>
        <title>Alphachem - {t('nav./')}</title>
      </Head>
      <Header pageTitle="Home" t={t} />
      <Slider sliderData={sliderData} t={t} />
      <main>
        <About t={t} />
        <Products productsData={productsData} t={t} />
      </main>
    </div>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Index);
