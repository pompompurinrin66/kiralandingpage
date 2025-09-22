import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ title, subtitle, description, icon, delay = 0, style }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    textAlign: 'left',
    minHeight: '260px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
    ...style,
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '16px',
    width: '100%',
  };

  const iconStyle: React.CSSProperties = {
    color: '#6b7280',
    fontSize: '24px',
    flexShrink: 0,
    marginTop: '2px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '25px',
    fontWeight: '700',
    color: '#111827',
    margin: '0',
    lineHeight: '2.5',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '17px',
    fontWeight: '650',
    color: '#111827',
    margin: '4px 0 12px 0',
    lineHeight: '2.0',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#6b7280',
    lineHeight: '1.5',
    margin: 0,
  };

  return (
    <motion.div
      style={cardStyle}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
    >
<div style={headerStyle}>
  {icon && <div style={iconStyle}>{icon}</div>}
  <div>
    <h3 style={titleStyle}>{title}</h3>
    {subtitle && <h4 style={subtitleStyle}>{subtitle}</h4>}
  </div>
</div>

<p style={descriptionStyle}>{description}</p>
    </motion.div>
  );
};

export default Card;