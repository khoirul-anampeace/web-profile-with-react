import React, { useState } from 'react';
import styles from './Projects.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce platform with admin panel, inventory management, and payment integration.',
      image: '🛒',
      category: 'fullstack',
      technologies: ['React', 'Laravel', 'MySQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'Wedding Invitation Website',
      description: 'Beautiful and interactive wedding invitation with RSVP system and guest management.',
      image: '💒',
      category: 'frontend',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 3,
      title: 'Cafe Management System',
      description: 'Point of sale system for cafes with inventory tracking, staff management, and reporting.',
      image: '☕',
      category: 'fullstack',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 4,
      title: 'Company Profile Website',
      description: 'Modern and responsive company profile website with CMS integration.',
      image: '🏢',
      category: 'frontend',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      image: '📋',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'in-progress',
      year: '2024'
    },
    {
      id: 6,
      title: 'Portfolio Dashboard',
      description: 'Analytics dashboard for tracking portfolio performance and visitor statistics.',
      image: '📊',
      category: 'fullstack',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 7,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      image: '🌤️',
      category: 'frontend',
      technologies: ['React', 'Weather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 8,
      title: 'Blog CMS',
      description: 'Content management system for blogs with rich text editor and SEO optimization.',
      image: '📝',
      category: 'fullstack',
      technologies: ['React', 'Laravel', 'MySQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { key: 'completed', label: 'Completed', count: projects.filter(p => p.status === 'completed').length },
    { key: 'in-progress', label: 'In Progress', count: projects.filter(p => p.status === 'in-progress').length }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'completed' || activeFilter === 'in-progress') {
      return project.status === activeFilter;
    }
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        
        <div className={styles.filterSection}>
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`${styles.filterButton} ${activeFilter === filter.key ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <Card key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectImage}>
                  <span className={styles.projectIcon}>{project.image}</span>
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectLinks}>
                      <Button
                        variant="outline"
                        size="small"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="ghost"
                        size="small"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className={styles.projectMeta}>
                  <span className={`${styles.statusBadge} ${styles[project.status]}`}>
                    {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                  </span>
                  <span className={styles.yearBadge}>{project.year}</span>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className={styles.emptyState}>
            <p>No projects found for the selected filter.</p>
          </div>
        )}
        
        <div className={styles.projectsFooter}>
          <p className={styles.footerText}>
            Want to see more projects? Check out my GitHub profile for additional work and contributions.
          </p>
          <Button
            variant="primary"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;