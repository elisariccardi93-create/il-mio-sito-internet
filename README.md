# Portfolio — Elisa Riccardi (UX/UI Designer)

Sito portfolio statico sviluppato con **HTML + Tailwind (CDN) + JS**.
Design minimal, palette **blu/arancio** ad alto contrasto, micro-animazioni e menu mobile **dropdown** accessibile.

## ▶️ Avvio rapido

1. Clona o scarica questa cartella.
2. Apri con **VS Code**.
3. (Consigliato) Installa l’estensione **Live Server**.
4. Click destro su `index.html` → **Open with Live Server**.

> In alternativa: apri `index.html` direttamente nel browser.

## 📂 Struttura

/portfolio-elisa
├── index.html          # Home (hero 2-colonne, progetti in evidenza, social)
├── work.html           # Griglia progetti (Grid System)
├── cv.html             # CV in HTML (timeline, skills, placeholder immagini)
├── contattami.html     # Form contatti (conferma istantanea, no backend)
├── CV-Elisa-Riccardi.pdf
│
└── assets
    ├── css
    │   └── custom.css  # Effetto cursore, reveal, variabili colore
    ├── img
    │   ├── ritratto-elisa.riccardi.jpg
    │   ├── laserteam.jpg
    │   ├── pureheart.jpg
    │   ├── lanterne.jpg
    │   ├── og-image.jpg           
    │   ├── post-1.jpg
    │   ├── storia-1.jpg
    │   ├── fb.jpg
    │   └── favicon/               # tutte le favicon qui
    │       ├── android-chrome-512x512.png
    │       ├── apple-touch-icon.png
    │       ├── favicon-16x16.png
    │       ├── favicon-32x32.png
    │       └── favicon.ico
    └── js
        └── main.js     # Navbar mobile dropdown, reveal, form, cursor FX


## 🧩 Tecnologie

- **HTML5** semantico
- **Tailwind CSS (CDN)** per layout e utilità
- **Google Fonts** (Inter + Nunito)
- **Font Awesome** (icone social)
- **Vanilla JS** per menù, micro-animazioni e conferma form

## 🎨 Palette & tipografia

- Blu primario: `#1E40AF`  
- Arancio accento: `#EA580C`  
- Testo base: `#0F172A` / secondario: `#475569`  
- Font: **Inter** (base), **Nunito** (titoli)

Le variabili colore per effetti sono in `assets/css/custom.css`.

## 🔗 Social

- Instagram: https://www.instagram.com/elisariccardi_?igsh=eXd6a21pZ2pscGhn&utm_source=qr  
- Facebook: https://www.facebook.com/share/19QQPsEwkV/?mibextid=wwXIfr  
- LinkedIn: https://www.linkedin.com/in/elisa-riccardi-4a3a74b9/  
- Behance: https://www.behance.net/elisariccardi1

## ⚙️ Build/Tooling (opzionale)

Il progetto non richiede build. Se vuoi usare Tailwind in modalità “compilata” in futuro, potrai introdurre un toolchain (npm + PostCSS), ma **non necessario** per la consegna.

## 🚀 Deploy

### GitHub Pages
1. Crea un repo e carica tutti i file.
2. Settings → **Pages** → Source: **Deploy from a branch** → branch `main` / folder `/ (root)`.
3. Apri l’URL generato.

### Netlify (drag & drop)
1. Vai su Netlify → **New site from Git** o **Deploy manually**.
2. Trascina la cartella del progetto.
3. Netlify assegna l’URL. (Nessun build command richiesto.)

> Altri: Vercel, Cloudflare Pages, ecc. funzionano allo stesso modo.

## 🔒 Accessibilità & QA

- Contrasto testi (AA/AAA) su bianco; bottoni blu con testo bianco.
- **Alt text** descrittivi per immagini (vedi `index.html` e `work.html`).
- Menu mobile **accessibile**: `aria-expanded`, chiusura su **Esc** e **click fuori**.
- Focus states visibili (Tailwind `focus:ring-2`).
- Layout **responsive** con **Grid** su `work.html` e griglie/stack sulle altre pagine.

## 🔍 SEO & Social (head)

Controlla `<head>` di `index.html`:
- `meta name="description"` (150–160 char)
- `meta name="keywords"`
- Open Graph:


