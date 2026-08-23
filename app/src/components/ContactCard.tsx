import styles from './ContactCard.module.css';

interface ContactCardProps {
  name: string;
  email?: string;
  role: string;
}

export function ContactCard({ name, email, role }: ContactCardProps) {
  return (
    <div className={`small-info-card ${styles['contact-card']}`}>
      <h4 className={styles.role} title={role}>{role}</h4>
      <h4 className={styles.name} title={name}>{name}</h4>
      {email && (
        <a className={styles.email} href={`mailto:${email}`} title={email}>
          {email}
        </a>
      )}
    </div>
  );
}
