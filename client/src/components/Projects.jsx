
import './Projects.css';

const projects = [
  {
    num: '01',
    name: 'CortexGate – Self-Hosted AI Gateway',
    desc: 'Built a self-hosted AI gateway exposing a single OpenAI-compatible endpoint across Groq and Gemini, with automatic provider failover. Implemented semantic caching using Gemini embeddings and cosine similarity to reduce token costs, along with a dashboard for cost analysis.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Groq', 'Gemini API'],
    github: '#',
    status: 'In Progress',
  },
  {
    num: '02',
    name: 'RoadSaarthi – Smart Pothole & Road Issue Reporter',
    desc: 'A full-stack civic-tech platform where citizens report potholes through photos. Uses server-side GPS extraction from image EXIF data, MongoDB geospatial aggregation to detect complaint hotspots, Redis caching, and React Leaflet heatmaps for PWD staff.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'React', 'React Leaflet'],
    github: 'https://github.com/Dhruv-aka-Dp/RoadSaarthi',
    status: 'Currently Building',
  },
  {
    num: '03',
    name: 'EventSphere – City-Wide & Campus Event Platform',
    desc: 'A platform for discovering city-wide and campus events, registering individually or in teams, finding collaborators, and connecting with attendees. Includes organizer tools, team formation, participation applications, communities, connections, and in-app notifications.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM'],
    github: 'https://github.com/Asijain019/eventsphere',
    demo: 'https://eventsphere-rosy-nine.vercel.app/',
    status: 'Completed',
  },
  {
    num: '04',
    name: 'Explainable Reputation Decay System',
    desc: 'Designed a blockchain-based reputation system where scores change through interactions and decay over time, allowing inactivity to gradually lower trust. Includes an explainability layer that records structured, human-readable reasons for every score change on the ledger.',
    tech: ['Solidity', 'Ethereum', 'Smart Contracts'],
    github: 'https://github.com/Dhruv-aka-Dp/Explainable-Reputation-Decay-System-ERDS-',
    status: 'Completed',
  },
  {
    num: '05',
    name: 'Performance Analyzer for TCP, UDP, and QUIC',
    desc: 'Built a client-server testbed using iperf and socket programming to compare TCP, UDP, and QUIC protocols. Analyzed throughput, latency, packet loss, and connection setup time under different traffic scenarios.',
    tech: ['C', 'Python', 'Socket Programming', 'OpenSSL', 'Wireshark'],
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
          <p className="projects-ct reveal">
            {String(projects.length).padStart(2, '0')} Projects
          </p>
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <div className="proj-card" key={i}>
              <div className="proj-num">{p.num}</div>

              <h3 className="proj-name">{p.name}</h3>

              <p className="proj-desc">{p.desc}</p>

              <div className="proj-techs">
                {p.tech.map((t, ti) => (
                  <span className="proj-tech" key={ti}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="proj-links">
                {p.github !== '#' && (
                  <a
                    href={p.github}
                    className="proj-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ⌥ GitHub
                  </a>
                )}

                {p.demo && (
                  <a
                    href={p.demo}
                    className="proj-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ↗ Live Demo
                  </a>
                )}

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
