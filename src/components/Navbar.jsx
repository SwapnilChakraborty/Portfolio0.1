import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Navbar = ({ activePage }) => {
    const navigate = useNavigate();

    const scrollToContact = (e) => {
        e.preventDefault();
        // If we are not on home page, go there first
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            mixBlendMode: 'difference'
        }}>
            <Link
                to="/"
                style={{ fontSize: '1.5rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', color: 'white', textDecoration: 'none' }}
            >
                <span style={{ color: 'var(--primary)' }}>//</span> Your Name
            </Link>

            <div style={{ display: 'flex', gap: '2rem', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem' }}>
                <Link
                    to="/"
                    style={{ cursor: 'pointer', color: activePage === 'home' ? 'var(--primary)' : 'white', textDecoration: 'none' }}
                >
                    Work
                </Link>
                <Link
                    to="/blog"
                    style={{ cursor: 'pointer', color: activePage === 'blog' ? 'var(--primary)' : 'white', textDecoration: 'none' }}
                >
                    Blog
                </Link>
                <a
                    href="#contact"
                    onClick={scrollToContact}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'white', textDecoration: 'none', cursor: 'pointer' }}
                >
                    Let's talk <ArrowUpRight size={16} />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
