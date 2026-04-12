import './Projects.css';

const projects = [
  {
    num: '01',
    name: 'Weather App',
    desc: 'This web app allows users to search any city and view real-time weather conditions, along with 5-day and hourly forecasts.',
    tech: ['HTML', 'JavaScript', 'CSS', 'OpenWeatherMap API'],
    github: 'https://github.com/Rakshikagarg/Weather-App',
    status: 'Completed',
  },
  {
    num: '02',
    name: 'To-Do List',
    desc: 'It is an app that helps organize your day by listing tasks and allowing you to mark them as complete.',
    tech: ['HTML', 'JavaScript', 'CSS'],
    github: 'https://github.com/Rakshikagarg/ToDoList-App',
    status: 'Completed',
  },
  {
    num: '03',
    name: 'GRiD: Grow, Rise and Dominate',
    desc: 'A full-stack web platform designed to help users discover career paths, learn new skills, and access job opportunities — all in one place.',
    tech: ['TypeScript', 'HTML', 'CSS', 'Supabase', 'Firebase', 'React'],
    github: 'https://github.com/Rakshikagarg/GRiD',
    status: 'Completed',
  },
  {
    num: '04',
    name: 'Explainable Reputation Decay System',
    desc: 'A blockchain-based reputation system built on Solidity smart contracts with transparent decay logic.',
    tech: ['Solidity', 'Ethereum', 'React'],
    github: 'https://github.com/Dhruv-aka-Dp/Explainable-Reputation-Decay-System-ERDS-',
    status: 'Currently Building',
  },
  {
    num: '05',
    name: 'RoadSaarthi',
    desc: 'A smart navigation and assistance platform designed to improve road travel experience with real-time insights.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/Dhruv-aka-Dp/RoadSaarthi',
    status: 'Currently Building',
  },
  {
    num: '06',
    name: 'Performance Analyzer for TCP, UDP, and QUIC',
    desc: 'A network performance analysis tool comparing protocols using packet-level inspection and custom implementations.',
    tech: ['Wireshark', 'OpenSSL', 'GCC', 'DNS Client'],
    github: '#',
    status: 'Completed',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">

        <div className="projects-hdr">
          <h2 className="projects-h reveal">
            Featured<br /><em>Work</em>
          </h2>
          <p className="projects-ct reveal">0{projects.length} Projects</p>
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <div className="proj-card" key={i}>
              <div className="proj-num">{p.num}</div>
              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-desc">{p.desc}</p>

              <div className="proj-techs">
                {p.tech.map((t, ti) => (
                  <span className="proj-tech" key={ti}>{t}</span>
                ))}
              </div>

             <div className="proj-links">
  <a
    href={p.github}
    className="proj-link"
    target="_blank"
    rel="noreferrer"
  >
    ⌥ GitHub
  </a>

  <span className="proj-link">
    • {p.status}
  </span>
</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}