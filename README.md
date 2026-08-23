# Hot Potato

Hot Potato is an early open-source inbound lead-routing project for GTM teams that want readable rules, explainable decisions, and infrastructure they can own.

**Current status:** this repository contains the public product site, an interactive product simulation, and the initial roadmap. It does not yet contain a production routing engine, working CRM/calendar integrations, or a hosted cloud product. The site labels those boundaries directly.

## Product direction

The intended route is deliberately simple:

```text
lead arrives → rules run → right rep → available time → CRM is updated
```

The project is guided by four principles:

- Routing logic should be readable without a flowchart certification.
- Every decision should be explainable and tied to a rule version.
- The core should be self-hostable and useful without a managed plan.
- Integrations should ship from real workflow demand, not logo-wall theater.

See [ROADMAP.md](./ROADMAP.md) for the proposed delivery order.

## Run the site locally

No dependencies or build step are required.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Repository map

- `index.html` — product story and interface mockups
- `styles.css` — responsive visual system
- `app.js` — mobile navigation and router simulation
- `public/` — favicon and social-preview image
- `ROADMAP.md` — staged product plan
- `CONTRIBUTING.md` — contribution workflow
- `SECURITY.md` — responsible disclosure guidance

## Contributing

Ideas, workflow examples, and focused pull requests are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening work.

## License

[MIT](./LICENSE) © 2026 Harrison O'Connor-Hoover
