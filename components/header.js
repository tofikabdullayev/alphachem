import Link from 'next/link';

const Header = () => (
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
            <li className="nav-item active">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a>About us</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a>Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
