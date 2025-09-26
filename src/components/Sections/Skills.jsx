import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React JS', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 85, icon: '💛' },
        { name: 'HTML/CSS', level: 95, icon: '🎨' },
        { name: 'Vue.js', level: 75, icon: '💚' },
        { name: 'TypeScript', level: 80, icon: '🔷' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Laravel', level: 90, icon: '🟠' },
        { name: 'Node.js', level: 85, icon: '💚' },
        { name: 'PHP', level: 88, icon: '🐘' },
        { name: 'Python', level: 70, icon: '🐍' },
        { name: 'Express.js', level: 82, icon: '🚀' }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 88, icon: '🗄️' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'Git/GitHub', level: 90, icon: '📚' },
        { name: 'Docker', level: 70, icon: '🐋' },
        { name: 'AWS', level: 65, icon: '☁️' }
      ]
    },
    {
      title: 'Design & Others',
      skills: [
        { name: 'UI/UX Design', level: 85, icon: '🎨' },
        { name: 'Figma', level: 80, icon: '🎯' },
        { name: 'Photoshop', level: 75, icon: '🖼️' },
        { name: 'SEO', level: 70, icon: '📈' },
        { name: 'Testing', level: 78, icon: '🧪' }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillIcon}>{skill.icon}</span>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress}
                        style={{ '--skill-width': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <h4>Always Learning</h4>
            <p>Continuously exploring new technologies and best practices to stay current in the rapidly evolving tech landscape.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h4>Problem Solving</h4>
            <p>Passionate about tackling complex challenges and finding elegant, efficient solutions to technical problems.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h4>Team Collaboration</h4>
            <p>Experienced in working with cross-functional teams using Agile methodologies and modern development workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;