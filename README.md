# CS-sektionens hemsida

Hemsidan för CS-sektionen vid Umeå universitet — [cssektionen.se](https://cssektionen.se)

## Struktur

- `app/` — själva hemsidan (React + TypeScript + Vite). Det är här allt arbete sker.
- `.legacy/` — den gamla HTML-sidan, sparad som legacy. Ligger inte live.

## Komma igång

```bash
cd app
npm install
npm run dev
```

Sidan kommer upp på `http://localhost:5173`.

## Grenar

- **`dev`** — standardgren. Allt arbete bör göras här. Inget här publiceras på hemsidan.
- **`main`** — det som ligger live just nu.

Jobba aldrig direkt i `dev`. Skapa en egen gren, och gör en pull request mot `dev`:

```bash
git checkout dev
git pull
git checkout -b fix/kort-beskrivning
```

## Publicering

**Att merga `dev` → `main` publicerar sidan direkt.** GitHub Actions bygger och laddar
upp allt till Loopia via FTP. Läs igenom hela diffen i pull requesten innan du mergar.

Använd alltid **merge commit** när du mergar `dev` → `main`. Aldrig squash eller rebase:
det får grenarna att glida isär permanent, och varje kommande release visar då upp gamla
ändringar igen.

Behöver du fixa något akut som redan ligger live, utgå från `main` och merga tillbaka
efteråt:

```bash
git checkout -b hotfix/kort-beskrivning main
# fixa, pusha, PR mot main, merga → publiceras direkt

git checkout dev
git merge main   # annars försvinner fixen vid nästa release
git push
```
