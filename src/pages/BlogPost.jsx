import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
    const { slug } = useParams();

    // In a real app, we would fetch the post data based on the slug here
    // For now, we'll just show a placeholder

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '4rem', maxWidth: '800px' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', opacity: 0.7 }}>
                <ArrowLeft size={20} /> Back to Blog
            </Link>

            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span style={{ color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
                    Development • Jan 24, 2026
                </span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                    {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </h1>

                <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#222',
                    borderRadius: '1rem',
                    marginBottom: '3rem',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} />

                <div className="prose" style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9 }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>The Challenge</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </motion.article>
        </div>
    );
};

export default BlogPost;
