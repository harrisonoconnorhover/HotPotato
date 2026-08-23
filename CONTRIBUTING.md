# Contributing to Hot Potato

Hot Potato is early. The most valuable contributions are concrete inbound-routing workflows and small changes that make the current slice more useful.

## Before opening work

1. Use GitHub Discussions for product ideas and workflow examples.
2. Use an issue for a reproducible defect or an agreed piece of roadmap work.
3. Keep pull requests focused on one behavior or outcome.

Please do not add broad frameworks, infrastructure, or integrations before a current roadmap slice requires them.

## Site changes

Run the site locally:

```bash
python3 -m http.server 8000
```

Before opening a pull request:

```bash
node --check app.js
git diff --check
```

Also verify that navigation, the router simulation, and the clone-command copy control work with a keyboard and at a phone-sized viewport.

## Claims and examples

- Label simulations, proposed APIs, roadmap integrations, and future plans as such.
- Do not invent customers, performance numbers, availability, or security claims.
- Use fictional people and companies in examples.

By contributing, you agree that your contribution may be distributed under the MIT License.
