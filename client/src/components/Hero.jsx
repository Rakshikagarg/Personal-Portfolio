import { useState, useEffect } from 'react';
import './Hero.css';
import profile from "../assets/profile.png";

const PORTFOLIO_LETTERS = ['P','O','R','T','F','O','L','I','O'];
const ROLES = ['CS STUDENT', 'UI/UX Learner', 'FULL STACK DEVELOPER'];

function useTypewriterRoles(roles, startDelay = 2400) {
  const [displayed, setDisplayed] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (currentRole >= roles.length) return;
    const role = roles[currentRole];
    if (currentChar < role.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev];
          next[currentRole] = (next[currentRole] || '') + role[currentChar];
          return next;
        });
        setCurrentChar(c => c + 1);
      }, 60);
      return () => clearTimeout(t);
    } else {
      if (currentRole < roles.length - 1) {
        const t = setTimeout(() => {
          setCurrentRole(r => r + 1);
          setCurrentChar(0);
        }, 300);
        return () => clearTimeout(t);
      }
    }
  }, [started, currentRole, currentChar, roles]);

  return displayed;
}

export default function Hero() {
  const displayedRoles = useTypewriterRoles(ROLES, 2400);

  return (
    <div className="hero">
      <nav className="hero__nav hero--fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="hero__nav-left">
          <span className="hero__nav-logo-diamond">&#9670;</span>
          <span className="hero__nav-logo-name">Rakshika Garg</span>
        </div>
        <ul className="hero__nav-links">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="hero__nav-cta">Get in touch!</button>
      </nav>

      <div className="hero__subnav hero--fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="hero__subnav-left">
          <div className="hero__crosshair">
            <div className="hero__crosshair-dot" />
          </div>
        </div>

        <ul className="hero__subnav-roles">
          {ROLES.map((role, i) => (
            <li key={role} className="hero__role-item">
              <span className="hero__role-text">{displayedRoles[i] || ''}</span>
              {displayedRoles[i] !== undefined &&
               displayedRoles[i].length < role.length && (
                <span className="hero__cursor">|</span>
              )}
            </li>
          ))}
          <li>
            <span className="hero__asterisk hero__asterisk--spin">&#10033;</span>
          </li>
        </ul>
      </div>

      <div className="hero__main">
        <div className="hero__portfolio-text">
          {PORTFOLIO_LETTERS.map((letter, i) => (
            <span
              key={i}
              className="hero__portfolio-letter"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="hero__center-group hero--pop-in" style={{ animationDelay: '1.5s' }}>
          <div className="hero__circle-wrapper">
            <div className="hero__amber-circle">
              <img src={profile} alt="profile" className="hero__circle-img" />
            </div>

            <svg
              className="hero__curved-text-svg hero--fade-up"
              style={{ animationDelay: '2.0s' }}
              viewBox="0 0 300 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path id="textArc" d="M 10,15 Q 150,75 290,15" />
              </defs>
              <text
                fontFamily="'Dancing Script', cursive"
                fontSize="32"
                fontWeight="700"
                fill="#f5a623"
              >
                <textPath href="#textArc" startOffset="50%" textAnchor="middle">
                  MERN Stack Developer
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="hero__bottom hero--fade-in" style={{ animationDelay: '2.2s' }}>
        <p className="hero__description">
          I love code and anything related to tech.<br />
          I seek the simplest and most functional solutions.
        </p>
        <button className="hero__scroll-btn">
          SCROLL DOWN
          <span className="hero__scroll-arrow">&#8595;</span>
        </button>
        <span className="hero__email">gargrakshik@gmail.com</span>
      </div>
    </div>
  );
}
