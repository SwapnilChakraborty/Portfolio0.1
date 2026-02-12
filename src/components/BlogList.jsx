import React from 'react';

const posts = [
    {
        id: 1,
        title: "Building the Next Generation of Data Visualization",
        category: "Development",
        date: "Jan 24, 2026",
        excerpt: "How we tackled complex data structures for the Schematiq platform using React and D3."
    },
    {
        id: 2,
        title: "The Importance of Typography in High-End Branding",
        category: "Design",
        date: "Jan 15, 2026",
        excerpt: "Why choosing the right typeface can make or break your premium product aesthetic."
    },
    {
        id: 3,
        title: "Animating the Web with Framer Motion",
        category: "Motion",
        date: "Jan 05, 2026",
        excerpt: "A deep dive into creating smooth, performant animations for modern web applications."
    }
];

const BlogList = () => {
    return (
        <section>
            <h1 style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '4rem' }}>Project Logs</h1>
            <div style={{ display: 'grid', gap: '4rem' }}>
                {posts.map(post => (
                    <article key={post.id} style={{
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        paddingBottom: '2rem',
                        cursor: 'pointer'
                    }}>
                        <div style={{ display: 'flex', gap: '2rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                            <span>{post.category}</span>
                            <span>{post.date}</span>
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{post.title}</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: '800px' }}>{post.excerpt}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default BlogList;
