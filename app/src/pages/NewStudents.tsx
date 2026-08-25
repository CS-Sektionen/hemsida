import styles from './NewStudents.module.css';
import { Collapsible } from '../components/Collapsible';
import { Reveal } from '../components/Reveal';

const items = [
  {
    title: 'Antagen? - Tacka ja!',
    text: (
      <p>
        Det första du bör göra är att tacka ja till din plats på antagning.se. I välkomstbrevet hittar du all info
        om kursstart så som hur du registrerar dig på kursen och vilken kurslitteratur som behövs. Läs mer på:{' '}
        <a className={styles['text-link']} href="https://umu.se/student/mina-studier/ny-student/" target="_blank" rel="noreferrer">
          umu.se/student/mina-studier/ny-student
        </a>
      </p>
    ),
    image: <img src="/Images/tackaja.WebP" alt="Student som kollar på en mobil" />,
  },
  {
    title: 'Boende',
    text: (
      <p>
        Det kan vara svårt att hitta boende till skolstarten. Många bor därför provisoriskt till en början.
        Bostaden, Heimstaden, K2a, Rikshem, Riksbyggen, Lerstenen, Campus Living är några förslag på bostadsköer att
        ställa sig i. Det kan även vara värt att gå med i diverse facebook-grupper för boende i Umeå, eller höra
        runt med folk i din klass om de har något annat tips.
      </p>
    ),
    image: <img src="/Images/tviste.jpg" alt="BLA BLA" />,
  },
  {
    title: 'Kåren',
    text: (
      <>
        <p>
          CS-sektionen är en sektion under NTK, Umeå naturvetar- och teknologkår. Som medlem får du hjälp i frågor
          rörande dina rättigheter samt tillgång till massor av studentrabatter, bland annat billigare kaffe i
          fiket Mitum. Om du inte är medlem i kåren är du inte heller medlem i CS-sektionen, så passa på att bli
          det!
        </p>
        <div className="info-text__buttons">
          <a className="filled-button" href="https://www.ntkumea.se/medlemskap/">
            Bli medlem
          </a>
        </div>
      </>
    ),
    image: <img src="/Images/ntk.jpg" alt="Kåren vid campusdammen" />,
  },
  {
    title: 'Mottagningen',
    text: (
      <p>
        Kallas även för nollning, nolle-P, inspark eller liknande. Det handlar om en eller flera veckor innan
        skolstart som fylls av olika aktiviteter med klassen för att ni ska få tillfälle att lära känna varandra.
        Det är valfritt att delta och du kan själv välja vilka event du vill gå på. Det brukar vara väldigt mycket
        roligt som sker och det är ett ypperligt tillfälla att knyta nya kontakter, därför är det bra att vara med
        i någon mån!
      </p>
    ),
    image: <img src="/Images/mottagningen.jpg" alt="N0llor under mottagningen" />,
  },
  {
    title: 'Hitta på campus',
    text: (
      <p>
        Till en början kan det vara klurigt att hitta på campus med alla olika byggnader, loftgångar och klassrum.
        Oroa dig inte, du kommer lära dig tillslut. Det som kan vara bra att känna till är att klassrumen i regel
        är döpta efter byggnad och våning. Ett tips är att ladda ner appen MazeMap där du enkelt kan söka på
        specifika salar.
      </p>
    ),
    image: <img src="/Images/flygbild-universitet.jpg" alt="flygbild över umeå universitet" />,
  },
  {
    title: 'Transport',
    text: (
      <p>
        Kollektivtrafiken i Umeå kallas för Ultra och i appen kan du köpa bussbiljett, se tidtabeller, etc. De
        flesta linjer passerar campus där Universum, Samhällsvetarhuset och Växthuset är de närmsta stationerna.
        Men framför allt - ha cykel! Stadsdelarna ligger nära varandra så det är värt för att kunna ta sig runt på
        ett billigt och enkelt sätt när det inte är för mycket snö.
      </p>
    ),
    image: <img src="/Images/lindellhallen-cyklar.jpg" alt="cyklar vid lindellhallen" />,
  },
  {
    title: 'Kurslitteratur',
    text: (
      <p>
        Kurslitteratur kan vara dyrt att köpa nytt så ett tips är att köpa i andra hand. Bland annat kan du kolla på
        NTK's kurslitteraturtorg och i andra facebookgrupper. Studentapan är en hemsida för att köpa begagnat
        kurslitteratur. Du kan även höra med dina äldrekursare om de har böcker att sälja, vilka som är relevanta,
        men även om de har anteckningar eller sammanfattningsdokument att dela med sig av.
      </p>
    ),
    image: <img src="/Images/kurslitteratur.jpg" alt="bokhyllor" />,
  },
  {
    title: 'Mat och lunchtips',
    text: (
      <p>
        Gör matlådor och ta med till skolan! Bestick behöver man ta med själv, så se till att alltid ha en spork i
        väskan! Mikrorum finns lite här och var. Ta med kaffe i en termos! I längden kommer det spara dig en hel
        del pengar. Har du glömt lunch så finns det flera restauranger på campus, Mitum drivs av NTK och är ett av
        de mer prisvärda studentcaféerna!
      </p>
    ),
    image: <img src="/Images/mitum.png" alt="Kårfiket Mitum" />,
  },
  {
    title: 'Origo',
    text: (
      <p>
        Kårhuset Origo drivs av NTK och är ett av flera kårhus. Ett kårhus är studenternas uteställe men anordnar 
        ibland även andra event så som pluggkvällar och liknande. Just Origo är beläget alldeles bredvid campus (0.0.0) och som medlem i NTK får du rabatterat inträde. 
        Det är öppet mycket under mottagningen, och annars är det öppet för pub på tisdagar samt nattklubb fredagar och lördagar. Origo drivs av studenter för studenter.
      </p>
    ),
    image: <img src="/Images/Kårhuset_Origo.jpg" alt="Kårhuset origo" />,
  },
  {
    title: 'IKSU',
    text: (
      <p>
        IKSU är en av Umeås största träningsanläggningar och är populärt bland studenter då det ligger precis vid
        campus. IKSU erbjuder bland annat gym, klättring, simning och mycker mer. Som student får du rabatterat
        medlemskap samt ytterligare rabatt om du är kårmedlem.
      </p>
    ),
    image: <img src="/Images/Iksu_Sport.jpg" alt="IKSU" />,
  },
  {
    title: 'Sittning',
    text: (
      <p>
        En sittning är ett slags studentevent där man vanligen samlas för att äta mat och festa tillsammans. Det
        finns både fin- och fulsittningar. Vanligtvis avslutas mottagningen med en finsittning så se till att packa
        med finkläderna. Sittningar hålls ofta på kårhusen.
      </p>
    ),
    image: <img src="/Images/sittning-origo.jpg" alt="dukat bord origo" />,
  },
  {
    title: 'Festerier',
    text: (
      <p>
        Festerierna ordnar fester och roliga aktiviteter för ditt program. Festeriet för datavetenskap heter Piraya
        Party Providers och festeriet för Interaktion &amp; Design heter IndivID.
      </p>
    ),
    image: <img src="/Images/tyska-striden.jpg" alt="tyska striden med IndivID" />,
  },
  {
    title: 'Ovvar',
    text: (
      <p>
        Kallas även för studentoverall och det är ett traditionsenligt studentplagg som bärs på campus på tisdagar, 
        vid speciella tillfällen eller när man vill. Datavetenskaps ovvar är ljusblåa där DV urskiljer sig med lila revär 
        och Interaktion & Designs är khaki-färgade. Detta kan vara bra att känna till för att hitta till rätt program första dagen! 
        När du väl får din ovve syr du på ditt namn på höger ben och några valfria märken, sedan är det bara din kreativitet som hindrar 
        dig i vad du gör med den.
      </p>
    ),
    image: <img src="/Images/dataovvar.jpeg" alt="dataovvar" />,
  },
];

export function NewStudents() {
  return (
    <>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Ny student</h1>
          <div className={styles['heading-card-content']}>
            <h2>Hej och välkommen!</h2>
            <p>
              Grattis till dig som blivit antagen till en utbildning under CS-sektionen. I början av studietiden
              kan det kännas som mycket att hålla reda på, därför har vi gjort en checklista med saker som kan vara
              bra att känna till för dig som ny student. Om det är något mer du undrar över, så tveka inte att höra
              av dig till någon i sektionen så hjälper vi gärna till.
            </p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main>
        <div className={styles['checklist-container']}>
          {items.map((item) => (
            <Reveal key={item.title}>
              <Collapsible title={item.title} image={item.image}>
                <div className="info-text">{item.text}</div>
              </Collapsible>
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
