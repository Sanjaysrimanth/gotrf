import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative overflow-hidden bg-blue-600 text-white px-6 py-3 rounded-lg font-medium
        transition-all duration-300 ease-out
        hover:bg-blue-700 hover:shadow-lg
        active:translate-y-0.5 active:shadow-none
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 z-0 opacity-0 hover:opacity-20 bg-gradient-to-r from-blue-400 to-blue-700 transition-opacity"></span>
    </button>
  );
};

export default AnimatedButton;