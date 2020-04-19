import Header from '../components/header';
import Products from '../components/products';
import PageHeader from '../components/pageHeader';

const productsData = {
  title: 'our products',
  description: 'our products bla bla bla blablalalsfdas lsdals das nasndas',
  products: [
    {
      title: 'Vaseline',
      imageSrc: '/products/vaseline.jpg',
    },
    {
      title: 'product - 1',
      imageSrc: '/products/1.jpg',
    },
    {
      title: 'product - 2',
      imageSrc: '/products/2.jpg',
    },
    {
      title: 'product - 3',
      imageSrc: '/products/3.jpg',
    },
    {
      title: 'product - 4',
      imageSrc: '/products/4.jpg',
    },
    {
      title: 'product - 6',
      imageSrc: '/products/6.jpg',
    },
    {
      title: 'product - 7',
      imageSrc: '/products/7.png',
    },
    {
      title: 'product - 8',
      imageSrc: '/products/8.jpg',
    },
    {
      title: 'product - 9',
      imageSrc: '/products/9.jpg',
    },
  ],
};

const ProductsPage = () => (
  <div>
    <Header pageTitle="Products" />
    <PageHeader title="Chemical products" />
    <main>
      <Products productsData={productsData} />
    </main>
  </div>
);

export default ProductsPage;
