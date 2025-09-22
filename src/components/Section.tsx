import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  showTitle?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  backgroundColor = '#ffffff',
  children,
  showTitle = true
}) => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor,
    padding: '160px 0', //섹션 높이
    position: 'relative',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '70px',
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    margin: '0 0 20px 0', //원래 20px
    lineHeight: '1.2',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '23px',
    color: '#6b7280',
    textAlign: 'center',
    margin: '0 0 60px 0',
    lineHeight: '1.6',
  };

  return (
    <section id={id} style={sectionStyle}>
      <div style={containerStyle}>
        {showTitle && title && <h2 style={titleStyle}>{title}</h2>}
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;