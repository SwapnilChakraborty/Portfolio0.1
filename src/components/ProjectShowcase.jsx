import React from 'react';
import { motion } from 'framer-motion';

const ProjectShowcase = ({ index, title, description, background, solution, image, reverse }) => {
    return (
        <section style={{
            padding: '8rem 0',
            backgroundColor: reverse ? '#000' : '#fff',
            color: reverse ? '#fff' : '#000'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: reverse ? '1fr 1fr' : '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {!reverse && (
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{
                                fontSize: '6rem',
                                fontWeight: 800,
                                color: 'var(--primary)',
                                lineHeight: 1,
                                marginBottom: '1rem'
                            }}>
                                {index}
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                marginBottom: '1.5rem',
                                fontWeight: 800,
                                textTransform: 'uppercase'
                            }}>
                                {title}
                            </h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8 }}>
                                {description}
                            </p>
                            <div style={{ marginBottom: '1rem' }}>
                                <strong style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Background:</strong>
                                <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>{background}</p>
                            </div>
                            <div>
                                <strong style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Solution:</strong>
                                <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>{solution}</p>
                            </div>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            width: '100%',
                            aspectRatio: '4/5',
                            backgroundColor: '#ddd',
                            backgroundImage: image ? `url(${image})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />

                    {reverse && (
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{
                                fontSize: '6rem',
                                fontWeight: 800,
                                color: 'var(--primary)',
                                lineHeight: 1,
                                marginBottom: '1rem'
                            }}>
                                {index}
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                marginBottom: '1.5rem',
                                fontWeight: 800,
                                textTransform: 'uppercase'
                            }}>
                                {title}
                            </h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8 }}>
                                {description}
                            </p>
                            <div style={{ marginBottom: '1rem' }}>
                                <strong style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Background:</strong>
                                <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>{background}</p>
                            </div>
                            <div>
                                <strong style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Solution:</strong>
                                <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>{solution}</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
