const About = ({ t }) => (
  <section id="mu-about">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-about-area">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-title">
                  <h2>{t('about_title')}</h2>
                  <p>{t('about_description')}</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mu-about-left">
                  <img className="" src="/slider/about.jpg" alt="img" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mu-about-right">
                  <ul>
                    <li>
                      <h3>Our Mission</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                      </p>
                    </li>
                    <li>
                      <h3>Our Vision</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                      </p>
                    </li>
                    <li>
                      <h3>Our Valuse</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default About;
