# CHAVA — One-page Landing Plan

A calm, architectural, trustworthy one-page site for CHAVA, a premium interior & custom furniture studio for Jewish homes. English copy, single route (`/`), smooth-scroll anchor navigation.

## Design system

Defined in `src/styles.css` as oklch tokens (no hardcoded colors in components):

- `--background`: warm off-white (#FAF7F1 → oklch)
- `--foreground`: charcoal (#2A2724)
- `--muted` / stone beige (#EDE7DB)
- `--accent`: natural wood / warm tan (#B89878)
- `--border`: soft stone (#E3DCCB)
- Fonts: serif headlines via **Cormorant Garamond**, body via **Inter** (loaded from Google Fonts in `__root.tsx` head links)
- Generous whitespace, thin hairline dividers, subtle fade-in on scroll, no shadows-heavy UI

## Sections (all on `/`)

1. **Sticky top nav** — small CHAVA wordmark left; anchor links right: Home, About, Inspiration, Authorities, Projects, Contact. Smooth scroll, active section highlight.
2. **Hero (#home)** — Centered serif headline "CHAVA — Kosher Interiors for Jewish Homes", subhead, two CTAs ("Explore Our Philosophy" → #about, "Start a Project" → #contact). Full-bleed warm photo of a calm interior on the right (generated).
3. **About (#about)** — Two-column: intro paragraph + two definition cards (Kosher design, Minhagim). Closing paragraph on how CHAVA translates principles into kitchen layout, storage, cabinetry, lighting, family workflow.
4. **Inspiration (#inspiration)** — Editorial grid of 12 ritual items (Kabbalat Shabbat … Mezuzah placement), each with title + one-line design description. Hairline dividers, no icons.
5. **Authorities (#authorities)** — Title "Informed by Jewish scholarship and tradition", three minimal cards (Sperber, Sacks, Shulchan Aruch / R. Yosef Karo). Italic note below: final halachic decisions should be confirmed with the client's rabbi.
6. **Projects (#projects)** — 6 project cards (Kosher Family Kitchen, Shabbat Prep Wall, Pesach Storage System, Hospitality Dining Room, Ritual Storage Cabinet, Sukkot & Seasonal Storage). Each: generated image + title + short caption.
7. **Contact (#contact)** — Headline "Create a home that understands your life", form (Name, Email, Location, Type of project, Message) using shadcn Input/Textarea/Select/Button. Submit shows a toast (no backend yet).
8. **Footer** — Brand line + tagline + small repeat of nav anchors + copyright.

## Imagery

Generate 7 images into `src/assets/` (warm, natural light, architectural, no people, no religious symbols):
- 1 hero interior
- 6 project images

## Technical implementation

- New route file: `src/routes/index.tsx` replaces the placeholder. Single page composing section components.
- Components under `src/components/chava/`: `Nav.tsx`, `Hero.tsx`, `About.tsx`, `Inspiration.tsx`, `Authorities.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx`.
- Tokens + Google Font import added in `src/styles.css` (`@theme inline` for color tokens, `--font-serif`, `--font-sans`).
- SEO: update `head()` in `src/routes/index.tsx` with CHAVA title, description, og tags.
- Contact form: react-hook-form + zod + shadcn Form; on submit, sonner toast "Thanks — we'll be in touch." No DB yet.
- Smooth scroll: native `scroll-behavior: smooth` on `html`; nav links are plain `<a href="#section">`.

## Out of scope (can be added later)

- Real backend for the contact form (would need Lovable Cloud).
- CMS for projects/inspiration.
- Multi-language (PL/EN) switcher.

Approve and I'll build it.