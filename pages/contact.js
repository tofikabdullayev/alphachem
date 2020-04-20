import Header from '../components/header';
import PageHeader from '../components/pageHeader';
import Head from 'next/head';
import { withTranslation } from '../i18n';
const ContactPage = ({ t }) => (
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
                    <div className="col-md-12">
                      <div className="mu-single-footer">
                        <h3> {t('contact_info')}</h3>
                        <ul className="list-unstyled">
                          <li className="media">
                            <span className="fa fa-home"></span>
                            <div className="media-body">
                              <p>349 Main St, Deseronto, ON K0K 1X0, Canada</p>
                            </div>
                          </li>
                          <li className="media">
                            <span className="fa fa-phone"></span>
                            <div className="media-body">
                              <p>+00 123 456 789 00</p>
                              <p>+ 00 254 632 548 00</p>
                            </div>
                          </li>
                          <li className="media">
                            <span className="fa fa-envelope"></span>
                            <div className="media-body">
                              <p>support@bhero.com</p>
                              <p>help.behero@gmail.com</p>
                            </div>
                          </li>
                        </ul>
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
    `}</style>
  </div>
);

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(ContactPage);
