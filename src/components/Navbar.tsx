import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Force scrolled appearance on Archive page
  const shouldUseScrolledStyle = isScrolled || location.pathname === '/archive';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Us', href: '#about', isAnchor: true },
    { label: 'Curriculum', href: '#curriculum', isAnchor: true },
    { label: 'Partners', href: '#partners', isAnchor: true },
    { label: 'Archive', href: '/archive', isAnchor: false },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      if (location.pathname === '/') {
        // Already on home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // On different page, navigate to home with hash
        window.location.href = `/${href}`;
      }
    }
  };

  const navbarStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease-in-out',
    backgroundColor: shouldUseScrolledStyle ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
    backdropFilter: shouldUseScrolledStyle ? 'blur(10px)' : 'none',
    borderBottom: shouldUseScrolledStyle ? '1px solid rgba(229, 231, 235, 0.8)' : '1px solid transparent',
    padding: '0 24px',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80px',  //상단바 높이
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const logoImageStyle: React.CSSProperties = {
    height: '120px', //로고 크기
    width: 'auto',
    objectFit: 'contain',
    objectPosition: 'center',
    clipPath: 'inset(25% 0 25% 0)', // 세로 25%씩 잘라내어 직사각형으로 만들기
  };

  const menuStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '48px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const linkStyle: React.CSSProperties = {
    color: shouldUseScrolledStyle ? '#374151' : '#ffffff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '450',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <motion.nav
      style={navbarStyle}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div style={containerStyle}>
        <Link 
          to="/" 
          style={logoStyle}
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img 
            src="./KIRA_logo.png" 
            alt="KIRA Logo" 
            style={logoImageStyle}
          />
        </Link>
        
        <ul style={menuStyle}>
          {navItems.map((item, index) => (
            <li key={index}>
              {item.isAnchor ? (
                <a
                  href={item.href}
                  style={linkStyle}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = shouldUseScrolledStyle ? '#0b3a5b' : '#f3f4f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = shouldUseScrolledStyle ? '#374151' : '#ffffff';
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = shouldUseScrolledStyle ? '#0b3a5b' : '#f3f4f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = shouldUseScrolledStyle ? '#374151' : '#ffffff';
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;