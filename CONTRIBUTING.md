# Contributing to Hot Potato

The most valuable contributions are concrete inbound-routing workflows and small changes that make the current slice more useful.

## Before opening work

1. Use GitHub Discussions for product ideas and workflow examples.
2. Use an issue for a reproducible defect or an agreed piece of roadmap work.
3. Keep pull requests focused on one behavior or outcome.

Please keep new frameworks, infrastructure, and integrations tied to a current roadmap slice.

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

Also verify that navigation, the router demo, and the clone-command copy control work with a keyboard and at a phone-sized viewport.

## Claims and examples

- Keep customer, performance, availability, and security claims verifiable.
- Use fictional people and companies in examples.

By contributing, you agree that your contribution may be distributed under the MIT License.
