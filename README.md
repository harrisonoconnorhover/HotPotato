# Hot Potato

Hot Potato is an open-source inbound lead-routing product for GTM teams that want readable rules, explainable decisions, and infrastructure they can own.

**Live site:** [hot-potato-32c.pages.dev](https://hot-potato-32c.pages.dev/)

## How it works

The route is deliberately simple:

```text
lead arrives → rules run → right rep → available time → CRM is updated
```

The project is guided by four principles:

- Routing logic should be readable without a flowchart certification.
- Every decision should be explainable and tied to a rule version.
- The core should be self-hostable and useful without a managed plan.
- Integrations should ship from real workflow demand, not logo-wall theater.

See [ROADMAP.md](./ROADMAP.md) for the delivery order.

## Run the site locally

No dependencies or build step are required.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy

The production site is hosted on Cloudflare Pages. It is a static deployment with no install or build command.

```bash
wrangler pages deploy . --project-name hot-potato --branch main
```

## Repository map

- `index.html` — product story and interface mockups
- `styles.css` — responsive visual system
- `app.js` — mobile navigation and interactive router demo
- `public/` — mascot and social-preview image
- `ROADMAP.md` — staged product plan
- `CONTRIBUTING.md` — contribution workflow
- `SECURITY.md` — responsible disclosure guidance

## Contributing

Ideas, workflow examples, and focused pull requests are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening work.

## License

[MIT](./LICENSE) © 2026 Harrison O'Connor-Hoover
