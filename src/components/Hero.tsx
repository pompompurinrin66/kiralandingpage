import { motion } from 'framer-motion';
import heroBackground from '../assets/hero-background.jpg';

const Hero = () => {
  const heroStyle: React.CSSProperties = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffff',
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    overflow: 'hidden',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)',
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '150px',
    fontFamily: '"Times New Roman", serif',
    fontWeight: 400,
    margin: 0,
    marginBottom: '8px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    lineHeight: '1.1',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '26px',
    fontWeight: '400',
    margin: 0,
    lineHeight: '1.2',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    letterSpacing: '0.5px',
  };

  return (
    <section style={heroStyle}>
      <div style={overlayStyle} />
      <motion.div
        style={contentStyle}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h1
          style={titleStyle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
        >
          KIRA
        </motion.h1>
        <motion.p
          style={subtitleStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        >
          Konkuk University Investment & Research Academy
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;