import { Link } from 'react-router-dom';
import styles from './Undergrupper.module.css';
import { MemberCard } from '../components/MemberCard';
import { Reveal } from '../components/Reveal';

const projektledare = [
  {
    image: '/Images/styrelse-bilder/vice.jpg',
    imageAlt: 'LANbyCS projektledare',
    name: 'Lukas Walther',
    role: 'LANbyCS',
    description: 'Jag heter Lukas! Datavetare på mitt tredje år, och jag är även vice ordförande för sektionen. Som projektledare är min uppgift att anordna minst ett LAN per år, efter möjlighet, samt sammarbeta med Styrelsen för att främja studentlivet på sektionen. Rollen innebär mycket kommunikation mellan Styrelsen, projektgruppen, NTK samt eventuella andra organisationer kopplade till eventet, som exempelvis sponsorer.',
  },
  {
    image: '/Images/emma-dics.jpg',
    imageAlt: 'Projektledare för DiCS',
    name: 'Emma Edlund',
    email: 'dataicssektionen@gmail.com',
    role: 'DiCS',
    description: 'Hej hej! Jag heter Emma och går tredje året på ID. Utöver DiCS så sjunger och dansar jag i Medicinarspexet, Sparketten och Nationskören. Eftersom undergruppen precis dragit igång så är min uppgift just nu att definiera vad undergruppen ska göra och hur den ska fungera. Jag är även ansvarig för att hålla kontakt med styrelsen, ordna DiCS aktiviteter, och utveckling av hemsidan såklart. Om du har idéer på vad DiCS ska göra och vill engagera dig i undergruppen så är det bara att höra av dig till mig!',
  },
  {
    image: '/Images/styrelse-bilder/placeholder.jpg',
    imageAlt: 'Ansvarig för MaCS',
    name: 'Emelie Lindahl',
    email: 'emielindahl@gmail.com',
    role: 'MaCS',
    description: 'Har du en idé på ett märke som du vill att sektionen ska ha? Då är det mig du ska kontakta! Jag är ansvarig för märkesgruppen och ser till att sektionen har riktigt snygga märken att sälja på märkestisdagen.',
  },
    {
    image: '/Images/styrelse-bilder/placeholder.jpg',
    imageAlt: 'GIB ordförande',
    name: 'Vakant',
    email: 'gibdata2@gmail.com',
    role: 'GIB',
    description: 'Ansvarig för Gäris & Ickebinäris (GIB) är vakant. Om du vill engagera dig i undergruppen eller har frågor om deras verksamhet, kontakta styrelsen för vidare hänvisning.',
  },
];

export function Undergrupper() {
  return (
    <>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Undergrupper</h1>
          <div className={styles['heading-card-content']}>
            <h2>Hur blir jag engagerad?</h2>
            <p>
              {' '}
              Undergrupper är grupper som är en del av CS-sektionen och som arbetar med olika projekt och aktiviteter.
              De har som syfte att engagera medlemmar i sektionen och skapa en gemenskap kring olika intressen. 
              Vill du starta en undergrupp eller engagera dig i någon av de befintliga undergrupperna?
            </p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">
        <div className={styles['befintliga-undergrupper']}>
          <Reveal className={styles.undergrupp}>
            <img src="/Images/LANbyCS.png" alt="Bild på LANbyCS logga" />
            <div className={styles['undergrupp-text']}>
              <h2>LANbyCS</h2>
              <p>
                LANbyCS är en projektgrupp som håller LAN-partyn för CS-sektionen och övriga studenter. 
                Vi är en grupp som brinner för gaming och vill skapa en rolig och social upplevelse för alla deltagare. 
                Vi anordnar LAN varje vår- och hösttermin, och ibland samarbetar vi med andra campus runtom i Sverige för att skapa Cross-Country LAN. 
                Vår vision är att skapa en gemenskap kring gaming och ge studenterna möjlighet att träffas, spela tillsammans och ha kul!
              </p>
            </div>
          </Reveal>

             <Reveal className={styles.undergrupp}>
            <img src="/Images/join-computer-science.jpg" alt="Bild på DiCS logga" />
            <div className={styles['undergrupp-text']}>
              <h2>DiCS (Data i CS)</h2>
              <p>
                Äntligen så har undergruppen DiCS dragit igång! DiCS är en undergrupp som vill främja intresset för data och programmering bland medlemmarna i sektionen.
                Undergruppen kommer att anordna olika aktiviteter och evenemang som är relaterade till data och programmering, såsom workshops, föreläsningar och hackathons. 
                DiCS vill skapa en gemenskap kring data och programmering och ge medlemmarna möjlighet att lära sig mer om ämnet. Har du kanske ett hobbyprojekt som du vill 
                genomföra tillsammans med andra och vill ha hjälp med resurser? Då är DiCS undergruppen för dig!
              </p>
            </div>
          </Reveal>

          <Reveal className={styles.undergrupp}>
            <img src="/Images/MaCS-logga.png" alt="Bild på märkesgruppens logga" />
            <div className={styles['undergrupp-text']}>
              <h2>MaCS (Märken av CS)</h2>
              <p>
                MaCS är en undergrupp som ansvarar för att designa och märken till CS-sektionen. 
                Har du en idé på ett märke som du vill att sektionen ska ha? Då är det MaCS du ska kontakta! 
                De ser till att sektionen har riktigt snygga märken att sälja på märkestisdagen.
              </p>
            </div>
          </Reveal>

       

           <Reveal className={styles.undergrupp}>
            <img src="/Images/GiB.png" alt="Bild på GIBs logga" />
            <div className={styles['undergrupp-text']}>
              <h2>Gäris &amp; Ickebinäris (GIB)</h2>
              <p>
                Gäris &amp; Ickebinäris (GIB) är en undergrupp som arbetar för att främja jämställdhet och inkludering inom CS-sektionen.
                De riktar sig främst till kvinnor och ickebinära personer, men alla är välkomna på deras aktiviteter. 
              </p>
            </div>
          </Reveal>
        </div>

        

        <Reveal className={styles['projektledare-cards']}>
          <h2>Projektledare</h2>
          {projektledare.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </Reveal>

        <Reveal className={`program-card ${styles['program-card']}`}>
          <div className={styles['skapa-undergrupp']}>
            <div className="skapa-undergrupp-text">
              <h3>Vill du starta en undergrupp?</h3>
              <p>
                Vad roligt! Om du har en idé på en undergrupp som du tycker borde finnas så vill vi höra om den.
                Kontakta ordförande för mer information om hur det fungerar att starta en undergrupp och vilket
                stöd sektionen kan ge dig.
              </p>
            </div>
            <Link className="filled-button" to="/kontakt#styrelsen">
              Kontaktuppgifter
            </Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}
