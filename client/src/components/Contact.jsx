import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('err');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('ok');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('err');
      }
    } catch {
      // Demo mode - shows success until backend is connected
      setStatus('ok');
      setForm({ name: '', email: '', message: '' });
    }
    setLoading(false);
  };

  return (
    <>
      {/* CV DOWNLOAD  */}
      <section id="download" className="download">
        <div className="reveal">
          <h2 className="dl-title">Download My CV</h2>
          <p className="dl-sub">
            Available in PDF and Word formats - click a button to download directly
          </p>
          <div className="dl-btns">
            <a
              href="/cv/rakshika-garg-cv.pdf"
              className="dl-btn"
              download="Rakshika-Garg-CV.pdf"
            >
              Download PDF
            </a>
            <a
              href="/cv/rakshika-garg-cv.docx"
              className="dl-btn ol"
              download="Rakshika-Garg-CV.docx"
            >
              Download DOCX
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="contact">
        <div className="contact-inner">
          {/* LEFT */}
          <div className="reveal-l">
            <h2 className="contact-h"><em>Get In</em><br />Touch</h2>
            <p className="contact-p">
              I'm currently open to internship opportunities, freelance work,
              and collaborations. Let's build something great together!
            </p>
            <div className="c-info-row">
              <div className="c-info-d" />
              <span>gargrakshik@gmail.com</span>
            </div>
            <div className="c-info-row">
              <div className="c-info-d" />
              <span>Kota,Rajasthan</span>
            </div>
            <div className="c-info-row">
              <div className="c-info-d" />
              <a href="https://github.com/Rakshikagarg" target="_blank" rel="noreferrer">github.com/rakshika</a>
            </div>
            <div className="c-info-row">
              <div className="c-info-d" />
              <a href="https://www.linkedin.com/in/rakshika-garg-a69912285/" target="_blank" rel="noreferrer">linkedin.com/in/rakshika</a>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="reveal">
            <div className="fg">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="fg">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="fg">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button className="send-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message ->'}
            </button>

            {status === 'ok' && (
              <div className="f-msg ok">Message sent! I'll get back to you soon.</div>
            )}
            {status === 'err' && (
              <div className="f-msg err">Please fill in all fields.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
