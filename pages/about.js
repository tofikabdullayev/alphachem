import Header from '../components/header';
import About from '../components/about';
import PageHeader from '../components/pageHeader';

const AboutPage = () => (
  <div>
    <Header pageTitle="About us" />
    <PageHeader title="About us" />
    <main>
      <About />
    </main>
  </div>
);

export default AboutPage;
