# Hot Potato marketing site

This repository contains Hot Potato's static website. The [application repository](https://github.com/harrisonoconnorhover/hot-potato) contains the routing engine, setup instructions, and current capabilities. Hot Potato is in active development.

**Live site:** [hot-potato-32c.pages.dev](https://hot-potato-32c.pages.dev/)

## What the example does

The interactive example reveals preset fictional leads, assignments, and times. It does not connect to a CRM, check calendar availability, or book meetings. The rule excerpt and accompanying case study come from the application's public routing tests; the animation remains a separate preset illustration.

The site does not advertise hosted plans, support tiers, or unqualified integrations. Refer visitors to the application documentation for supported workflows, setup requirements, and limits. [ROADMAP.md](./ROADMAP.md) is this site's historical plan, not a current application feature contract.

## Public evidence and scope

The website’s routing case and capabilities are pinned to public application commit [`8bd272e`](https://github.com/harrisonoconnorhover/hot-potato/blob/8bd272ec94a742feed90491bff717e985fddabf6/README.md), verified as public `main` on September 25, 2026. The case links directly to the routing function, input fixtures and assertions, duplicate-request integration check, and that commit’s completed CI run.

Keep capabilities aligned with the published application. Later local booking, routing-editor, and preview work is not included in this public version. Routing decisions identify a matched rule but do not preserve its historical configuration. The synthetic case demonstrates routing behavior, not customer adoption, revenue impact, or a live provider connection.

## Run the site locally

No dependencies or build step are required.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy

The production site is hosted on Cloudflare Pages. It is a static deployment with no install or build command.

```bash
site_stage="$(mktemp -d)"
cp index.html styles.css app.js "$site_stage/"
cp -R public "$site_stage/public"
wrangler pages deploy "$site_stage" --project-name hot-potato --branch main
```

## Repository map

- `index.html` — product story and interface mockups
- `styles.css` — responsive visual system
- `app.js` — mobile navigation and simulated routing example
- `public/` — mascot and social-preview image
- `ROADMAP.md` — staged product plan
- `CONTRIBUTING.md` — contribution workflow
- `SECURITY.md` — responsible disclosure guidance

## Contributing

Ideas, workflow examples, and focused pull requests are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening work.

## License

This website's source is [MIT](./LICENSE) © 2026 Harrison O'Connor-Hoover. The separate [Hot Potato application is AGPL-3.0-only](https://github.com/harrisonoconnorhover/hot-potato/blob/main/LICENSE); the website's license does not apply to that application.
