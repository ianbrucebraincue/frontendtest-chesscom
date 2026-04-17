# frontendtest-chesscom

---

## 📦 Project Setup

Install dependencies:

```sh
npm install
```

---

## 🚀 Development

Compile and hot-reload the application:

```sh
npm run dev
```

Once running, open your browser at:

http://localhost:5173

---

## 🏗 Production Build

Type-check, compile, and minify for production:

```sh
npm run build
```

---

## 🧪 Testing Strategy

This project uses a dual testing approach to balance speed and confidence:

- **Vitest** → Fast unit and component tests for logic and Vue components
- **Playwright** → End-to-end tests running in a real browser environment

---

### Run all tests

```sh
npm run test:all
```

### Run unit tests (Vitest)

```sh
npm run test:unit
```

### Run end-to-end tests (Playwright)

```sh
npm run test:e2e
```

---

## 🧹 Code Quality

Run ESLint to maintain consistent code style:

```sh
npm run lint
```

---

## 🧠 Notes

### Playwright setup

Before running end-to-end tests, install required browsers:

```sh
npx playwright install
```

Ensure your Playwright config includes the correct dev server base URL:

```ts
baseURL: 'http://localhost:5173'
```

# Chess.com - Front End Programming Challenge

Welcome to the [Chess.com](https://chess.com) front end programming challenge!

# Instructions
1. Create a VueJS application that satisfies the requirements detailed below.
2. Create a .zip file containing all files of your completed project.
3. Submit your .zip file (downloadable link or email attachment) and a link to a live demo of your project.

# Application Requirements
1. Create a page with a chessboard and a sidebar.
2. On desktop devices the sidebar should be positioned to the right of the chessboard.
3. On mobile devices the sidebar should be positioned below the chessboard.
4. The chessboard should resize to always fill available space both vertically and horizontally. It should always be fully visible in the viewport, down to a minimum size of 264x264px
5. Clicking a chessboard square should highlight the square. Multiple squares can appear as highlighted at once.
6. The sidebar should display a log of which squares have been clicked and the order in which they're clicked.
7. Clicking a highlighted square should un-highlight the square but not modify the sidebar. Re-highlighting the square again adds a new entry to the sidebar.
8. Include tests.

Your submission will be rejected if any requirement is not met. Ask questions if a requirement is unclear.

# Questions & Feedback
Please contact Nick Kampa (nkampa@chess.com) with any questions or feedback regarding this challenge.
