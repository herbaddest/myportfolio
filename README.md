# Wanjiku — Portfolio

Next.js 16 · React 19 · TypeScript · plain CSS. No UI framework, no animation library, no icon pack.
Fonts (Newsreader, Hanken Grotesk) are self-hosted through `@fontsource-variable`, so builds never call Google.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit content — everything lives in `config/site.ts`

| What | Where |
| --- | --- |
| Name, role, hero sentence, availability, SEO text, optional portrait | `site` |
| WhatsApp, Telegram, email, Instagram, GitHub, LinkedIn, X | `contact` (or `.env.local`, see `.env.example`) |
| Projects | `projects` |
| Services | `services` |
| Tools list (About section) | `techStack` |

Search the file for `TODO` to find every placeholder.

### Projects
Give a project an `image` (16:10, e.g. 1800×1125, in `public/projects/`) and it gets a large feature row
with the screenshot linking to `liveUrl`. Projects without an image are listed under "More projects".
Status is `"live"`, `"completed"` or `"in-progress"`.

### Portrait
Put a photo in `public/` and set `site.portrait: "/portrait.jpg"`. It appears under "About".

## Design notes
- Palette: earth `#0C1517`, bone `#F1E6D2`, dust `#A6B3AA`, amber `#F2A03D` (all in `:root` of `app/globals.css`).
- The hero is an SVG painting (`components/Scene.tsx`): a Kenyan dusk, a flat-topped acacia, a laptop glowing under it.
  The painting's ground colour is the page background, so it settles into the page.
- The only motion on the page is the hero: the sun rises and the laptop lights up. `prefers-reduced-motion` turns it off.

## Structure

```
app/            layout (fonts, metadata, JSON-LD), page, globals.css, OG image, icon, robots, sitemap
components/     Nav, Hero, Scene, Projects, About, Services, Contact, Footer
config/site.ts  all content
lib/contact.ts  contact URL builders
```
