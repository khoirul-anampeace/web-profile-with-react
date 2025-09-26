import React from 'react';
import styles from './Card.module.css';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverable = true,
  clickable = false,
  onClick,
  ...props 
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    hoverable && styles.hoverable,
    clickable && styles.clickable,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses} 
      onClick={clickable ? onClick : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;