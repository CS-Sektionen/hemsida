import { useState } from 'react';
import { Link } from 'react-router-dom';

const navSections = [
  {
    label: 'Om sektionen',
    items: [
      { to: '/styrelsen', label: 'Styrelsen' },
      { to: '/dokument', label: 'Dokument' },
      { to: '/sektionsmote', label: 'Sektionsmöten' },
    ],
  },
  {
    label: 'Event',
    items: [
      { to: '/kalender', label: 'Kalender' },
      { to: '/aktiviteter', label: 'Aktiviteter' },
    ],
  },
];

type HeaderProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
};

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  function toggleDropdown(index: number) {
    setOpenDropdown((current) => (current === index ? null : index));
  }

  function closeAll() {
    setOpenDropdown(null);
  }

  return (
    <header onClick={closeAll}>
      <nav className="navbar-wide">
        <ul className="header-list1">
          {navSections.map((section, index) => (
            <li key={section.label}>
              <button
                className={`navitem-has-children ${openDropdown === index ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(index);
                }}
              >
                {section.label}
                <img src="/Images/line-angle-down-icon.svg" alt="" />
              </button>
              <ul
                className={`navitem-children ${openDropdown === index ? 'active' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                {section.items.map((item) => (
                  <li className="navitem-has-no-children" key={item.to}>
                    <Link to={item.to} onClick={closeAll}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="navitem-has-no-children">
            <Link to="/undergrupper">Undergrupper</Link>
          </li>
        </ul>
        <ul className="header-list2">
          <li className="navitem-has-no-children">
            <Link to="/nystudent">Ny student</Link>
          </li>
          <li className="navitem-has-no-children">
            <Link to="/foretag">För företag</Link>
          </li>
          <li className="navitem-has-no-children">
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>

      <nav className="navbar-resp">
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <ul className="header-list">
            {navSections.map((section, index) => (
              <li key={section.label}>
                <button
                  className={`navitem-has-children ${openDropdown === index ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(index);
                  }}
                >
                  {section.label}
                  <img src="/Images/line-angle-down-icon.svg" alt="" />
                </button>
                <ul
                  className={`navitem-children ${openDropdown === index ? 'active' : ''}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {section.items.map((item) => (
                    <li className="navitem-has-no-children" key={item.to}>
                      <Link to={item.to} onClick={() => setSidebarOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="navitem-has-no-children">
              <Link to="/undergrupper" onClick={() => setSidebarOpen(false)}>
                Undergrupper
              </Link>
            </li>
            <li className="navitem-has-no-children">
              <Link to="/nystudent" onClick={() => setSidebarOpen(false)}>
                Ny student
              </Link>
            </li>
            <li className="navitem-has-no-children">
              <Link to="/foretag" onClick={() => setSidebarOpen(false)}>
                För företag
              </Link>
            </li>
            <li className="navitem-has-no-children">
              <Link to="/kontakt" onClick={() => setSidebarOpen(false)}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <button
          className={`hamburger ${sidebarOpen ? 'open' : ''}`}
          onClick={() => setSidebarOpen((prev) => !prev)}
          aria-label={sidebarOpen ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={sidebarOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

      </nav>
    </header>
  );
}

type HomeLogoProps = {
  setSidebarOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
};

export function HomeLogo({ setSidebarOpen }: HomeLogoProps) {
  return (
    <div className="home-logo">
      <Link className="logo-link" to="/" hrefLang="sv" onClick={() => setSidebarOpen(false)}>
        <span>
          <img src="/Images/CS-logga.png" alt="Länk till huvudsidan" />
        </span>
      </Link>
    </div>
  );
}
