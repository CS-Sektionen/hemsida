import styles from './Aktiviteter.module.css';
import { Reveal } from '../components/Reveal';

export function Aktiviteter() {
  return (
    <>
      <div id="aktiviteter-frame" className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Aktiviteter</h1> 
          <div className={styles['heading-card-content']}>
            <h2>Inget du vill missa!</h2>
            <p>
              {' '}
              I sektionen anordnar vi många olika aktiviteter för våra medlemmar. Här kan du läsa mer om några av de vanligaste aktiviteterna i sektionen. 
              Vill du veta mer om våra aktiviteter eller har du ett förslag på något event du skulle vilja att vi höll i? 
              Kontakta studiesociala utskottet eller några av våra program egos så kan vi tillsammans se till att det blir av! 
            </p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">
        <div className={styles.aktiviteter}>
          <Reveal className={`info-card-container ${styles['info-card-container']}`}>
            <div className="info-text">
              <h2>Märkestisdagar</h2>
              <p>
                En av Umeå Universitets starkaste studenttraditioner är nog märkesförsäljning på tisdagar. 
                Varje tisdag under terminerna kan studenter köpa märken och andra produkter från sektioner och föreningar på campus. 
                Och såklart så finns CS-sektionen där och säljer våra egna märken, så kom förbi och köp ett märke eller två!
              </p>
            </div>
            <img src="/Images/markestisdag.jpg" alt="Märkesförsäljning på tisdagar" />
          </Reveal>

          <Reveal className={`info-card-container ${styles['info-card-container']}`}>
            <img src="/Images/ovveinvigning.jpg" alt="Studenter som inviger sina ovvar" />
            <div className="info-text">
              <h2>Ovveinvigningen</h2>
              <p>
                Vad vore studentlivet utan en overall? Efter mottagningen kan alla nya studenter skaffa en egen overall som de kan använda under sin tid på universitetet.
                Men innan den kan användas måste den invigas! Under ovveinvigningen får alla nya studenter lära sig hur man använder sin overall på rätt sätt, och se till så
                att den inte är för ren innan anvädning...
              </p>
            </div>
          </Reveal>

          <Reveal className={`info-card-container ${styles['info-card-container']}`}>
            <div className="info-text">
              <h2>Åre skiweek</h2>
              <p>
                Är du taggad på vintern, med skidåkning och kanske framför allt after ski? Åre skiweek är en årlig tradition bland studenter på flera universitet. 
                Vissa år anordnar CS-sektionen en resa till Åre för sektionens medlemmar så att det ska bli billigare och enklare för dig att delta.
                Se till att hålla koll på våra sociala medier och vår kalender för att inte missa när anmälan öppnar!
              </p>
            </div>
            <img src="/Images/are-skiweek.jpg" alt="Åre skidbacke" />
          </Reveal>

          <Reveal className={`info-card-container ${styles['info-card-container']}`}>
            <img src="/Images/ovve.jpg" alt="GIB ordnar fika och häng" />
            <div className="info-text">
              <h2>Syjuntor med fika</h2>
              <p>
                Ta med din ovve och nål och tråd och kom förbi på en syjunta! Under syjuntorna kan du träffa andra studenter, fika och fixa med din overall.
              </p>
            </div>
          </Reveal>

          <div className={styles['aktivitet-lan']}>
            <Reveal className={`info-card-container ${styles['info-card-container']}`}>
              <div className="info-text">
                <h2>LAN-helger</h2>
                <p>
                  En av de mest populära aktiviteterna som anordnas av CS-sektionen är LAN-helgerna. Under dessa helger kan studenter samlas och spela datorspel tillsammans under en hel helg. 
                  Det finns olika turneringar och aktiviteter, samt bjuds det på stora mängder med snacks och dryck. 
                </p>
              </div>
              <img src="/Images/LANbild1.png" alt="Deltagare som LAN:ar" />
            </Reveal>

            <Reveal className={`info-card-container ${styles['info-card-container']}`}>
              <img src="/Images/LANbild2.png" alt="Mario Kart-turnering under LAN-event" />
              <div className="info-text">
                <p>
                  Du behöver inte vara en hardcore gamer för att delta på LAN-helgerna, utan alla är välkomna oavsett erfarenhet. 
                  Det finns även tv-spel och brädspel för de som vill ta en paus från att spela på sin egen dator. 
                  LAN-helgerna är en fantastisk möjlighet att träffa nya människor och ha kul tillsammans med andra studenter.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className={`info-card-container ${styles['info-card-container']}`}>
            <div className="info-text">
              <h2>PUB:ar</h2>
              <p>
                Efter en lång dag med föreläsningar och plugg kan det vara skönt att ta en paus. Ta med dina vänner och kom förbi på en PUB! 
                Under PUB:arna kan du träffa andra studenter, ta en öl eller en läsk och bara ha kul.
              </p>
            </div>
            <img src="/Images/pub.jpg" alt="PUB anordnad av undergrupp" />
          </Reveal>
        </div>
      </main>
    </>
  );
}
