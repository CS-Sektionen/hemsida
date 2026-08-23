import styles from './Companies.module.css';
import { Reveal } from '../components/Reveal';

export function Companies() {
  return (
    <div className={styles.page}>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>För företag</h1>
          <div className={styles['heading-card-content']}>
            <h2>Samarbeta med NTKs största sektion!</h2>
            <p>
              {' '}
              Hej vad kul att du är intresserad av att samarbeta med oss! 
              Vi på CS-sektionen har många olika sätt för företag att nå ut till våra medlemmar, och vi vill gärna höra om era idéer och förslag. 
              Kontakta vår ordförande eller arbetsmarknadsutskottet för att höra mer om hur vi kan samarbeta!
            </p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">
         <Reveal className={`program-card ${styles['program-card']}`}>
          <div className={styles['info-ruta']}>
            <div className="info-ruta-text">
              <h3>Under utveckling</h3>
              <p>
                Denna sida är under utveckling och kommer snart att innehålla mer information om hur företag kan samarbeta med CS-sektionen.
              </p>
            </div>
            <a className="filled-button" href="/kontakt#styrelse" hrefLang="sv">
              Kontaktuppgifter
            </a>
          </div>
        </Reveal>
        { /**
        <Reveal className={styles['våra-medlemmar']}>
          <h2>Nå ut till våra medlemmar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla tortor nisi, vel viverra metus
            sollicitudin nec. Vestibulum lectus dui, vulputate ac sapien vitae, sagittis congue mi. Aliquam et
            condimentum dui. Phasellus ut nulla purus. Aliquam quis dolor malesuada, mattis dolor non, accumsan
            diam. Maecenas eleifend hendrerit tortor ut fringilla.
          </p>
        </Reveal>

        <Reveal className="pris-tabell">
          <div className={styles['tabell-text']}>
            <h2>Marknadsföringsmöjligheter</h2>
            <p>Kort intro av vad vi erbjuder, lite beskrivning och sånt.</p>
          </div>

          <div className={`program-card ${styles['program-card']}`}>
            <div className={styles['table-scroll']}>
            <table>
              <tr>
                <th>Alternativ</th>
                <th className={styles['line-cell']} style={{ width: '55%' }}>
                  Beskrivning
                </th>
                <th style={{ width: '15%' }}>Pris</th>
              </tr>

              <tr>
                <td>Affischering</td>
                <td className={styles['line-cell']}>
                  Vi skriver ut och sätter upp era posters i de byggnader där våra medlemmar rör sig mest
                </td>
                <td>2000:-</td>
              </tr>

              <tr>
                <td>Stories på Instagram och Facebook</td>
                <td className={styles['line-cell']}>Vi skapar och lägger upp stories som är tillgängliga i 24 timmar</td>
                <td>1000:-</td>
              </tr>

              <tr>
                <td>Fast inlägg på sociala medier + Discord-utskick</td>
                <td className={styles['line-cell']}>
                  Vi skapar och lägger upp ett inlägg som stannar i vårt flöde, samt gör ett utskick i vår
                  Discord-server
                </td>
                <td>3000:-</td>
              </tr>

              <tr>
                <td>Delning av era inlägg</td>
                <td className={styles['line-cell']}>Vi repostar ert inlägg på våra Instagram- och Facebook-konton</td>
                <td>500:-</td>
              </tr>
            </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="contact-arbetsmarknad">
          <div className={styles['contact-text']}>
            <h2>Kontakta arbetsmarknadsutskottet</h2>
            <p>
              Är ditt företag intresserade av möjligheten att marknadsföra er till våra medlemmar? Vill ni hitta
              intresserade av era exjobb eller traineeprogram? Eller har ni frågor och funderingar om
              marknadsföringsmöjligheterna vi erbjuder? Kontakta vårt arbetsmarknadsutskott för att höra mer!
            </p>
          </div>

          <div className="small-info-card">
            <h3>Företagsärenden</h3>
            <a href="mailto:arbetsmarknad@cssektionen.se">arbetsmarknad@cssektionen.se</a>
          </div>
        </Reveal>
        */}
      </main>
    </div>
  );
}
