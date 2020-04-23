import { i18n } from '../i18n';

const About = ({ t, aboutData }) => (
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
                    {aboutData &&
                      aboutData.map((about) => (
                        <li key={about._id}>
                          <h3>{about.title[i18n.language]}</h3>
                          <p>{about.description[i18n.language]}</p>
                        </li>
                      ))}
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
