import React from 'react';
import { Box, BoxProps } from '@mantine/core';

interface CardProps extends BoxProps {
  variant?: 'rounded' | 'smooth';
  borderColor?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = 'smooth',
  borderColor,
  children,
  ...rest
}) => {
  const baseStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1.5rem',
    padding: variant === 'rounded' ? '2rem' : '1.5rem',
    borderRadius: variant === 'rounded' ? '40px' : '8px',
    boxShadow: variant === 'rounded' ? '0px 10px 20px rgba(0, 0, 0, 0.15)' : '0px 4px 12px rgba(0, 0, 0, 0.1)',
    border: variant === 'rounded' ? '2px solid' : undefined,
    borderColor: borderColor || (variant === 'rounded' ? '#e2e8f0' : undefined), // fallback gray
  };

  return (
    <Box className="cs-card" style={baseStyles} {...rest}>
      {children}
    </Box>
  );
};

export default Card;
