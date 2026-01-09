import React from 'react';

interface CredentialCardProps {
  category: string;
  title: string;
}

const CredentialCard: React.FC<CredentialCardProps> = ({ category, title }) => (
  <div className="pt-4 text-left bg-transparent shadow-none rounded-none h-full">
    <div className="text-xs text-foreground/50 mb-2 border-b border-foreground/10 pb-2">{category}</div>
    <div className="heading-5 leading-snug text-foreground">{title}</div>
  </div>
);

export default CredentialCard; 