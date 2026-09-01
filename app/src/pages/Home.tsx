import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { Carousel } from '../components/Carousel';
import { Reveal } from '../components/Reveal';
import { useIntroAnimation } from '../hooks/useIntroAnimation';
import { scrollToId } from '../hooks/useScrollToId';

export function Home() {
  useIntroAnimation();

  return (
    <>
      <div className="heading-frame">
        <div className={`heading-content ${styles['heading-content']}`}>
          <section className={`heading-card ${styles['heading-card']}`}>
            <div className={`card-headers ${styles['card-headers']}`}>
              <h1>CS-SEKTIONEN</h1>
              <h2>vid Umeå Universitet</h2>
            </div>
            <div className={`card-content ${styles['card-content']}`}>
              <p>
                {' '}
                CS-sektionen (där CS står för “Computing Science”) vid Umeå Universitet arbetar för att studenter på
                Datavetenskap och Interaktion &amp; Design ska få en så bra och givande studietid som möjligt. Vi
                håller i evenemang som sittningar och LAN, har koll på kvalitén på din utbildning – både det som
                händer i och utanför föreläsningssalarna – har kontakt med företag, och, inte minst: hjälper till
                att arrangera mottagningen.
              </p>
              <a
                href="#NTK"
                className="filled-button"
                id="scroll"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId('#NTK');
                }}
              >
                Bli medlem
              </a>
            </div>
          </section>
          <img src="/Images/CS-logga.png" alt="CS-sektionens logga" />
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">
        <Reveal className="info-card-container">
          <img src="/Images/clubx2019.jpg" alt="club på Origo" />
          <div className="info-text">
            <h2>För ditt studentliv</h2>
            <p>
              CS-sektionen är till för att främja ditt studentliv på något av våra program. Vi arrangerar sociala
              evenemang, studiekvällar och intressegrupper för att göra din studietid så bra som möjligt. Oavsett
              vad du är intresserad av är du alltid välkommen hos oss. Håll utkik i vår kalender för att se nästa
              evenemang.
            </p>
          </div>
        </Reveal>

        <Reveal className="info-card-container">
          <div className="info-text">
            <h2>Bästa välkomnandet</h2>
            <p>
              Varje år börjar ett gäng nya studenter på något av programmen under CS-sektionen, och vi ser till att
              alla ska få det bästa välkomnandet genom en tre veckors mottagning. Kanske är du en ny student? På
              sidan "Ny student" har vi sammanställt saker som är bra att ha koll på när du börjar.
            </p>
          </div>
          <img src="/Images/dammplasket.jpg" alt="Dammplasket i campusdammen" />
        </Reveal>

        <Reveal className="program-card">
          <Carousel
            slides={[
              <div className="program-image-content" key="c">
                <img src="/Images/c.png" alt="logga" />
              </div>,
              <div className="program-image-content" key="dv">
                <img src="/Images/dv.png" alt="logga" />
              </div>,
              <div className="program-image-content" key="id">
                <img src="/Images/id.png" alt="logga" />
              </div>,
            ]}
          />

          <div className="program-text-content">
            <h2>Program</h2>
            <p> Om du tillhör någon av följande: </p>

            <ul>
              <li>Civilingenjörsprogrammet i Interaktion &amp; Design (ID)</li>
              <li>Civilingenjörsprogrammet i Teknisk Datavetenskap (C)</li>
              <li>Kandidatprogrammet i Datavetenskap (DV)</li>
              <li>Övriga studenter som läser merparten av sina kurser under Institutionen för Datavetenskap</li>
            </ul>

            <p>
              så är CS din sektion. Vi strävar efter att erbjuda något för alla våra medlemmar, men tycker du att
              något saknas så finns det alltid möjlighet att driva igenom egna idéer!
            </p>
          </div>
        </Reveal>

        <Reveal id="NTK" className={`info-card-container ${styles['ntk-card']}`}>
          <div className="info-text">
            <h2>NTK och medlemskap</h2>
            <p>
              CS-sektionen är en sektion under NTK, Umeå naturvetar- och teknologkår. Som medlem får du hjälp i
              frågor rörande dina rättigheter samt tillgång till massor av studentrabatter, bland annat billigare
              kaffe i fiket Mitum. Om du inte är medlem i kåren är du inte heller medlem i CS-sektionen, så passa
              på att bli det!
            </p>
            <div className={`info-text__buttons ${styles['info-text__buttons']}`}>
              <a className="filled-button" href="https://www.ntkumea.se/medlemskap/">
                Bli medlem
              </a>
              <a className="empty-button" href="https://www.ntkumea.se/">
                Mer om NTK
              </a>
            </div>
          </div>
          <div className={styles['ntk-image-container']}>
            <img src="/Images/NTK-logga.png" alt="logga NTK" />
          </div>
        </Reveal>

        <Reveal className={styles['contact-container']}>
          <div className={styles['contact-info-text']}>
            <h2>Kontakt</h2>
            <p>
              Beroende på vad ditt ärende gäller så finns det olika sätt att ta kontakt med oss. Kontaktuppgifter
              till samtliga styrelsemedlemmar hittar du <Link to="/kontakt" className="in-text-link">här</Link>. Är du osäker på vem du ska kontakta kan du alltid
              skicka ett DM på instagram, alternativ kontakta kommunikationsutskottet för vidare hänvisning.
            </p>
          </div>
          <div className={styles['contact-info-cards']}>
            <div className="small-info-card">
              <h3>Företagsärenden</h3>
              <a href="mailto:arbetsmarknad@cssektionen.se">arbetsmarknad@cssektionen.se</a>
            </div>
            <div className="small-info-card">
              <h3>Trivsel</h3>
              <a href="mailto:studiesocial@cssektionen.se">studiesocial@cssektionen.se</a>
            </div>
            <div className="small-info-card">
              <h3>Styrelsen</h3>
              <Link to="/styrelsen">Styrelsens infosida</Link>
            </div>
            <div className="small-info-card">
              <h3>Övrigt</h3>
              <a href="mailto:kommunikation@cssektionen.se">kommunikation@cssektionen.se</a>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
