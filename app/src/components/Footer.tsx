export function Footer() {
  return (
    <footer>
      <div className="footer-links" id="contact-links">
        <h4>Kontakt</h4>
          <p>
            Företagsärenden: <a href="mailto:arbetsmarknad@cssektionen.se">arbetsmarknad@cssektionen.se</a>
          </p>
          <p>
            Trivsel: <a href="mailto:studiesocial@cssektionen.se">studiesocial@cssektionen.se</a>
          </p>
          <p>
            Övrigt: <a href="mailto:kommunikation@cssektionen.se">kommunikation@cssektionen.se</a>
          </p>
      </div>

      <div className="middle">
        <div className="social-media-logos">
          <a className="instagram-link" href="https://www.instagram.com/cs_sektionen/" hrefLang="sv">
            <span className="logo">
              <img src="/Images/Instagram.png" alt="Länk till CS Instagram" />
            </span>
          </a>

          <a className="discord-link" href="https://discord.gg/XW3Ry7eZbQ" hrefLang="sv">
            <span className="logo">
              <img src="/Images/Discord.png" alt="Länk till CS Discord" />
            </span>
          </a>

          <a className="hitract-link" href="https://open.hitract.se/HitClub/1662" hrefLang="sv">
            <span className="logo">
              <img src="/Images/Hitract-ihålig.png" alt="Länk till CS Hitract" />
            </span>
          </a>
        </div>
        <p>Webbdesign: Emma Edlund, Irma Eljenmyr</p>
      </div>

      <div className="footer-links" id="program-links">
        <h4>Programsidor</h4>
        <a href="https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-interaktion-och-design/">
          Civilingenjörsprogrammet i interaktion &amp; design
        </a>
        <p> </p>
        <a href="https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-teknisk-datavetenskap/">
          Civilingenjörsprogrammet i teknisk datavetenskap
        </a>
        <p> </p>
        <a href="https://www.umu.se/utbildning/program/kandidatprogrammet-i-datavetenskap/">
          Kandidatprogrammet i datavetenskap
        </a>
        <p> </p>
        <a href="https://www.umu.se/utbildning/program/masterprogrammet-i-datavetenskap/">
          Masterprogrammet i datavetenskap
        </a>
        <p> </p>
        <a href="https://www.umu.se/utbildning/program/masterprogrammet-i-artificiell-intelligens/">
          Masterprogrammet i artificiell intelligens
        </a>
        <p> </p>
      </div>
    </footer>
  );
}
