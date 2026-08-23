import { useEffect, useState } from 'react';

export function useIsDesktop(breakpoint = 751) {
  const query = `(min-width: ${breakpoint}px)`;
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return isDesktop;
}