import Header from '../components/header';
import About from '../components/about';
import PageHeader from '../components/pageHeader';
import Head from 'next/head';
import { withTranslation } from '../i18n';
const AboutPage = ({ t }) => (
  <div>
    <Head>
      <title>Alphachem - About</title>
    </Head>
    <Header pageTitle="About us" t={t} />
    <PageHeader title="About us" />
    <main>
      <About />
    </main>
  </div>
);

export default withTranslation('common')(AboutPage);
