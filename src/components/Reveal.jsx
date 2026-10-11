import React from 'react';
import useReveal from '../hooks/useReveal';

/**
 * Generic scroll-reveal wrapper.
 *
 * <Reveal delay={120} className="lg:col-span-5">...</Reveal>
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${isVisible ? 'reveal-in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}