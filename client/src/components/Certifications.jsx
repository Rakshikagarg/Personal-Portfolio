import './Certifications.css';

const certs = [
  { platform: 'Coursera /University of Michigan ', name: ' Programming for Everybody (Getting Started with Python)', link: 'https://www.coursera.org/account/accomplishments/verify/LDXRZTHA6FUQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
  { platform: 'Coursera / Duke University', name: ' Programming Fundamentals ', link: 'https://www.coursera.org/account/accomplishments/verify/BE2ZHS3BHVXS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
  { platform: 'infosys Springboard ', name: ' CProgramming', link: '#' },
  { platform: 'Coursera / GitHub', name: ' UI / UX Portfolio with GitHub', link: 'https://www.coursera.org/account/accomplishments/verify/PFD7RFR7APPR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project' },
  { platform: 'Coursera / Coursera Project Network', name: '  Using MySQL Database with PHP', link: 'https://www.coursera.org/account/accomplishments/verify/5WKJX0KPUCRT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project' },
  { platform: 'Coursera / Meta', name: '  Introduction to Front-End Development ', link: 'https://www.coursera.org/account/accomplishments/verify/GTKMLN7XT3JL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },

];

export default function Certifications() {
  return (
    <section id="certs" className="certs">
      <div className="certs-inner">
        <h2 className="certs-h reveal">
          Certifications &<br /><em>Achievements</em>
        </h2>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className="cert-card reveal" key={i}>
              <div className="cert-top">
                <div className="cert-d" />
                <span className="cert-plat">{c.platform}</span>
              </div>
              <h3 className="cert-name">{c.name}</h3>
              <a href={c.link} className="cert-a" target="_blank" rel="noreferrer">
                View Certificate ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
