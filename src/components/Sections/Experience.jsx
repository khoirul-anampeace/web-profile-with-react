import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: 'Nov 2024 - Present',
      position: 'Full-Stack Web Developer',
      company: 'Onlenkan.com',
      type: 'Fulltime',
      location: 'Remote',
      description: [
        'Joining the onlenkan project division, responsible for working on client-ordered projects',
        'Building custom websites from scratch according to client requests',
        'Using latest technologies such as Laravel, Vue.js and React.js frameworks',
        'Collaborating with team members to deliver high-quality solutions'
      ],
      technologies: ['Laravel', 'Vue.js', 'React.js', 'MySQL', 'Git'],
      current: true
    },
    {
      id: 2,
      period: 'Feb 2023 - Sep 2024',
      position: 'Full-Stack Web Developer',
      company: 'Freelancer',
      type: 'Freelance',
      location: 'Remote',
      description: [
        'Developing various websites based on client needs and requirements',
        'Created company profile websites, wedding invitations, and e-commerce platforms',
        'Built cafe cashier systems and inventory management solutions',
        'Collaborating with colleagues on large-scale collaborative projects',
        'Maintained long-term client relationships and provided ongoing support'
      ],
      technologies: ['PHP', 'Laravel', 'React.js', 'MySQL', 'JavaScript'],
      current: false
    },
    {
      id: 3,
      period: 'Sep - Dec 2023',
      position: 'Web Developer',
      company: 'PT Industri Kereta Api (Persero)',
      type: 'Internship',
      location: 'Madiun, Indonesia',
      description: [
        'Optimized the Inka Office website to enhance speed and efficiency',
        'Refined existing features to better meet employee-specific needs',
        'Developed new features for Research and Development Division (Risbang)',
        'Collaborated with senior developers on performance improvements',
        'Participated in code reviews and testing processes'
      ],
      technologies: ['PHP', 'MySQL', 'jQuery', 'HTML/CSS', 'Bootstrap'],
      current: false
    },
    {
      id: 4,
      period: 'Aug - Dec 2019',
      position: 'Web Developer',
      company: 'Onlenkan.com',
      type: 'Internship',
      location: 'Probolinggo, Indonesia',
      description: [
        'Learned UI/UX design principles and best practices',
        'Developed a simple e-commerce website with basic functionality',
        'Created promotional videos using After Effects',
        'Participated in UI/UX events and workshops organized by company',
        'Attended weekly internal exhibitions to practice public speaking skills'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'After Effects'],
      current: false
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`${styles.timelineItem} ${exp.current ? styles.current : ''}`}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                <div className={styles.markerLine}></div>
              </div>
              
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.period}>{exp.period}</div>
                  <div className={styles.typebadge}>
                    {exp.type}
                    {exp.current && <span className={styles.currentIndicator}>Current</span>}
                  </div>
                </div>
                
                <h3 className={styles.position}>{exp.position}</h3>
                <h4 className={styles.company}>
                  {exp.company}
                  <span className={styles.location}>📍 {exp.location}</span>
                </h4>
                
                <ul className={styles.description}>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                
                <div className={styles.technologies}>
                  <span className={styles.techLabel}>Technologies:</span>
                  <div className={styles.techTags}>
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;