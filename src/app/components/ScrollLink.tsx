'use client';

import { Link } from 'react-scroll';
import type { ReactNode } from 'react';

type ScrollLinkProps = {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function ScrollLink({
  to,
  className,
  children,
  onClick,
}: ScrollLinkProps) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
