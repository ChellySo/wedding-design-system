# Wedding Design System 💍

## A modern design system built with:

- React 19
- Vite 7
- Storybook 10
- Tailwind CSS 4
- TypeScript

## 🚀 Getting Started
Follow these steps to run the project locally.

### Install Required Software
**Install VS Code**
Download:
https://code.visualstudio.com/

Recommended extensions:
ESLint
Tailwind CSS IntelliSense
GitLens

**Install Node.js (LTS)**
Download and install Node 20 LTS from:
https://nodejs.org/

After installation, verify:
`node -v`

You should see something like:
v20.x.x

**Install pnpm**
We use pnpm as our package manager.

`npm install -g pnpm`

Verify installation:
`pnpm -v`

**Install Git**
Download and install Git:
https://git-scm.com/

Verify:
`git --version`

**Clone the Repository**
`git clone <your-repository-url>`
`cd wedding-design-system`

**Install Dependencies**
`pnpm install`

App runs on:
http://localhost:5173
Start Storybook
`pnpm storybook`

Storybook runs on:
http://localhost:6006
🛠 Available Scripts
Command	Description
pnpm dev	Start Vite development server
pnpm build	TypeScript build + production build
pnpm preview	Preview production build
pnpm storybook	Start Storybook
pnpm build-storybook	Build static Storybook
pnpm lint	Run ESLint
🧠 For New Developers

**If you're new to coding:**
Install everything above
Run pnpm dev
Open the browser
Change something inside a component
Save and see it update
Start small and experiment 🙂

## 📚 Tech Stack
- React 19
- Vite 7
- Storybook 10
- Tailwind CSS 4
- TypeScript
- Vitest



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
