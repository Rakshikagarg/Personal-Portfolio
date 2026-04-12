import './Education.css';

const education = [
  { year: '2023 — Now', title: 'B.Tech — Computer Science', place: 'JK LAKSHMIPAT UNIVERSITY' },
  { year: '2025 ', title: 'semester Exchange ', place: 'IIT JAMMU ' },
  { year: '2021 — 2022', title: 'Higher Secondary (12th)', place: 'Vidhya Mandir Senior Secondary School ' },
  { year: '2019 — 2020', title: 'Senior Secondary (10th)', place: 'Saint Pauls Senior Secondary School ' },
];

const experience = [
  { year: '2025', title: 'Full Stack  Intern', place: 'AIC-JKLU' },
  { year: '2024-2025', title: 'Startup Activity Cordinator ', place: 'IIC-JKLU' },
];

const traits = ['#Problem Solver', '#Team Player', '#Fast Learner', '#Creative Coder'];

export default function Education() {
  return (
    <section id="edu" className="edu">
      <div className="edu-inner">

        {/* EDUCATION */}
        <div className="edu-block reveal-l">
          <h2>Education</h2>
          {education.map((item, i) => (
            <div className="tl-row" key={i}>
              <div className="tl-d" />
              <div className="tl-yr">{item.year}</div>
              <div className="tl-info">
                <h4>{item.title}</h4>
                <p>{item.place}</p>
              </div>
            </div>
          ))}
        </div>

        {/* EXPERIENCE */}
        <div className="exp-block reveal">
          <h2>Experience</h2>
          {experience.map((item, i) => (
            <div className="exp-row" key={i}>
              <div className="exp-d" />
              <div className="exp-yr">{item.year}</div>
              <div className="exp-info">
                <h4>{item.title}</h4>
                <p>{item.place}</p>
              </div>
            </div>
          ))}
          <div className="chips">
            {traits.map((t, i) => (
              <span className="chip" key={i}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
