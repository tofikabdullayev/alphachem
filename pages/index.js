import Header from '../components/header';
import Slider from '../components/slider';
import About from '../components/about';
import Products from '../components/products';

const Index = () => (
  <div>
    <Header pageTitle="Home" />
    <Slider />
    <main>
      <About />
      <Products />
    </main>
  </div>
);

export default Index;
