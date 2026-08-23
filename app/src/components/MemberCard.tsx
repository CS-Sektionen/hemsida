import { useState } from 'react';
import type { ReactNode } from 'react';
import styles from './MemberCard.module.css';

interface MemberCardProps {
  image: string;
  imageAlt: string;
  name: string;
  email?: string;
  role: string;
  description: ReactNode;
}

export function MemberCard({ image, imageAlt, name, email, role, description }: MemberCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`program-card ${styles['program-card']}`}>
      <div className={styles['bild-rubrik']}>
        <img src={image} alt={imageAlt} />
        <h3 className={styles['styrelse-h3']}>{name}</h3>
        {email && (
          <a className={styles['styrelse-mail']} href={`mailto:${email}`}>
            {email}
          </a>
        )}
      </div>
      <div className={styles['square-text']}>
        <h4 className={`${styles['styrelse-h4']} ${role.replace(/­/g, '').length > 20 ? styles['long-role'] : ''}`}>
          {role}
        </h4>
        <div className={`${styles['desc-wrapper']} ${expanded ? styles.expanded : ''}`}>
          <p>{description}</p>
        </div>
        <button className={styles['read-more']} onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? 'Visa mindre' : 'Läs mer'}
        </button>
      </div>
    </div>
  );
}
