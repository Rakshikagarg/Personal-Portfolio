import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="f-logo">
        <div className="nav-diamond" />
        Rakshika
      </div>
      <p>© 2026 Rakshika — Built with MERN Stack</p>
      <div className="f-socials">
        <a href="https://github.com/Rakshikagarg" className="f-soc" target="_blank" rel="noreferrer">GH</a>
        <a href="https://www.linkedin.com/in/rakshika-garg-a69912285/" className="f-soc" target="_blank" rel="noreferrer">in</a>
        <a href="mailto:gargrakshika@gmail.com" className="f-soc">@</a>
      </div>
    </footer>
  );
}
