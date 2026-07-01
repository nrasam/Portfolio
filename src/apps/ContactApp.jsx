import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import styles from "./ContactApp.module.css";

function ContactApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();
    // alert("Message sent! Name: " + formData.name);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Get In Touch</h1>
          <p className={styles.pageSubtitle}>
            Let me know what you're team is working on and how I can help!
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Info */}
          <div>
            <div className={styles.contactInfoBox}>
              <h2 className={styles.infoTitle}>Contact Info</h2>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconBoxBlue}>
                    <Mail />
                  </div>
                  <div>
                    <div className={styles.infoLabel}>Email</div>
                    <div className={styles.infoValue}>
                      novell.rasam@gmail.com
                    </div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconBoxGreen}>
                    <Phone />
                  </div>
                  <div>
                    <div className={styles.infoLabel}>Phone</div>
                    <div className={styles.infoValue}>+1 (416) 576-4890</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconBoxPurple}>
                    <MapPin />
                  </div>
                  <div>
                    <div className={styles.infoLabel}>Location</div>
                    <div className={styles.infoValue}>Vaughan, ON, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialBox}>
              <h2 className={styles.socialTitle}>Connect With Me</h2>
              <div className={styles.socialList}>
                <a
                  href="https://github.com/nrasam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <div className={styles.socialIconGithub}>
                    <SiGithub />
                  </div>
                  <div>
                    <div className={styles.socialName}>GitHub</div>
                    <div className={styles.socialHandle}>@nrasam</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/novell-rasam-085467204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <div className={styles.socialIconLinkedin}>
                    <FaLinkedin />
                  </div>
                  <div>
                    <div className={styles.socialName}>LinkedIn</div>
                    <div className={styles.socialHandle}>Novell Rasam</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formBox}>
            <h2 className={styles.formTitle}>Send a Message</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="John Smith"
                  maxLength={30}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="john@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Portfolio Inquiry"
                  maxLength={100}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder="I love the website, tell me more about..."
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <Send />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactApp;
