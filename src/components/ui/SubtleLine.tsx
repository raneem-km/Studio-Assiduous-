import React from 'react';

interface SubtleLineProps {
  className?: string;
}

export const SubtleLine: React.FC<SubtleLineProps> = ({ className = '' }) => {
  return <div className={`w-full h-[1px] bg-white/16 ${className}`} />;
};
