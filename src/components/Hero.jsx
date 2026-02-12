import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 2rem',
      backgroundColor: 'var(--bg-dark)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Gradient Effect */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0,209,193,0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span style={{
            color: 'var(--primary)',
            fontFamily: 'monospace',
            fontSize: '1.2rem',
            marginBottom: '1rem',
            display: 'block'
          }}>
            Hi, my name is Swapnil
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: '#fff',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-2px'
          }}
        >
          Building Digital <br />
          <span style={{ color: 'var(--primary)' }}>Experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '600px',
            marginBottom: '3rem',
            color: '#ccc',
            lineHeight: 1.6
          }}
        >
          I'm a freelance Full Stack Developer specializing in building exceptional digital experiences.
          Currently, I'm focused on accessible, human-centered products.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
        >
          <button
            className="btn-cyan"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check out my work <ArrowRight size={20} />
          </button>

          <button
            className="btn-outline"
            onClick={() => window.location.href = 'mailto:hello@example.com'}
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            display: 'flex',
            gap: '2rem',
            marginTop: '4rem',
            alignItems: 'center'
          }}
        >
          {[Github, Linkedin, Mail].map((Icon, index) => (
            <a key={index} href="#" style={{ color: '#fff', opacity: 0.7, transition: '0.3s' }} className="social-icon">
              <Icon size={24} />
            </a>
          ))}
          <div style={{ height: '1px', width: '100px', background: 'var(--primary)', opacity: 0.5 }}></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--primary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer'
        }}
        onClick={() => {
          const nextSection = document.getElementById('about');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span style={{ fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight size={20} style={{ transform: 'rotate(90deg)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
