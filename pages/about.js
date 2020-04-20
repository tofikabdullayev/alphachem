import Header from '../components/header';
import About from '../components/about';
import PageHeader from '../components/pageHeader';
import Head from 'next/head';
import { withTranslation } from '../i18n';
const AboutPage = ({ t }) => (
  <div>
    <Head>
      <title>Alphachem - {t('nav./about')}</title>
    </Head>
    <Header pageTitle="About us" t={t} />
    <PageHeader title="/about" t={t} />
    <main>
      <About t={t} />
    </main>
  </div>
);

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(AboutPage);
