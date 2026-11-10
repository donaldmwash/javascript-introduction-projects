# LedgerFlow — Finance Reconciliation Platform

LedgerFlow is a browser-based reconciliation workspace for comparing bank statement transactions with a cashbook/general-ledger export. It helps finance teams identify exact matches, possible matches, unmatched items, and the net difference between two records.

> Portfolio project built to demonstrate practical accounting logic, TypeScript modelling, React UI engineering, CSV processing, automated tests, and CI. It is a demo application: it does not connect to a bank or post entries to a live accounting system.

## Features

- Import bank and ledger CSV files, with a downloadable sample dataset.
- Match transactions using normalized references, exact amounts, and configurable date tolerance.
- Separate exact matches, possible matches, bank-only items, and ledger-only items.
- Review possible matches and manually confirm or reject them.
- Calculate statement totals, book totals, unmatched totals, and the adjusted difference.
- Export a reconciliation report as CSV.
- Responsive interface with accessible labels and keyboard-friendly controls.
- Deterministic reconciliation engine with unit tests.

## Tech stack

- React 18 + TypeScript
- Vite
- Vitest
- CSS (responsive, no component-library dependency)

## Run locally

Requirements: Node.js 20+ and npm.

```bash
cd finance-reconciliation-platform
npm install
npm run dev
```

Open the local URL printed by Vite.

## Quality checks

```bash
npm run test
npm run build
```

## CSV format

Both files accept headers in the first row. Required fields:

`date,description,reference,amount`

- Dates should be parseable by JavaScript (recommended: `YYYY-MM-DD`).
- Amounts should be numeric. Use positive values for receipts/deposits and negative values for payments/withdrawals.
- References are normalized to uppercase alphanumeric characters for matching.
- The app never silently changes imported amounts.

## Matching approach

1. Normalize references and descriptions.
2. Match unique transactions with the same normalized reference and amount within the selected date tolerance.
3. Flag same-reference or same-amount candidates as possible matches when a unique exact match is not available.
4. Keep unmatched bank and ledger items visible for investigation.

This is a practical review aid, not a substitute for professional judgment. Users should investigate all exceptions and verify source documents before approving a reconciliation.

## Project structure

```text
src/
  lib/
    csv.ts
    reconcile.ts
    reconcile.test.ts
  App.tsx
  main.tsx
  styles.css
  types.ts
```

## Roadmap

- [ ] Add server-side persistence and user authentication.
- [ ] Add multi-currency support and exchange-rate controls.
- [ ] Add audit history for manual match decisions.
- [ ] Add PDF report generation.

## Author

Donald Mwashegha — [GitHub](https://github.com/donaldmwash)
