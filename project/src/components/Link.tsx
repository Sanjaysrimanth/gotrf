import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '' }) => {
  // This is a placeholder for actual routing
  // In a real app, you'd use React Router or similar
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};