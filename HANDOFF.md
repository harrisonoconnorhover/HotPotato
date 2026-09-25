# Morning Handoff

## Finished

- Removed unsupported rule-version promises and public booking/editor/trace implications; capability cards now describe the published routing application.
- Replaced illustrative pseudocode with actual rule conditions and added a concise synthetic routing case covering weighted assignment, owner preservation, busy-rep exclusion, and unavailable schedules.
- Linked the case directly to public commit `8bd272e`, its routing function, assertions, duplicate-request check, and completed CI run.
- Kept the preset animation explicit and distinguished public source from later unpublished local development.

## Try It

Run `python3 -m http.server 4177 --bind 127.0.0.1`, then open `http://127.0.0.1:4177/#how`. Inspect the case and its source links, play the example, and review **Project status**.

## Checks

- `node --check app.js` and `git diff --check` passed.
- Focused HTML checks passed: unique IDs, section destinations, local assets, JavaScript element references, valid JSON conditions, removed claims, and simulation/public-scope labels.
- All four unique evidence destinations returned HTTP 200.
- The exact public routing source at `8bd272e` was extracted to a temporary directory; its existing Vitest suite passed all 8 tests using the installed local test runtime. No database or provider calls were made.
- `git ls-remote` confirmed public application `main` remains `8bd272e`; its GitHub CI run `32709756616` is completed/successful. Later local product tests do not establish public capabilities.

## Decisions

- This is a copy, documentation, and presentation correction. No routing, booking, snapshot, or integration features were added.
- Pin inspectable examples to an available public revision instead of publishing the 35-commit local application backlog.
- The synthetic tests demonstrate correctness for their inputs, not customer impact or live provider operation.

## Remaining

- Complete local desktop/mobile visual review before publishing.
- Push and deploy this marketing-only change when the coordinating task is ready; this task has not published it.
- A real provider workflow remains unverified by the website. Existing local product changes, including uncommitted Outlook work, are untouched.

## Review First

- `index.html`: actual rule, evidence case, capability cards, and project status.
- `README.md`: pinned evidence and published-scope boundary.
- `styles.css`: evidence text readability.
