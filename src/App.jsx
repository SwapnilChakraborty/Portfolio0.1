import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectShowcase from './components/ProjectShowcase';
import Services from './components/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Home Component to group the single-page sections
const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsGrid />
      <ProjectShowcase
        index="01"
        title="E-Commerce Store"
        description="A fully functional online store with shopping cart, payment integration, and admin dashboard."
        background="Local business owner wanted to expand their retail store online and reach more customers."
        solution="Built a complete e-commerce platform using React and Node.js with Stripe payment integration, product management system, and order tracking."
        image="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop"
      />
      <ProjectShowcase
        index="02"
        title="Restaurant Website"
        description="Modern, mobile-responsive website with online menu and reservation system."
        background="Restaurant needed a professional web presence to attract customers and enable online reservations."
        solution="Created a stunning website with interactive menu, Google Maps integration, reservation form, and Instagram feed. Optimized for mobile devices and local SEO."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
        reverse
      />
      <ProjectShowcase
        index="03"
        title="Portfolio Website"
        description="Clean, professional portfolio for a freelance photographer showcasing their work."
        background="Photographer needed an elegant way to display their portfolio and attract new clients."
        solution="Designed a minimalist portfolio with image galleries, lightbox viewer, contact form, and testimonials section. Fast loading with optimized images."
        image="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop"
      />
      <Services />
    </main>
  );
};

function App() {
  const location = useLocation();

  // Determine active page for Navbar highlighting based on path
  const getActivePage = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/blog')) return 'blog';
    return 'home';
  };

  return (
    <div className="page-transition">
      <Navbar activePage={getActivePage(location.pathname)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <footer id="contact" style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--primary)', color: '#000' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2rem' }}>
            Let's Work Together
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.8 }}>
            Have a project in mind? Get in touch.
          </p>
          <a href="mailto:hello@yourportfolio.com" className="btn-outline" style={{ color: '#000', borderColor: '#000' }}>
            Contact Me
          </a>
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '2px solid rgba(0,0,0,0.2)', opacity: 0.6, fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Your Name. Creative Portfolio.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
