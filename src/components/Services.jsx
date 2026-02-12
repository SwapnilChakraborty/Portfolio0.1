import React from 'react';
import { motion } from 'framer-motion';

const serviceList = [
    "Web Design", "Visual Identity", "Website Development",
    "User Strategy", "Motion Design", "Visual Branding"
];

const Services = () => {
    return (
        <section id="services" style={{ padding: '8rem 0', backgroundColor: '#eee', color: '#000' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1, fontWeight: 800, textTransform: 'uppercase' }}
                    >
                        Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ maxWidth: '400px', fontSize: '1.1rem', opacity: 0.7 }}
                    >
                        Providing a wide range of creative services to help brands grow in the digital sphere.
                    </motion.p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                    {serviceList.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'var(--cyan-dark)' }}
                            style={{
                                padding: '1rem 2.5rem',
                                backgroundColor: 'var(--primary)',
                                borderRadius: '50px',
                                fontSize: '1.2rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {service} <span style={{ fontSize: '1.5rem' }}>→</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
