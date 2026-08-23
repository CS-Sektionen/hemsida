import styles from './Contact.module.css';
import { ContactCard } from '../components/ContactCard';
import { Reveal } from '../components/Reveal';

const categories = [
  {
    id: 'styrelsen',
    title: 'Styrelsen',
    description: 'Är du osäker på vem du ska kontakta kan du alltid skicka ett DM på instagram, eller kontakta kommunikationsutskottet för vidare hänvisning. Annars hittar du kontaktuppgifter till hela styrelsen här.',
    contact: [
      {
        name: 'Ture Åström Säfsten',
        email: 'ordforande@cssektionen.se',
        role: 'Ordförande',
      },
      {
        name: 'Cedric Strand',
        email: 'kassor@cssektionen.se',
        role: 'Kassör',
      },
      {
        name: 'Lukas Walther',
        email: 'vice@cssektionen.se',
        role: 'Vice Ordförande',
      },
      {
        name: 'Kevin Molin',
        email: 'sekreterare@cssektionen.se',
        role: 'Sekreterare',
      },
      {
        name: 'Vakant',
        email: 'arbetsmarknad@cssektionen.se',
        role: 'Arbetsmarknadsutskottet',
      },
      {
        name: 'Manar Al-Latifi',
        email: 'kommunikation@cssektionen.se',
        role: 'Kommunikationsutskottet',
      },
      {
        name: 'Elias Svensson',
        email: 'studiesocial@cssektionen.se',
        role: 'Studiesociala utskottet',
      },
      {
        name: 'Ellinor Rosenberg',
        email: 'utbildning@cssektionen.se',
        role: 'Utbildningsbevakningsutskottet',
      },
      {
        name: 'Hannes Svonni',
        email: 'cego@cssektionen.se',
        role: 'C-ego',
      },
      {
        name: 'Hannes Nilsson',
        email: 'dvego@cssektionen.se',
        role: 'DV-ego',
      },
      {
        name: 'Lukas Melin',
        email: 'idego@cssektionen.se',
        role: 'ID-ego',
      },
    ],
  },
  {
    id: 'undergrupper',
    title: 'Undergrupper',
    description: 'Är du nyfiken på att vara med i en undergrupp? Har du frågor om vad undergrupperna arbetar med eller har du ett förslag på något event du skulle vilja att de höll i? Här finns kontaktuppgifter till dem som ansvarar för våra undergrupper.',
    contact: [
      {
        name: 'Lukas Walther',
        role: 'LANbyCS projektledare',
        email: 'lanbycs@gmail.com',
      },
      {
        name: 'Emma Edlund',
        email: 'dataicssektionen@gmail.com',
        role: 'DiCS projektledare',
      },
       {
        name: 'Emelie Lindahl',
        role: 'Ansvarig märkesgruppen',
        email: 'emielindahl@gmail.com',
      },
      {
        name: 'Vakant (Tidigare Ellinor Rosenberg)',
        email: 'gibdata2@gmail.com',
        role: 'GIB ordförande',
      },
    ],
  },
]

export function Contact() {
  return (
    <div className={styles.page}>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Kontakt</h1>
          <div className={styles['heading-card-content']}>
            <p>
              {' '}
              Har du frågor, funderingar eller förslag? Kontakta oss gärna! Ingen fråga är för liten eller för stor, och vi svarar så fort vi kan.
            </p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">        
        <div className={styles['contact-undergrupp']}>
          <div className={styles['styrelse-squares']}>
            {categories.map((category) => (
              <Reveal className={styles['styrelse-kategori']} key={category.title} id={category.id}>
                <div className={styles['kategori-beskrivning']}>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>

                <div className={styles['contact-cards']}>
                  {category.contact.map((member) => (
                    <ContactCard key={member.name + member.role} {...member} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className={styles['form-and-text']} id="motioner">
          <h2>Motioner och förslag</h2>
          <p>
            Har du ett förslag eller en motion som du vill att styrelsen ska ta upp på ett styrelsemöte? Fyll i formuläret nedan så kommer det att skickas till kommunikationsutskottet som vidarebefordrar det till styrelsen.
          </p>

          <div className={`contact-container ${styles['contact-container']}`}>
            <form action="mailto:kommunikation@cssektionen.se">
              <label htmlFor="first-name">För- och efternamn</label>
              <input type="text" id="first-name" placeholder="Ditt namn..." required />

              <label htmlFor="last-name">Mejladress</label>
              <input type="text" id="last-name" placeholder="Din mejladress..." required />

              <label htmlFor="program">Program</label>
              <select id="program" required defaultValue="">
                <option disabled value="">
                  Välj ditt program
                </option>
                <option>Civiling. Interaktion &amp; Design</option>
                <option>Civiling. Datavetenskap</option>
                <option>Kandidatprogrammet i Datavetenskap</option>
                <option>Masterprogrammet i Datavetenskap</option>
                <option>Masterprogrammet i AI</option>
              </select>

              <label htmlFor="business">Ärende</label>
              <select id="business" required defaultValue="">
                <option disabled value="">
                  Vad gäller ditt ärende?
                </option>
                <option>Motion till styrelsemöte</option>
                <option>Fråga eller fundering</option>
                <option>Förslag</option>
                <option>Annat</option>
              </select>

              <label htmlFor="subject">Ämne</label>
              <textarea id="subject" placeholder="Meddelande..." required></textarea>

              <div className={styles['submit-button']}>
                <div className="filled-button">
                  <input type="submit" value="Skicka" />
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
