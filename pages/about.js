import Header from '../components/header';
import About from '../components/about';
import PageHeader from '../components/pageHeader';
import Head from 'next/head';
import { withTranslation } from '../i18n';
import axios from 'axios';

const AboutPage = ({ t, aboutData }) => (
  <div>
    <Head>
      <title>Alphachem - {t('nav./about')}</title>
    </Head>
    <Header pageTitle="About us" t={t} />
    <PageHeader title="/about" t={t} />
    <main>
      <About t={t} aboutData={aboutData} />
    </main>
  </div>
);

AboutPage.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const aboutData = await (await axios.get(`${baseUrl}/api/about`)).data;
  return {
    namespacesRequired: ['common'],
    aboutData,
  };
};

export default withTranslation('common')(AboutPage);
