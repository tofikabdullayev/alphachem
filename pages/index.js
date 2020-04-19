import Header from '../components/header';
import Slider from '../components/slider';
import About from '../components/about';
import Products from '../components/products';
import { productsData } from '../data/products';

const Index = () => (
  <div>
    <Header pageTitle="Home" />
    <Slider />
    <main>
      <About />
      <Products productsData={productsData} />
    </main>
  </div>
);

export default Index;
