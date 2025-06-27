# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Tailwind CSS Setup

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can use Tailwind utility classes in your React components. The main CSS file (`src/index.css`) is already configured to use Tailwind's base, components, and utilities.

### Development

To start the development server:

```bash
npm run dev
```

### Building for Production

To build the project:

```bash
npm run build
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
