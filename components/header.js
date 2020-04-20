import Link from 'next/link';

import LanguageSwitcher from '../components/languageSwitcher';
import { i18n } from '../i18n';

const routes = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About us',
  },
  {
    path: '/products',
    title: 'Products',
  },
  {
    path: '/contact',
    title: 'Contact us',
  },
];

const Header = ({ pageTitle }) => {
  function changeLang(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <header id="mu-hero">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light mu-navbar">
          <Link href="/">
            <a className="navbar-brand mu-logo">
              <img src="/alpha_logo_colored.svg" alt="" />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mu-navbar-nav">
              {routes.map((route, index) => (
                <li
                  className={`nav-item ${
                    route.title === pageTitle && 'active'
                  }`}
                  key={index}
                >
                  <Link href={route.path}>
                    <a>{route.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <LanguageSwitcher changeLang={changeLang} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
