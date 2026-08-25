import { useRef } from 'react';
import styles from './Dokument.module.css';
import './Dokument.css';
import { Terminal } from '../components/Terminal';
import { useIsDesktop } from '../hooks/useIsDesktop.ts';

const folders = [
  {
    href: 'https://drive.google.com/drive/folders/1peOaj3nHz2e2iC-mgPjXiBPUmBrSJYnA?usp=sharing',
    icon: '/Images/High-Res_XP_Icons/Folder Closed.ico',
    alt: 'Styrelsesammanträde',
    label: 'Styrelse- sammanträden',
  },
  {
    href: 'https://drive.google.com/drive/folders/1lu-tczpqDbdeAbHi0Wh7rHpSqcAJ8zMz?usp=sharing',
    icon: '/Images/High-Res_XP_Icons/Folder Closed.ico',
    alt: 'Stormöten',
    label: 'Stormöten',
  },
  {
    href: 'https://drive.google.com/file/d/1U3fdo3mHEqjdeSW9fvyBmP_yBvjQfNJY/view?usp=sharing',
    icon: '/Images/High-Res_XP_Icons/File.ico',
    alt: 'Stadgar',
    label: 'Stadgar',
  },
  {
    href: 'https://drive.google.com/file/d/1mpTTlN1ULU13OgS9k8W1iT-fgosDbnzA/view?usp=sharing',
    icon: '/Images/High-Res_XP_Icons/File.ico',
    alt: 'Reglemente',
    label: 'Reglemente',
  },
  {
    href: 'https://drive.google.com/drive/folders/1eAcasmS5rlIGwKqkcIXJJTwy5cL8qQD-?usp=sharing',
    icon: '/Images/High-Res_XP_Icons/Folder%20Closed.ico',
    alt: 'Verksamhetsberättelser',
    label: 'Verksamhets- berättelser',
  },
  {
    href: 'https://drive.google.com/drive/folders/1ks7k0F2veSk2Cv2vIPaY4-hx6bIdeYfy?usp=sharing',
    icon: '/Images/High-Res_XP_Icons/Folder%20Closed.ico',
    alt: 'Arkiv',
    label: 'Arkiv',
  },
];

export function Dokument() {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useIsDesktop();

  return (
    <>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Dokument</h1>
          <div className={styles['heading-card-content']}>
            <h2>Arkiverat material och information</h2>
            {isDesktop ? (
            <p>
              När dagarna är långa och det inte finns mycket annat att göra går det alltid att fördriva tiden i CS
              egna dator. Lite gammal må den vara men innehållar mycket arkiverat material från sektionen. Du kan
              hitta allt från mötesprotokoll, stadgar, reglemente, och andra trevligheter. Söker du ett dokument
              som ej finns att hitta på denna sida så kan du kontakta någon i styrelsen. På grund av lågt minne på
              denna relik skickas du vidare till CS drive då du går in i någon av mapparna.
            </p>
             ) : (
            <p>
              Här kan du hitta allt från mötesprotokoll, stadgar, reglemente, och andra trevligheter. Söker du ett dokument
              som ej finns att hitta på denna sida så kan du kontakta någon i styrelsen.
            </p>
             )}
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main" className={styles.main}>
        {isDesktop ? (
        <div id="computer-container">
          <div id="computer-frame">
            <div id="computer-screen" ref={screenRef}>
              <div id="folder-grid">
                {folders.map((folder) => (
                  <a href={folder.href} target="_blank" rel="noreferrer" key={folder.label}>
                    <button className="folder-button">
                      <img src={folder.icon} alt={folder.alt} />
                      <p>{folder.label}</p>
                    </button>
                  </a>
                ))}
              </div>

              <Terminal screenRef={screenRef} />

              <div id="computer-footer">
                <img src="/Images/windows-xp-icon.png" alt="windows logga" />
              </div>
            </div>
            <div id="post-it">
              <p>Lösen: password123</p>
            </div>
          </div>
          <img id="keyboard" src="/Images/keyboard.png" alt="bild på tangentbord" />
        </div>
        ) : (
          <div className={styles['document-cards']}>
            {folders.map((folder) => (
              <a
                key={folder.label}
                href={folder.href}
                target="_blank"
                rel="noreferrer"
                className={`small-info-card ${styles['document-card']}`}
              >
                <img src={folder.icon} alt={folder.alt} />
                <span>{folder.label.replace(/- /g, '')}</span>
              </a>
            ))}
            <h3>Tips: Gå in på denna sida på en dator!</h3>
          </div>
        )}
      </main>
    </>
  );
}
