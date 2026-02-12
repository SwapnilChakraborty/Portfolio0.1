import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const posts = [
    {
        id: 1,
        slug: 'building-next-gen-data-viz',
        title: "Building the Next Generation of Data Visualization",
        category: "Development",
        date: "Jan 24, 2026",
        excerpt: "How we tackled complex data structures for the Schematiq platform using React and D3.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        slug: 'typography-in-branding',
        title: "The Importance of Typography in High-End Branding",
        category: "Design",
        date: "Jan 15, 2026",
        excerpt: "Why choosing the right typeface can make or break your premium product aesthetic.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        slug: 'animating-with-framer-motion',
        title: "Animating the Web with Framer Motion",
        category: "Motion",
        date: "Jan 05, 2026",
        excerpt: "A deep dive into creating smooth, performant animations for modern web applications.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
    }
];

const Blog = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '3rem', color: 'var(--primary)', lineHeight: 0.9 }}
            >
                THOUGHTS &<br />INSIGHTS
            </motion.h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
                {posts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                    >
                        <Link to={`/blog/${post.slug}`} style={{ display: 'block' }}>
                            <div style={{
                                height: '240px',
                                backgroundColor: '#222',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                                position: 'relative'
                            }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="post-image"
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', opacity: 0.7 }}>
                                <span style={{ color: 'var(--primary)' }}>{post.category}</span>
                                <span>{post.date}</span>
                            </div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>{post.title}</h2>
                            <p style={{ opacity: 0.6, fontSize: '1rem', lineHeight: 1.5 }}>{post.excerpt}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                                Read Article <ArrowUpRight size={16} />
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
