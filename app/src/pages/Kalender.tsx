import { useEffect } from 'react';
import styles from './Kalender.module.css';
import { Reveal } from '../components/Reveal';
import { useIsDesktop } from '../hooks/useIsDesktop';

const GANCIO_SCRIPT_SRC = 'https://events.accum.se/gancio-events.es.js';

function useGancioScript() {

  useEffect(() => {
    if (document.querySelector(`script[src="${GANCIO_SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = GANCIO_SCRIPT_SRC;
    document.body.appendChild(script);
  }, []);
}

export function Kalender() {
  useGancioScript();
  const isDesktop = useIsDesktop();

  return (
    <>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Kalender</h1>
          <div className={styles['heading-card-content']}>
            <h2>Allt du behöver ha koll på!</h2>
            <p>Se alla aktiviteter som händer inom kåren - både sektionen och övriga event</p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">
        <Reveal className={`program-card ${styles['program-card']}`}>
          {isDesktop ? (
          <div className={`calendar-container ${styles['calendar-container']}`}>
            <iframe src="https://calendar.google.com/calendar/embed?src=b8041d0e0099a5fb78c104e23fdfef4746befb9ad33b139e95a0c781dcf3350d%40group.calendar.google.com&ctz=Europe%2FStockholm" style={{ border: '0' }} width="800" height="600"></iframe>
          </div>
          ) : (
          <div className={`calendar-container ${styles['calendar-container']}`}>
            <iframe src="https://calendar.google.com/calendar/u/0/newembed?src=b8041d0e0099a5fb78c104e23fdfef4746befb9ad33b139e95a0c781dcf3350d@group.calendar.google.com&ctz=Europe/Stockholm" style={{ border: '0' }} width="400" height="600"></iframe>
          </div>
          )}
        </Reveal>
        <Reveal className={`program-card ${styles['program-card']}`}>
          <h3>NTK eventkalender</h3>
          <p>Se alla NTK-event som händer inom kåren här eller gå in på <a href="https://events.accum.se">Events@umu</a>.</p>
          <gancio-events baseurl="https://events.accum.se" title="Events@umu" sidebar="false" theme="dark" />
        </Reveal>
      </main>
    </>
  );
}
