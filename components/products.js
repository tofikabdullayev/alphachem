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
    return (
      <section id="mu-portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-portfolio-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>Our Recent Project</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa cum
                        sociis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="mu-portfolio-content">
                    <div className="filtr-container">
                      <div className="col-xs-6 col-sm-6 col-md-4 filtr-item">
                        <a
                          className="mu-imglink"
                          href="/assets/images/portfolio/img-1.jpg"
                          title="PAINTING"
                        >
                          <img
                            className="img-responsive"
                            src="/assets/images/portfolio/img-1.jpg"
                            alt="image"
                          />
                          <div className="mu-filter-item-content">
                            <h4 className="mu-filter-item-title">PAINTING</h4>
                            <span className="fa fa-long-arrow-right"></span>
                          </div>
                        </a>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-4 filtr-item">
                        <a
                          className="mu-imglink"
                          href="/assets/images/portfolio/img-2.jpg"
                          title="BRANDING"
                        >
                          <img
                            className="img-responsive"
                            src="/assets/images/portfolio/img-2.jpg"
                            alt="image"
                          />
                          <div className="mu-filter-item-content">
                            <h4 className="mu-filter-item-title">BRANDING</h4>
                            <span className="fa fa-long-arrow-right"></span>
                          </div>
                        </a>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-4 filtr-item">
                        <a
                          className="mu-imglink"
                          href="/assets/images/portfolio/img-3.jpg"
                          title="E-COMMERCE"
                        >
                          <img
                            className="img-responsive"
                            src="/assets/images/portfolio/img-3.jpg"
                            alt="image"
                          />
                          <div className="mu-filter-item-content">
                            <h4 className="mu-filter-item-title">E-COMMERCE</h4>
                            <span className="fa fa-long-arrow-right"></span>
                          </div>
                        </a>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-4 filtr-item">
                        <a
                          className="mu-imglink"
                          href="/assets/images/portfolio/img-4.jpg"
                          title="WEB DESIGN"
                        >
                          <img
                            className="img-responsive"
                            src="/assets/images/portfolio/img-4.jpg"
                            alt="image"
                          />
                          <div className="mu-filter-item-content">
                            <h4 className="mu-filter-item-title">WEB DESIGN</h4>
                            <span className="fa fa-long-arrow-right"></span>
                          </div>
                        </a>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-4 filtr-item">
                        <a
                          className="mu-imglink"
                          href="/assets/images/portfolio/img-5.jpg"
                          title="MOBILE DEVELOPMENT"
                        >
                          <img
                            className="img-responsive"
                            src="/assets/images/portfolio/img-5.jpg"
                            alt="image"
                          />
                          <div className="mu-filter-item-content">
                            <h4 className="mu-filter-item-title"></h4>
                            <span className="fa fa-long-arrow-right"></span>
                          </div>
                        </a>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-4 filtr-item">
                        <a
                          className="mu-imglink"
                          href="/assets/images/portfolio/img-6.jpg"
                          title="BRANDING"
                        >
                          <img
                            className="img-responsive"
                            src="/assets/images/portfolio/img-6.jpg"
                            alt="image"
                          />
                          <div className="mu-filter-item-content">
                            <h4 className="mu-filter-item-title">BRANDING</h4>
                            <span className="fa fa-long-arrow-right"></span>
                          </div>
                        </a>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-4 filtr-item">
                        <a
                          className="mu-imglink"
                          href="/assets/images/portfolio/img-7.jpg"
                          title="E-COMMERCE"
                        >
                          <img
                            className="img-responsive"
                            src="/assets/images/portfolio/img-7.jpg"
                            alt="image"
                          />
                          <div className="mu-filter-item-content">
                            <h4 className="mu-filter-item-title">E-COMMERCE</h4>
                            <span className="fa fa-long-arrow-right"></span>
                          </div>
                        </a>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-4 filtr-item">
                        <a
                          className="mu-imglink"
                          href="/assets/images/portfolio/img-8.jpg"
                          title="PAINTING"
                        >
                          <img
                            className="img-responsive"
                            src="/assets/images/portfolio/img-8.jpg"
                            alt="image"
                          />
                          <div className="mu-filter-item-content">
                            <h4 className="mu-filter-item-title">PAINTING</h4>
                            <span className="fa fa-long-arrow-right"></span>
                          </div>
                        </a>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-4 filtr-item">
                        <a
                          className="mu-imglink"
                          href="/assets/images/portfolio/img-4.jpg"
                          title="WEB DESIGN"
                        >
                          <img
                            className="img-responsive"
                            src="/assets/images/portfolio/img-4.jpg"
                            alt="image"
                          />
                          <div className="mu-filter-item-content">
                            <h4 className="mu-filter-item-title">WEB DESIGN</h4>
                            <span className="fa fa-long-arrow-right"></span>
                          </div>
                        </a>
                      </div>
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
