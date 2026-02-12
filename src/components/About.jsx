import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Globe } from 'lucide-react';

const services = [
    {
        icon: <Code size={32} />,
        title: 'Web Development',
        description: 'Building fast, responsive, and accessible websites using modern frameworks like React and Next.js.'
    },
    {
        icon: <Palette size={32} />,
        title: 'UI/UX Design',
        description: 'Creating intuitive and visually stunning user interfaces that provide seamless user experiences.'
    },
    {
        icon: <Zap size={32} />,
        title: 'Performance',
        description: 'Optimizing applications for speed and efficiency to ensure the best possible user engagement.'
    },
    {
        icon: <Globe size={32} />,
        title: 'SEO',
        description: 'Implementing best practices to improve search engine rankings and increase organic traffic.'
    }
];

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 0', backgroundColor: 'var(--bg-light)', color: 'var(--bg-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: 800, textTransform: 'uppercase' }}
                    >
                        Passion for <br /> <span style={{ color: 'var(--primary)' }}>Digital Excellence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}
                    >
                        I transform ideas into digital reality. As a passionate developer and designer, I focus on creating tools that help businesses grow and succeed in the digital landscape.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                backgroundColor: '#fff',
                                padding: '2.5rem',
                                borderRadius: '1rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: 'var(--bg-light)',
                                color: 'var(--primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{service.title}</h3>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
