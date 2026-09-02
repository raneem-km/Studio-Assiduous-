import React from 'react';

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ label, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase text-[#F2F2EE]/75 font-mono ${className}`}>
      <span className="w-6 h-[1px] bg-[#F2F2EE]/40" />
      <span>{label}</span>
    </div>
  );
};
