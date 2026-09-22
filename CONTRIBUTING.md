# Att bidra

Roligt att du vill vara med och utveckla sektionens hemsida. Du behöver varken
vara van vid React eller Git för att hjälpa till, och du behöver inte fråga om
lov först. Hittar du ett stavfel, en trasig länk eller något som ser konstigt
ut i mobilen, fixa det gärna och öppna en pull request.

Läs [README](README.md) först. Där står hur du kommer igång och hur
publiceringen fungerar.

## Bra saker att börja med

- Texter som blivit inaktuella, eller stavfel
- Länkar som pekar fel
- Något som ser trasigt ut i mobilen
- Tillgänglighet: kontraster, alt-texter, tangentbordsnavigering

Små ändringar är lika välkomna som stora. En pull request som rättar en enda
länk är en bra pull request.

## Arbetsgång

1. Utgå från `dev` och skapa en egen branch: `fix/`, `feat/`, `chore/` eller `docs/`
   följt av en kort beskrivning.
2. Gör ändringen. Håll branchen kortlivad, en uppgift per branch.
3. Öppna en pull request mot `dev`.
4. Vänta på att builden blir grön och låt någon annan titta på den.

Du kan inte råka publicera något på hemsidan av misstag. Det som ligger i `dev`
syns ingenstans utåt, och publiceringen är ett eget steg som någon gör
medvetet. Se **Publicering** i README.

Är du osäker på om en idé är rimlig, öppna en pull request ändå och skriv vad
du funderar på. Det är ett bra sätt att få syn på saker tillsammans.

## Commit-meddelanden

Svenska eller engelska går lika bra, välj det som känns naturligt. Håll
det kort och beskrivande, samma stil som resten av historiken:

```
Fokusring vid tangentbordsnavigering
Sidomenyn ligger efter hamburgaren i tabbordningen
Tog bort gammal checklista
New CI workflow and updates to README
```

En commit gör en sak. Behöver du förklara varför, lägg det i brödtexten under
rubrikraden.

## Språk i koden

Namn i koden skrivs på engelska: variabler, funktioner, komponenter och
filnamn.

Branchnamn skrivs också på engelska, med bindestreck mellan orden:
`fix/mobile-menu-focus`. Undvik å, ä och ö.

Kommentarer skrivs oftast på svenska, och så får det gärna fortsätta vara.
Text som syns på hemsidan är förstås också på svenska.

## Paketlåset

**Ändrar du `package.json` måste `package-lock.json` med i samma commit.**
Annars stannar builden på `npm ci`.

Tre saker som sparar tid:

- Radera aldrig lockfilen för att "börja om". Kör `npm install` och committa
  resultatet.
- Committa aldrig en lockfil du inte själv genererat med `npm install`.
- Får du `Missing: <paket> from lock file` i CI betyder det att lockfilen
  skrivits på en annan plattform än den CI kör på. Kör
  `npm install --package-lock-only` och committa den uppdaterade filen.

Det sista händer lätt: `vite` och `oxlint` har en färdig binär per plattform,
och npm skriver ibland bara din egen till lockfilen. CI kör Linux och behöver
alla.

## Node-version

CI kör builden med **Node 20**. Kör samma lokalt med `nvm use 20`, så slipper
du skillnader i lockfilen och builden.

## Innan du öppnar en pull request

```bash
cd app
npm ci
npm run lint
npm run build
```

Går alla tre igenom lokalt går de igenom i CI. Blir builden röd i en pull
request är det ingen katastrof, det är precis vad den är till för. Läs
felmeddelandet, fixa, och pusha igen.

## Granskning

Alla pull requests mot `main` behöver ett godkännande. Mot `dev` räcker en grön
build.

Granskningen finns för att fånga misstag tidigt, inte för att sätta betyg på
någons kod. Frågor och förslag i en pull request är något bra.

## Frågor

Fastnar du eller är osäker på något, fråga i CS-sektionens Discord. Länken dit
hittar du på [cssektionen.se](https://cssektionen.se).
