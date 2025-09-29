import React, { useState } from 'react';
import styles from './Projects.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import image1 from '../../assets/img/portfolio15.jpg'
import image2 from '../../assets/img/robotku.jpg'
import image3 from '../../assets/img/roma.png'
import image4 from '../../assets/img/portfonlenkan.png'
import image5 from '../../assets/img/portofolio12.jpg'
import image6 from '../../assets/img/portofolio13.jpg'
import image7 from '../../assets/img/portofolio14.jpg'
import image8 from '../../assets/img/portfolio2.jpg'
import image9 from '../../assets/img/portfolio4.jpg'
import image10 from '../../assets/img/portofolio11.jpg'
import image11 from '../../assets/img/portofolio9.jpg'
import image12 from '../../assets/img/portfolio5.jpg'
import image13 from '../../assets/img/portfolio6.jpg'
import image14 from '../../assets/img/portfolio7.jpg'
import image15 from '../../assets/img/portfolio1.jpg'
import image16 from '../../assets/img/portfolio8.jpg'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sistem Akademik Robotku',
      description: 'Comprehensive academic management system for robotics education with student tracking and course management.',
      image: image1,
      category: 'fullstack',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      liveUrl: 'https://robotku.id/admin',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'Website Robotku',
      description: 'Modern robotics education platform showcasing courses, projects, and learning resources.',
      image: image2,
      category: 'frontend',
      technologies: ['React', 'CSS3', 'JavaScript'],
      liveUrl: 'https://robotku.id/',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 3,
      title: 'Web Roma Probolinggo',
      description: 'Professional business website for Roma Probolinggo with modern design and responsive layout.',
      image: image3,
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://romaprobolinggo.com',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 4,
      title: 'Web Portofolio Onlenkan',
      description: 'Creative portfolio showcase for Onlenkan company highlighting their digital projects and services.',
      image: image4,
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'Laravel 11', 'MySQL'],
      liveUrl: 'https://portofolio.onlenkan.com/',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 5,
      title: 'Website UMI Travel Haji & Umrah',
      description: 'Complete travel booking system for Hajj and Umrah pilgrimage services with payment integration.',
      image: image5,
      category: 'fullstack',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'MySQL'],
      liveUrl: 'https://umi.travel/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 6,
      title: 'Website App Nakoa Cafe',
      description: 'Modern cafe management system with menu display, ordering system, and inventory tracking.',
      image: image6,
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://web-cafe-psi.vercel.app/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 7,
      title: 'Website Batik Ronggo Mukti',
      description: 'E-commerce platform for traditional batik products with catalog and online store functionality.',
      image: image7,
      category: 'fullstack',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Midtrans'],
      liveUrl: 'https://ronggomukti.com/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 8,
      title: 'Website Shiro Restaurant',
      description: 'Elegant restaurant website with menu showcase, reservation system, and responsive design.',
      image: image8,
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://shiro-restaurant.vercel.app/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 9,
      title: 'Website Wedding Invitation',
      description: 'Beautiful and interactive wedding invitation with RSVP system and guest management features.',
      image: image9,
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Laravel'],
      liveUrl: 'https://wedding-invitation-eight-coral.vercel.app/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 10,
      title: 'Website Pake Driver',
      description: 'Transportation service platform connecting drivers with customers for ride-sharing services.',
      image: image10,
      category: 'fullstack',
      technologies: ['Laravel', 'MySQL', 'Google Maps API', 'Bootstrap'],
      liveUrl: 'https://pakedriver.com/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 11,
      title: 'Website Insera Sena',
      description: 'Corporate website for Insera Sena company with professional design and content management.',
      image: image11,
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://inserasena/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 12,
      title: 'Website App Rental Mobil',
      description: 'Car rental management system with booking, payment, and vehicle tracking capabilities.',
      image: image12,
      category: 'fullstack',
      technologies: ['HTML', 'JavaScript','Laravel', 'MySQL'],
      liveUrl: 'https://ongoing/',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 13,
      title: 'Website MIF Hospital',
      description: 'Hospital management system with patient records, appointment scheduling, and staff management.',
      image: image13,
      category: 'fullstack',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://mifhospital.vercel.app/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 14,
      title: 'Aplikasi Desktop Rental Mobil',
      description: 'Desktop application for car rental business with inventory management and customer tracking.',
      image: image14,
      category: 'desktop',
      technologies: ['Java', 'MySQL', 'JasperReports'],
      liveUrl: 'https://rentalmobil-ongoing/',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 15,
      title: 'Website Bago Tea',
      description: 'Modern tea shop website with product catalog, online ordering, and customer reviews.',
      image: image15,
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://bago-tea.vercel.app/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 16,
      title: 'Website Artikel',
      description: 'Simple article management system with content publishing and reader engagement features.',
      image: image16,
      category: 'fullstack',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://web-artikel-sederhana.vercel.app/',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { key: 'desktop', label: 'Desktop', count: projects.filter(p => p.category === 'desktop').length },
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
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={styles.projectImg}
                  />
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