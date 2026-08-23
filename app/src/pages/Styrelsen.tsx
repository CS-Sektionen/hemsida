import type { ReactNode } from 'react';
import styles from './Styrelsen.module.css';
import { MemberCard } from '../components/MemberCard';
import { Reveal } from '../components/Reveal';

interface Category {
  title: string;
  description?: ReactNode;
  members: {
    image: string;
    imageAlt: string;
    name: string;
    email: string;
    role: string;
    description: ReactNode;
  }[];
}

const egoDescription = (
  <>
    Som C-ego, DV-ego eller ID-ego representerar du Civilingenjörsprogrammet Teknisk Datavetenskaps, Interaktion
    och Designs eller Kanditatprogrammet i Datavetenskaps intressen inom CS-sektionen vid NTK. Deras huvuduppgift är
    att aktivt delta vid sektionens styrelsemöten, evenemang och övriga sammanträden och på dessa värna om
    programmets intressen genom att se till att programmet inte bortses vid beslut och att programmets åsikter
    kommer fram vid diskussioner.
  </>
);

const categories: Category[] = [
  {
    title: 'Presidiet',
    members: [
      {
        image: '/Images/styrelse-bilder/ordforande.jpg',
        imageAlt: 'ordförande',
        name: 'Ture Åström Säfsten',
        email: 'ordforande@cssektionen.se',
        role: 'Ordförande',
        description: (
          <>
            Hej, jag heter Ture och är ordförande för CS-sektionen. Jag går 3:e året på ID och har tidigare varit ID-ego i styrelsen.
            Utöver sektionsarbete så jobbar jag ofta på Origo, eller syr fler märken på min ovve (hittils 300 märken).            
            <br />
            <br />
            Som ordförande är det mitt ansvar att leda styrelsen och se till att sektionen fungerar som den ska. 
            Jag ser till att vi följer stadgarna och reglementet, och att vi arbetar mot sektionens mål. Jag är också den som representerar sektionen på O-rådet, 
            där vi träffar ordförandena från de andra sektionerna och diskuterar frågor som rör hela kåren. 
            Som ordförande är det extra viktigt att ha en översikt över sektionens funktion,
            förstå och agera efter stadgarna och reglementet samt leda styrelsen.
          
          </>
        ),
      },
      {
        image: '/Images/styrelse-bilder-2025/lukas.jpg',
        imageAlt: 'kassör',
        name: 'Cedric Strand',
        email: 'kassor@cssektionen.se',
        role: 'Kassör',
        description: (
          <>Jag heter Cedric och är kassör för sektionen. För tillfället pluggar jag mitt andra år på data. Om ni söker mig så finns jag oftast på Origo.
            <br />
            <br />
            Som kassör så ansvarar jag att hålla koll på sektionens ekonomi och se till att vi har en hållbar budget. 
            På mötena så är det min uppgift att presentera ekonomiska rapporter och budgetförslag, samt att ge råd om ekonomiska beslut.
            Allt som görs ska alltid vara gynnsamt för de som är medlemmar i sektionen
            (medlemmar i NTK), de ska alltså få en förmån av detta som till exempel att ett evenemang blir
            billigare för medlemmar.
          </>
        ),
      },
    ],
  },
  {
    title: 'Presidiestöd',
    members: [
      {
        image: '/Images/styrelse-bilder/vice.jpg',
        imageAlt: 'vice ordförande',
        name: 'Lukas Walther',
        email: 'vice@cssektionen.se',
        role: 'Vice Ordförande',
        description: (
          <>Jag heter Lukas! Datavetare på mitt tredje år, och jag är även projektledare för LANbyCS. Om ni har tur kanske ni ser mig när jag extraknäcker på Burger King. 
            <br />
            <br />
            Som vice ordförande delar jag ordförandens arbetsuppgifter. Precis som ordförande är det extra viktigt att jag har en översikt över sektionens
            funktion, förstå och agera efter stadgarna och reglementet och hjälpa till att leda styrelsen. Vice jobbar ofta för att i huvudsak lära om
            ordföranderollen för att på ett effektivt sätt kunna överta rollen som ordförande så att sektionens
            kunskap förs vidare varje år.
          </>
        ),
      },
      {
        image: '/Images/styrelse-bilder-2025/lukas.jpg',
        imageAlt: 'sekreterare',
        name: 'Kevin Molin',
        email: 'sekreterare@cssektionen.se',
        role: 'Sekreterare',
        description: (
          <>
            <br />
            <br />
            Min uppgift är att aktivt delta i de styrelsemöten, evenemang och övriga
            sammankomster och föra protokoll över vad som sägs, bestäms och tas upp. Protokollet ska sedan signeras och publiceras på CS-sektionens hemsida
            , så att alla medlemmar kan ta del av det som har diskuterats och beslutats.
          </>
        ),
      },
    ],
  },
  {
    title: 'Utskott',
    members: [
      {
        image: '/Images/styrelse-bilder/placeholder.jpg',
        imageAlt: 'arbetsmarknadsutskottet',
        name: 'Vakant',
        email: 'arbetsmarknad@cssektionen.se',
        role: 'Arbetsmarknads­utskottet',
        description: (
          <>
            Denna post handlar om näringslivsfrågor, som att ta kontakt med och ta emot förfrågningar från företag, och anordna intressanta
            företagsevenemang för sektionens studenter. Som ansvarig för arbetsmarknadsutskottet är det viktigt att ha förståelse för 
            näringslivet och studenternas behov, samt att kunna bygga relationer med företag och andra aktörer. Utöver att hjälpa studenterna att knyta kontakter med arbetslivet,
            så knyter arbetsmarknadsutskottet starkast kontakter som ansiktet utåt till företagen som kan hjälpa inför ex-jobb, praktik och anställning.
          </>
        ),
      },
      {
        image: '/Images/styrelse-bilder-2025/lukas.jpg',
        imageAlt: 'Kommunikationsutskottet',
        name: 'Manar Al-Latifi',
        email: 'kommunikation@cssektionen.se',
        role: 'Kommunikations­utskottet',
        description: (
          <>
            <br />
            <br />
            Jag ansvarar för att information når ut till medlemmarna, och gör PR åt sektionen och kåren. 
            I detta ingår att hålla våra informationskanaler aktiva och attraktiva så att medlemmar
            får den informationen vi vill förmedla samt att vi ska locka nya medlemmar.
          </>
        ),
      },
      {
        image: '/Images/styrelse-bilder-2025/lukas.jpg',
        imageAlt: 'studiesociala utskottet',
        name: 'Elias Svensson',
        email: 'studiesocial@cssektionen.se',
        role: 'Studiesociala utskottet',
        description: (
          <>
            <br />
            <br />
            Jag ansvarar kring studiesociala frågor såsom evenemang och aktiviteter men även mobbning, lärare som felbehandlar studenter, diskriminering
            och andra aspekter som påverkar den sociala upplevelsen för studenter. 
            Vill du vara med och ordna aktiviteter eller kanske känner dig felbehandlad på något sätt? Tveka inte att kontakta mig!
          </>
        ),
      },
      {
        image: '/Images/styrelse-bilder-2025/lukas.jpg',
        imageAlt: 'Utbildningsbevakningsutskottet',
        name: 'Ellinor Rosenberg',
        email: 'utbildning@cssektionen.se',
        role: 'Utbildnings­bevaknings­utskottet',
        description: (
          <>
            <br />
            <br />
            Som representant för CS-sektionen inom utbildningsbevakningsenheten så hjälper jag
            studenter med problem rörande utbildning och/eller studiesituation samt
            informerar om deras rättigheter. Jag arbetar för att uppmärksamma och driva de frågor som är relevanta för studenterna inom din
            sektion. Dessa rör allt mellan kvalitén på utbildningen till olika frågor om studentens rättigheter
            och skyldigheter vid Umeå universitet.
          </>
        ),
      },
    ],
  },
  {
    title: 'Egon',
    description: egoDescription,
    members: [
      {
        image: '/Images/styrelse-bilder-2025/lukas.jpg',
        imageAlt: 'C-ego',
        name: 'Hannes Svonni',
        email: 'cego@cssektionen.se',
        role: 'C-ego',
        description: '',
      },
      {
        image: '/Images/styrelse-bilder-2025/lukas.jpg',
        imageAlt: 'DV-ego',
        name: 'Hannes Nilsson',
        email: 'dvego@cssektionen.se',
        role: 'DV-ego',
        description: '',
      },
      {
        image: '/Images/styrelse-bilder-2025/lukas.jpg',
        imageAlt: 'ID-ego',
        name: 'Lukas Melin',
        email: 'idego@cssektionen.se',
        role: 'ID-ego',
        description: '',
      },
    ],
  }
];

export function Styrelsen() {
  return (
    <>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Styrelsen</h1>
          <div className={styles['heading-card-content']}>
            <h2>Vilka är det?</h2>
            <p>{''}
              Styrelsen är sektionens högsta beslutande organ och består av presidiet, presidiestöd, utskott och egon. 
              De har som uppgift att leda sektionen och se till att det som beslutas på stormöten genomförs. 
              Styrelsen är även ansvarig för att representera sektionen i olika sammanhang, både internt och externt.
              Här kan du läsa mer om de olika rollerna i styrelsen och vilka som sitter på dem just nu.
            </p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">
        <div className={styles['styrelse-squares']}>
          {categories.map((category) => (
            <Reveal className={styles['styrelse-kategori']} key={category.title}>
              <div className={styles['kategori-beskrivning']}>
                <h2>{category.title}</h2>
                {category.description && <p>{category.description}</p>}
              </div>

              {category.members.map((member) => (
                <MemberCard key={member.name + member.role} {...member} />
              ))}
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
