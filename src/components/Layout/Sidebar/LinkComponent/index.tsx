'use client';

/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface LinkProps {
  href: string;
  onClick?: () => void;
  isMobile?: boolean;
  target?: boolean;
}

export const LinkComponent = ({
  children,
  onClick,
  href,
  isMobile = false,
  target = false,
}: PropsWithChildren<LinkProps>) => {
  const pathname = usePathname();
  const activeClassName = isMobile
    ? 'active-mobile-menu-item'
    : 'active-menu-item';

  const isActive = pathname === href;

  if (!!target) {
    return (
      <a href={href} target='_blank' rel='noreferrer'>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={isActive ? activeClassName : undefined}
    >
      {children}
    </Link>
  );
};
