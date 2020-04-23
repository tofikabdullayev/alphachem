import Header from '../components/header';
import Slider from '../components/slider';
import About from '../components/about';
import Products from '../components/products';
import Head from 'next/head';
import { withTranslation } from '../i18n';
import axios from 'axios';

const Index = ({ t, productsData, sliderData, aboutData }) => {
  return (
    <div>
      <Head>
        <title>Alphachem - {t('nav./')}</title>
      </Head>
      <Header pageTitle="Home" t={t} />
      <Slider sliderData={sliderData} t={t} />
      <main>
        <About t={t} aboutData={aboutData} />
        <Products productsData={productsData} t={t} />
      </main>
    </div>
  );
};

Index.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const productsData = await (await axios.get(`${baseUrl}/api/products`)).data;
  const sliderData = await (await axios.get(`${baseUrl}/api/slider`)).data;
  const aboutData = await (await axios.get(`${baseUrl}/api/about`)).data;
  return {
    namespacesRequired: ['common'],
    productsData,
    sliderData,
    aboutData,
  };
};

export default withTranslation('common')(Index);
