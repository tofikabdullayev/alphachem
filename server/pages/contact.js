import Header from '../components/header';
import PageHeader from '../components/pageHeader';
import Head from 'next/head';
import { withTranslation, i18n } from '../i18n';
import axios from 'axios';

const ContactPage = ({ t, contactData }) => (
  <div>
    <Head>
      <title>Alphachem - Contacts</title>
    </Head>
    <Header pageTitle="Contact us" t={t} />
    <PageHeader title="/contact" t={t} />
    <main>
      <section id="mu-contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-contact-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>{t('contact_say_hello')}</h2>
                      <p>{t('contact_description')}</p>
                    </div>
                  </div>
                </div>
                <div className="mu-contact-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mu-single-footer">
                        <h3> {t('contact_info')}</h3>
                        <ul className="list-unstyled">
                          <li className="media">
                            <span className="fa fa-home"></span>
                            <div className="media-body">
                              <p>{contactData.adress[i18n.language]}</p>
                            </div>
                          </li>
                          <li className="media">
                            <span className="fa fa-phone"></span>
                            <div className="media-body">
                              {contactData.phones &&
                                contactData.phones.map((phone) => (
                                  <p key={phone}>{phone}</p>
                                ))}
                            </div>
                          </li>
                          <li className="media">
                            <span className="fa fa-envelope"></span>
                            <div className="media-body">
                              {contactData.emails &&
                                contactData.emails.map((email) => (
                                  <p key={email}>{email}</p>
                                ))}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe
                            width="100%"
                            height="500"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?ll=40.3834610547961%2C49.89322600000003&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <style jsx>{`
      .mu-contact-content {
        padding: 0;
      }
      .mu-single-footer .list-unstyled li {
        justify-content: center;
      }
      .media-body {
        flex: inherit;
      }
      .mapouter {
        position: relative;
        text-align: right;
        height: 500px;
        width: 600px;
      }
      .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 500px;
        width: 600px;
      }
    `}</style>
  </div>
);

ContactPage.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const contactData = await (await axios.get(`${baseUrl}/api/contact`)).data;
  return {
    namespacesRequired: ['common'],
    contactData,
  };
};

export default withTranslation('common')(ContactPage);
