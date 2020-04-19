import Header from '../components/header';
import About from '../components/about';
import PageHeader from '../components/pageHeader';
import Head from 'next/head';
const AboutPage = () => (
  <div>
    <Head>
      <title>Alphachem - About</title>
    </Head>
    <Header pageTitle="About us" />
    <PageHeader title="About us" />
    <main>
      <About />
    </main>
  </div>
);

export default AboutPage;
