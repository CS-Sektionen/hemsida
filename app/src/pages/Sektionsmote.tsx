import styles from './Sektionsmote.module.css';
import { Reveal } from '../components/Reveal';

export function Sektionsmote() {
  return (
    <>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Sektionsmöten</h1>
          <div className={styles['heading-card-content']}>
            <h2>Vadå möten?</h2>
            <p>
              Sektionsmöten är till för att samordna och fatta beslut kring sektionens arbete. De hålls både som
              styrelsemöten, där styrelsen planerar och följer upp det löpande arbetet, och som stormöten, där alla
              medlemmar kan delta, diskutera frågor och vara med och påverka beslut som rör sektionen. Denna sida
              är utformad för att göra processen med stormöten så enkel som möjligt, så att du kan påverka både
              dina studier och ditt studentliv. På denna sida kan du lära dig allt om hur man skriver en motion
              till hur du startar en undergrupp för att så lätt som möjligt kunna engagera dig i ditt studentliv.
            </p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">
        <Reveal className="info-card-container">
          <img src="/Images/walking.jpg" alt="studenter som går" />
          <div className="info-text">
            <h2>Stormöte</h2>
            <p>
              Ett stormöte är ett tillfälle som hålls en gång per termin där alla medlemmar kan samlas, få koll på
              vad som händer i sektionen och vara med och påverka beslut. Det är här du kan lyfta idéer, åsikter
              och frågor, och tillsammans komma fram till vad sektionen ska göra framåt. Att dyka upp och engagera
              sig på stormöten är viktigt eftersom det ger dig en chans att säga vad du tycker och påverka
              sektionens utveckling. Ju fler som är med, desto bättre blir besluten och samtidigt stärker det
              gemenskapen och engagemanget i sektionen.
            </p>
          </div>
        </Reveal>

        <Reveal className="info-card-container">
          <div className="info-text">
            <h2>Styrelsemöte</h2>
            <p>
              Styrelsemöten är till för att hålla koll på det dagliga arbetet i sektionen och se till att saker
              faktiskt blir gjorda. Här planerar styrelsen, pratar igenom aktuella frågor och fattar beslut som
              driver sektionen framåt. För att allt ska vara öppet och tydligt finns protokoll och andra dokument
              från styrelsemötena sparade och tillgängliga för alla som vill kika. Det gör det lätt att hänga med
              i vad som händer, även om man inte själv sitter i styrelsen.
            </p>
          </div>
          <img src="/Images/styrelsemote.jpg" alt="BLA BLA" />
        </Reveal>

        <Reveal className={`info-card-container ${styles['motion-card']}`} id="motion">
          <div className="info-text">
            <h2>Motion</h2>
            <p>
              Genom att skriva en motion får du som medlem möjlighet att göra din röst hörd och påverka både
              studier och gemenskap. Det är ett enkelt och konkret sätt att engagera sig och bidra till att
              sektionen utvecklas utifrån medlemmarnas behov och idéer. En motion kan innehålla allt möjligt, som
              att bilda en ny undergrupp eller ge mer ekonomiskt stöd till något evenemang.
            </p>
            <div className="info-text__buttons">
              <a className="filled-button" href="/kontakt#motioner">
                Lämna en motion
              </a>
            </div>
          </div>
          <div className="info-text">
            <h2>Nominering</h2>
            <p>
              Under vårens stormöte väljs alltid en ny styrelse ut till sektionen. Engagerade studenter behövs för
              att driva frågor, ordna aktiviteter och representera medlemmarnas intressen. Genom att skicka in en
              nominering lyfter du fram en person som du tror skulle göra ett bra jobb och bidra med nya
              perspektiv för sektionens arbete. Det kan vara dig själv eller någon annan. När sektionen börjar ta emot nomineringar inför vårens stormöte kommer du kunna lämna in en nominering här.
            </p>
            {/** Nomineringsknapp till formlär
            <div className="info-text__buttons">
              <a className="filled-button" href="framtida länk till formulär">
                Nominera
              </a>
            </div>
            */}
          </div>
        </Reveal>
      </main>
    </>
  );
}
