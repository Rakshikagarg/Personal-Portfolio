import { useEffect, useRef } from 'react';
import './Skills.css';

const C = 2 * Math.PI * 55;

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', pct: 85 },
      { name: 'HTML & CSS', pct: 90 },
      { name: 'JavaScript', pct: 80 },
      { name: 'Tailwind CSS', pct: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', pct: 78 },
      { name: 'Express.js', pct: 75 },
      { name: 'MongoDB', pct: 72 },
      { name: 'REST APIs', pct: 80 },
    ],
  },
  {
    title: 'Tools & Tech',
    skills: [
      { name: 'Git & GitHub', pct: 85 },
      { name: 'Postman', pct: 70 },
      { name: 'Figma', pct: 65 },
      { name: 'VS Code', pct: 95 },
    ],
  },
];

const softSkills = [
  { name: 'Problem Solving', desc: 'Breaking down complex challenges' },
  { name: 'Team Collaboration', desc: 'Cross-functional communication' },
  { name: 'Agile & Git Workflow', desc: 'Scrum, sprints, version control' },
  { name: 'UI / UX Thinking', desc: 'User-centred design mindset' },
  { name: 'API Design', desc: 'RESTful, clean contracts' },
  { name: 'Database Design', desc: 'Schema planning & optimisation' },
];

function Ring({ pct }) {
  const wrapRef = useRef(null);
  const fgRef = useRef(null);
  const accentRef = useRef(null);
  const animated = useRef(false);

  function triggerAnimation() {
    if (animated.current) return;
    if (!fgRef.current || !accentRef.current) return;
    animated.current = true;

    const offset = C * (1 - pct / 100);
    fgRef.current.style.strokeDashoffset = offset;

    const totalFill = C * (pct / 100);
    const accentLen = Math.min(22, totalFill * 0.18);
    accentRef.current.style.strokeDasharray = `${accentLen} ${C - accentLen}`;
    accentRef.current.style.strokeDashoffset =
      C * (1 - pct / 100) - accentLen / 2;
  }

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const timeout = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        triggerAnimation();
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pct]);

  return (
    <div className="ring-wrap" ref={wrapRef}>
      <svg width="180" height="180" viewBox="0 0 140 140">
        <circle className="ring-bg" cx="70" cy="70" r="55" />
        <circle className="ring-fg" ref={fgRef} cx="70" cy="70" r="55" />
        <circle className="ring-accent" ref={accentRef} cx="70" cy="70" r="55" />
      </svg>
      <span className="ring-pct">{pct}%</span>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <div className="skills-inner">
          <div className="skills-header reveal">
            <h2 className="skills-h">
              Technical<br /><em>Skills</em>
            </h2>
            <div className="skills-subtitle">Proficiency Overview</div>
          </div>

          {skillGroups.map((group, gi) => (
            <div className="sg-section reveal" key={gi}>
              <div className="sg-title">{group.title}</div>
              <div className="circles-row">
                {group.skills.map((sk, si) => (
                  <div className="ring-item" key={si}>
                    <Ring pct={sk.pct} />
                    <div className="ring-name">{sk.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="soft-skills" className="soft-skills">
        <div className="soft-inner">
          <h2 className="soft-h reveal">
            Soft<br /><em>Skills</em>
          </h2>
          <span className="soft-tag reveal">Beyond the code</span>
          <div className="soft-grid">
            {softSkills.map((s, i) => (
              <div className="soft-badge reveal" key={i}>
                <div className="soft-badge-inner">
                  <span>{s.name}</span>
                  <span className="soft-desc">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}