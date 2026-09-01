import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './Collapsible.module.css';

interface CollapsibleProps {
  title: string;
  children: ReactNode;
  image: ReactNode;
}

export function Collapsible({ title, children, image }: CollapsibleProps) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles['collapsible-item']}>
      <div className={`${styles['collapsible-active']} ${open ? styles.active : ''}`}>
        <h2 className={styles['collapsible-heading']}>
          <button
            type="button"
            className={styles['collapsible-trigger']}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <img src="/Images/line-angle-down-icon.svg" alt="" />
            {title}
          </button>
        </h2>
        <label className={styles['checkbox-container']} aria-label="Markera som klar">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked((c) => {
                const next = !c;
                if (next) setOpen(false);
                return next;
              });
            }}
          />
          <span className={styles.checkmark}>
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12.5L9 17.5L20 6.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </label>
      </div>
      <div
        className={styles['collapsible-content']}
        ref={contentRef}
        style={{
          maxHeight: open && contentRef.current ? contentRef.current.scrollHeight + 32 : undefined,
          paddingBottom: open ? 32 : undefined,
        }}
      >
        {children}
        {image}
      </div>
    </div>
  );
}
