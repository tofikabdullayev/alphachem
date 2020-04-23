import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="shortcut icon"
            type="image/icon"
            href="/assets/images/favicon.ico"
          />

          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
            integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
            crossOrigin="anonymous"
          />

          <link href="/assets/css/slick.css" rel="stylesheet" />

          <link href="/assets/css/magnific-popup.css" rel="stylesheet" />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/circlebars@1.0.3/dist/circle.css"
          />

          <link href="/style.css" rel="stylesheet" />

          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,500i,600,700"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,800"
            rel="stylesheet"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
            integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
            integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"
            crossOrigin="anonymous"
          ></script>

          <script type="text/javascript" src="/assets/js/slick.min.js"></script>

          <script
            type="text/javascript"
            src="/assets/js/jquery.magnific-popup.min.js"
          ></script>

          <script type="text/javascript" src="/assets/js/app.js"></script>

          <script type="text/javascript" src="/assets/js/custom.js"></script>
        </Head>
        <body>
          <a className="scrollToTop" href="#">
            <i className="fa fa-angle-up"></i>
          </a>
          <Main />

          <footer id="mu-footer">
            <div className="mu-footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-footer-bottom-area">
                      <p className="mu-copy-right">
                        &copy;&nbsp;{new Date().getFullYear()} Copyright &nbsp;
                        <a rel="nofollow" href="/">
                          Alphachem
                        </a>
                        . All right reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <NextScript />
        </body>
      </html>
    );
  }
}
