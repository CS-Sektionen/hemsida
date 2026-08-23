import type { JSX, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  children: ReactNode;
}

export function Reveal({ as = 'div', className = '', id, children }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const Tag = as as any;
  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
