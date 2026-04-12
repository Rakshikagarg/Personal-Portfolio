import './About.css';
import aboutPhoto from '../assets/about-photo.jpg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        {/* LEFT - text */}
        <div className="reveal-l">
          <h1 className="hello-h">
            Hello,<br />I'm <span>Rakshika</span>!
          </h1>
          <p className="about-p">
            I am a Computer Science student passionate about building modern, user-focused
            web applications. Currently, I am strengthening my skills in full-stack
            development using the MERN stack, creating clean, functional solutions that
            solve real-world problems.
          </p>
          <p className="about-p">
            Alongside development, I am exploring my creative side and developing a
            growing interest in UI/UX design, aiming to craft intuitive and visually
            engaging digital experiences. I enjoy learning new technologies, contributing
            to projects, and turning ideas into polished products.
          </p>
          <a
            href="https://www.linkedin.com/in/rakshika-garg-a69912285/"
            className="about-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn &nbsp; linkedin.com/in/rakshika
          </a>
        </div>

        {/* RIGHT - photo + tags + contact box */}
        <div className="about-right reveal">
          <div className="about-photo">
            <img src={aboutPhoto} alt="Rakshika" className="about-photo-img" />
            <div className="about-initials">R</div>
          </div>

          <div className="about-tag t1">CS Student</div>
          <div className="about-tag t2">Open to Internships</div>

          <div className="contact-box">
            <h3>Contact</h3>
            <div className="c-row">Kota, Rajasthan</div>
            <div className="c-row">gargrakshika@gmail.com</div>
            <div className="c-row">+91 8949849679</div>
          </div>
        </div>
      </div>
    </section>
  );
}
