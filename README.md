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
