import React from 'react';
import styles from './About.module.css';
import Button from '../UI/Button';

const About = () => {
  const stats = [
    { number: '15', label: 'Projects Completed' },
    { number: '1.5 yr', label: 'Freelance Experience' },
    { number: '2', label: 'Internship Programs' },
    { number: '7', label: 'Certificates' }
  ];

  const handleDownloadCV = () => {
    // In a real application, you would have a CV file to download
    alert('CV download functionality would be implemented here');
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.profileImage}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.avatar}>👨‍💻</div>
              </div>
              <div className={styles.imageBackground}></div>
            </div>
          </div>
          
          <div className={styles.textSection}>
            <div className={styles.description}>
              <p>
                Hello!, I am a passionate Web Developer with expertise in creating innovative 
                digital solutions. I have a strong background in web development and love to 
                find creative ways to solve complex problems.
              </p>
              <p>
                My focus on modern technologies like React JS, Laravel, Node.js, and UI/UX design 
                comes from my professional experience and continuous learning. I believe in writing 
                clean, maintainable code and creating user-centric applications.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community.
              </p>
            </div>
            
            <Button onClick={handleDownloadCV} variant="primary" className={styles.cvButton}>
              Download CV
            </Button>
          </div>
        </div>
        
        <div className={styles.statsSection}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;