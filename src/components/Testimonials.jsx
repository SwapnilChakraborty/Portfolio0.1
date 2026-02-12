import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart Inc.',
        image: 'https://i.pravatar.cc/150?img=1',
        rating: 5,
        text: 'Absolutely phenomenal work! The website exceeded our expectations. Fast, responsive, and beautiful. Our conversion rate increased by 40% after launch.'
    },
    {
        name: 'Michael Chen',
        role: 'Founder, DesignHub',
        image: 'https://i.pravatar.cc/150?img=13',
        rating: 5,
        text: 'Professional, communicative, and delivers on time. Built our entire platform from scratch and it works flawlessly. Highly recommend!'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Marketing Director, GrowthCo',
        image: 'https://i.pravatar.cc/150?img=5',
        rating: 5,
        text: 'Best developer I\'ve worked with on Upwork. Clean code, great communication, and went above and beyond to ensure we were satisfied.'
    },
    {
        name: 'David Kim',
        role: 'Product Manager, InnovateLabs',
        image: 'https://i.pravatar.cc/150?img=12',
        rating: 5,
        text: 'Turned our complex requirements into a beautiful, user-friendly application. The attention to detail and problem-solving skills are outstanding.'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ marginBottom: '1rem' }}>Client Testimonials</h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '700px', margin: '0 auto' }}>
                        Don't just take my word for it - hear from satisfied clients
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card"
                            style={{ position: 'relative' }}
                        >
                            <Quote
                                size={40}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    color: 'var(--color-accent-primary)',
                                    opacity: 0.2
                                }}
                            />

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '50%',
                                        border: '2px solid var(--color-accent-primary)'
                                    }}
                                />
                                <div>
                                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                                        {testimonial.name}
                                    </div>
                                    <div style={{
                                        fontSize: 'var(--font-size-sm)',
                                        color: 'var(--color-text-tertiary)'
                                    }}>
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill="var(--color-accent-warning)"
                                        color="var(--color-accent-warning)"
                                    />
                                ))}
                            </div>

                            <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.6 }}>
                                "{testimonial.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
