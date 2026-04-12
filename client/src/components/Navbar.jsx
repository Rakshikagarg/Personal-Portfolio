import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="nav-diamond" />
        Rakshika Garg
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About me</a></li>
        <li><a href="#edu" onClick={closeMenu}>Resume</a></li>
        <li><a href="#projects" onClick={closeMenu}>Work</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
      
<div className="nav-right">
      <a
  href="/cv/rakshika-garg-cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-cv"
>
  CV
</a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Get in touch!
        </a>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className="theme-toggle__label">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </span>
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
