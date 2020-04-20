import { useState } from 'react';

const langs = ['az', 'en', 'ru'];

const LanguageSwitcher = ({ selectedlang, changeLang }) => {
  const [open, setOpened] = useState(false);
  const setLang = (lang) => {
    changeLang(lang);
    setOpened(false);
  };

  return (
    <div className="lang-switcher">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpened(true);
        }}
        className={open ? 'opened' : ''}
      >
        {selectedlang}
      </a>
      <ul className={open ? 'opened' : ''}>
        {langs.map(
          (lang) =>
            lang !== selectedlang && (
              <li key={lang} onClick={() => setLang(lang)}>
                {lang}
              </li>
            )
        )}
      </ul>

      <style jsx>{`
      .lang-switcher{
          position: relative;
      }
      @media(max-width: 640px){
            .lang-switcher{
                width: 100%
            }
        }
        .lang-switcher ul {
            position: absolute;
            top: 39px;
            z-index: 10;
          list-style: none;
          margin: 0;
          padding: 0;
          border-radius: 0 0 15px 15px;
          background: #eee;
          overflow: hidden;
          height: 0;
          width: 100%;
        }
        .lang-switcher ul.opened {
          height: auto;
          transition: all 0.3s ease-in-out;
        }
        .lang-switcher ul li,
        a {
          text-transform: uppercase; 
          cursor pointer;
          list-style: none;
          color: #0091ea;
          display: block;
          font-size: 14px;
          font-weight: 700;
          padding: 9px;
        }
        a{
            border-radius: 15px;
            background: #eee;
        }
        a.opened{
            border-radius: 15px 15px 0 0;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
