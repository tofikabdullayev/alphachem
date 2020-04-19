import Header from '../components/header';
import About from '../components/about';
import PageHeader from '../components/pageHeader';

const AboutPage = () => (
  <div>
    <Header />
    <PageHeader title="About us" />
    <main>
      <About />
    </main>
  </div>
);

export default AboutPage;
