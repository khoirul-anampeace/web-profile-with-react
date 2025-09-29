import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🐱' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.brand}>
              <h3 className={styles.brandName}>Portfolio</h3>
              <p className={styles.brandDescription}>
                Passionate full-stack developer creating innovative solutions 
                with modern technologies and clean code practices.
              </p>
            </div>
            
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <nav className={styles.footerNav}>
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className={styles.footerLink}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <a href="khoirul130203@gmail.com" className={styles.contactLink}>
                📧 khoirul130203@gmail.com
              </a>
              <a href="tel:+62123456789" className={styles.contactLink}>
                📱 +62 8222 8008 055
              </a>
              <span className={styles.contactLink}>
                📍 Jember, Indonesia
              </span>
            </div>
            
            <div className={styles.availability}>
              <span className={styles.statusIndicator}></span>
              Not Available for freelance work
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} K. Anam Web Profile. All rights reserved.</p>
            {/* <p className={styles.madeWith}>
              Made with ❤️ using React.js
            </p> */}
          </div>
          
          <button 
            onClick={scrollToTop}
            className={styles.scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;