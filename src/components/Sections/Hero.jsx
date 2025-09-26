import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import Button from '../UI/Button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Web Developer', 'Full-Stack Developer', 'React Developer', 'UI/UX Enthusiast'];

  useEffect(() => {
    const current = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.greeting}>Hello, I'm</div>
            <h1 className={styles.name}>Your Name</h1>
            <h2 className={styles.title}>
              I am a <span className={styles.typewriter}>{displayText}</span>
              <span className={styles.cursor}>|</span>
            </h2>
            <p className={styles.description}>
              Passionate developer creating innovative solutions with modern technologies. 
              Experienced in building responsive web applications and user-friendly interfaces.
            </p>
            <div className={styles.buttons}>
              <Button onClick={scrollToContact} variant="primary">
                Get In Touch
              </Button>
              <Button onClick={scrollToAbout} variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.profileImage}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.avatar}>👨‍💻</div>
              </div>
              <div className={styles.imageDecorations}>
                <div className={styles.decoration1}></div>
                <div className={styles.decoration2}></div>
                <div className={styles.decoration3}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollText}>Scroll Please</div>
          <div className={styles.scrollArrow} onClick={scrollToAbout}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;