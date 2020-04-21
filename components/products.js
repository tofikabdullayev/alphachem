import { i18n } from '../i18n';

class Products extends React.Component {
  componentDidMount() {
    $('.mu-imglink').magnificPopup({
      type: 'image',
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
      },
    });
  }
  render() {
    const products = this.props.productsData;

    const { t } = this.props;
    return (
      <section id="mu-portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-portfolio-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>{t('products_title')}</h2>
                      <p>{t('products_description')}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="mu-portfolio-content">
                    <div className="filtr-container">
                      {products &&
                        products.map((product) => (
                          <div
                            className="col-xs-6 col-sm-6 col-md-4 filtr-item"
                            key={JSON.stringify(product.title)}
                          >
                            <a
                              className="mu-imglink"
                              href={product.imageSrc}
                              title={product.title[i18n.language]}
                            >
                              <img
                                className="img-responsive"
                                src={product.imageSrc}
                                alt="image"
                              />
                              <div className="mu-filter-item-content">
                                <h4 className="mu-filter-item-title">
                                  {product.title[i18n.language]}
                                </h4>
                                <span className="fa fa-long-arrow-right"></span>
                              </div>
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Products;
