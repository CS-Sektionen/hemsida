import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToId } from './useScrollToId';

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToId(hash);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}
