import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const educations = [
    {
      id: 1,
      period: 'Aug 2021 - Aug 2024',
      degree: 'Associate Degree',
      major: 'Informatics Management',
      institution: 'Politeknik Negeri Jember',
      location: 'Jl. Mastrip, Krajan Timur, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur',
      gpa: '3.92/4',
      achievements: [
        'Graduate with Cum Laude honors',
        'Active member of Programming Club',
        'Completed final project on E-commerce Web Application'
      ],
      skills: ['Web Development', 'Database Management', 'System Analysis', 'Project Management']
    },
    {
      id: 2,
      period: 'Jul 2018 - Jul 2021',
      degree: 'Vocational High School',
      major: 'Software Engineering',
      institution: 'SMK Negeri 2 Kraksaan',
      location: 'JL. DIPONEGORO NO.5, Sidomukti, Kec. Kraksaan, Kab. Probolinggo Prov. Jawa Timur',
      gpa: '85/100',
      achievements: [
        'Best Graduate in Software Engineering Department',
        'Leadership role in Student Organization',
        'Completed internship program with excellent performance'
      ],
      skills: ['Programming Fundamentals', 'Web Development', 'Database Design', 'Software Testing']
    }
  ];

  const certifications = [
    {
      name: 'React.js Professional Certificate',
      issuer: 'Meta',
      year: '2024',
      icon: '⚛️'
    },
    {
      name: 'Laravel Certified Developer',
      issuer: 'Laravel',
      year: '2023',
      icon: '🔶'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '☁️'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      year: '2023',
      icon: '📊'
    },
    {
      name: 'UI/UX Design Certificate',
      issuer: 'Adobe',
      year: '2022',
      icon: '🎨'
    },
    {
      name: 'JavaScript Algorithms Certificate',
      issuer: 'FreeCodeCamp',
      year: '2022',
      icon: '💛'
    },
    {
      name: 'MySQL Database Certificate',
      issuer: 'Oracle',
      year: '2022',
      icon: '🗄️'
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Education & Certifications</h2>
        
        <div className={styles.educationSection}>
          <h3 className={styles.subsectionTitle}>Education</h3>
          
          <div className={styles.educationGrid}>
            {educations.map((edu, index) => (
              <div key={edu.id} className={styles.educationCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.period}>{edu.period}</div>
                  <div className={styles.gpa}>GPA: {edu.gpa}</div>
                </div>
                
                <h4 className={styles.degree}>{edu.degree}</h4>
                <h5 className={styles.major}>{edu.major}</h5>
                <h6 className={styles.institution}>🏫 {edu.institution}</h6>
                <p className={styles.location}>📍 {edu.location}</p>
                
                <div className={styles.achievements}>
                  <h6>Key Achievements:</h6>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.skills}>
                  <h6>Skills Acquired:</h6>
                  <div className={styles.skillTags}>
                    {edu.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.certificationsSection}>
          <h3 className={styles.subsectionTitle}>Professional Certifications</h3>
          
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certificationCard}>
                <div className={styles.certIcon}>{cert.icon}</div>
                <h4 className={styles.certName}>{cert.name}</h4>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <span className={styles.certYear}>{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;