import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'gancio-events': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        baseurl?: string;
        title?: string;
        sidebar?: string;
        theme?: string;
      };
    }
  }
}

export {};
