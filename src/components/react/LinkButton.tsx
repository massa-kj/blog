import React from 'react';
import { BASE_URL } from '../../utils/share'

type LinkButtonProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  icon,
  variant = 'primary',
}) => {
  const classes = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    ghost: 'bg-transparent text-blue-600 hover:underline',
  };

  return (
    <a
      href={`${BASE_URL}${href}`}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium ${classes[variant]}`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </a>
  );
};

