import Header from '../components/header';
import Slider from '../components/slider';
import About from '../components/about';
import Products from '../components/products';
import { productsData } from '../data/products';
import { sliderData } from '../data/slider';
import Head from 'next/head';

const Index = () => (
  <div>
    <Head>
      <title>Alphachem - Home</title>
    </Head>
    <Header pageTitle="Home" />
    <Slider sliderData={sliderData} />
    <main>
      <About />
      <Products productsData={productsData} />
    </main>
  </div>
);

export default Index;
