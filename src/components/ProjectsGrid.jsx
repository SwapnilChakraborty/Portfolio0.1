import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
        color: '#1a1a1a'
    },
    {
        id: 2,
        title: 'Restaurant Website',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
        color: '#2a2a2a'
    },
    {
        id: 3,
        title: 'Portfolio Site',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop',
        color: '#1a1a1a'
    },
    {
        id: 4,
        title: 'Landing Page',
        category: 'UI Design',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        color: '#2a2a2a'
    },
    {
        id: 5,
        title: 'Mobile App UI',
        category: 'App Design',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
        color: '#1a1a1a'
    },
    {
        id: 6,
        title: 'Dashboard Design',
        category: 'UI/UX',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        color: '#2a2a2a'
    },
    {
        id: 7,
        title: 'Brand Identity',
        category: 'Branding',
        color: '#00D1C1'
    },
];

const ProjectsGrid = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" style={{ backgroundColor: 'var(--primary)', padding: '4rem 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#000', marginBottom: '3rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, textTransform: 'uppercase' }}
                >
                    Projects ————
                </motion.h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gridAutoRows: '300px',
                    gap: '1rem'
                }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            style={{
                                backgroundColor: project.color || '#fff',
                                backgroundImage: project.image ? `url(${project.image})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                gridColumn: i % 4 === 0 ? 'span 2' : 'span 1',
                                gridRow: i % 3 === 0 ? 'span 2' : 'span 1',
                                cursor: 'pointer',
                                borderRadius: '8px',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            {/* Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: hoveredProject === project.id
                                    ? 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%)'
                                    : 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)',
                                transition: 'background 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '1.5rem'
                            }}>
                                {/* Category Badge */}
                                {project.category && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: hoveredProject === project.id ? 1 : 0.8,
                                            y: hoveredProject === project.id ? 0 : 10
                                        }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            display: 'inline-block',
                                            padding: '0.3rem 0.8rem',
                                            backgroundColor: 'var(--primary)',
                                            color: '#000',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            borderRadius: '20px',
                                            marginBottom: '0.5rem',
                                            alignSelf: 'flex-start',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        {project.category}
                                    </motion.div>
                                )}

                                {/* Project Title */}
                                {project.title && (
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        style={{
                                            color: '#fff',
                                            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            marginBottom: '0.5rem',
                                            lineHeight: 1.2
                                        }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                )}

                                {/* View Project Link */}
                                {hoveredProject === project.id && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--primary)',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        View Project <ExternalLink size={16} />
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
