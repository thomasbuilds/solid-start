[![SolidStart Banner](https://assets.solidjs.com/banner?project=Start&type=core)](https://github.com/solidjs)

[![NPM Version](https://img.shields.io/npm/v/@solidjs/start.svg?style=for-the-badge&color=blue)](https://www.npmjs.com/package/@solidjs/start)
[![NPM Downloads](https://img.shields.io/npm/dm/@solidjs/start.svg?style=for-the-badge&color=blue)](https://www.npmjs.com/package/@solidjs/start)
[![GitHub Stars](https://img.shields.io/github/stars/solidjs/solid-start?style=for-the-badge&color=blue)](https://github.com/solidjs/solid-start)
[![Discord](https://img.shields.io/discord/722131463138705510?style=for-the-badge&color=blue)](https://discord.com/invite/solidjs)
[![Subreddit](https://img.shields.io/reddit/subreddit-subscribers/solidjs?style=for-the-badge&color=blue)](https://www.reddit.com/r/solidjs/)

**SolidStart** brings fine-grained reactivity fullstack! With features like unified server-side/client-side rendering and isomorphic code execution, it enables developers to build highly-performant, scalable web applications with full flexibility and simplicity.

Explore the [documentation](https://docs.solidjs.com/solid-start) for detailed guides and examples.

## Features

- File-system Based Routing: Intuitive routing based on your project’s file structure.
- All Rendering Modes:
  - Server-Side Rendering (SSR) with sync, async, and streaming
  - Client-Side Rendering (CSR)
  - Static Site Generation (SSG)
- Streaming: Efficient data rendering for faster page loads.
- Build Optimizations: Code splitting, tree shaking, and dead code elimination.
- API Routes: Create server-side endpoints with ease.
- Web Standards: Built on Fetch, Streams, and WebCrypto.
- Deployment Adapters: Deploy to platforms like Vercel, Netlify, or Cloudflare.
- CSS Support: CSS Modules and SASS/SCSS integration.
- TypeScript-First: Full TypeScript support for robust development.

## Getting Started

### Installation

Create a new SolidStart project using the `create-solid` CLI with your preferred package manager:

```bash
# With npm
npm create solid@latest

# With pnpm
pnpm create solid@latest

# With bun
bunx create-solid
```

1. Follow the CLI prompts to configure your project (e.g., project name, type, templates). Select SolidStart as the project type.
2. Navigate to your project directory and install dependencies:

```bash
cd <project-name>
npm install # or pnpm install, bun install
```

3. Start the development server:

```bash
npm run dev # or pnpm dev, yarn dev, bun dev
```

### Project Structure

- `public/`: Static assets like images and fonts.
- `src/`: Core application code (aliased to `~/`).
  - `routes/`: File-based routing for pages and APIs.
  - `app.tsx` (or `.jsx`): Root component of your app.
  - `entry-client.tsx`: Handles client-side hydration.
  - `entry-server.tsx`: Manages server-side request handling.
- Config Files: `app.config.ts`, `package.json`, and more.

Learn more about [routing](https://docs.solidjs.com/solid-start/building-your-application/routing) in the docs.

## Building for Production

Generate optimized production bundles:

```bash
npm run build # or pnpm/bun
```

Output is saved to the `dist/` directory.

## Deployment

Configure adapters in `app.config.ts` to deploy to platforms like Vercel, Netlify, Cloudflare and many others!

```ts
// app.config.ts example
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: { preset: "vercel" },
});
```

Learn more on all [`defineConfig`](https://docs.solidjs.com/solid-start/reference/config/define-config) options.

## Contributing

Join the SolidJS community to contribute to SolidStart:

- [GitHub Issues](https://github.com/solidjs/solid-start/issues): Report bugs or suggest features.
- [Solid Docs GitHub](https://github.com/solidjs/solid-docs/issues): Report documentation issues.
- [SolidJS Discord](https://discord.com/invite/solidjs): Discuss ideas and get support.

<details>
<summary><h3>Development Setup</h3></summary>

Use a Node.js version manager compatible with `.node-version`. We recommend [asdf-vm](https://asdf-vm.com/) for macOS/Linux users.

### Monorepo & Package Manager

SolidStart uses `pnpm` as the package manager. Install it globally:

```bash
npm install -g pnpm
```

Install dependencies for the monorepo:

```bash
pnpm install
```

Build the project:

```bash
pnpm build
```

### Monorepo & `package.json` Workspaces

If using a monorepo with `package.json` `"workspaces"` (e.g., [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)), ensure `@solidjs/start` is not hoisted. Add it to the `"nohoist"` field in the workspace root or project root:

**Workspace Root Example**:

```jsonc
{
  "workspaces": {
    "packages": [
      /* ... */
    ],
    "nohoist": ["**/@solidjs/start"]
  }
}
```

**Project Root Example**:

```jsonc
{
  "workspaces": {
    "nohoist": ["@solidjs/start"]
  }
}
```

For **Yarn v2+**, use `installConfig` to prevent hoisting:

```jsonc
{
  "installConfig": {
    "hoistingLimits": "dependencies"
  }
}
```

Note: Add `@solidjs/start` as a `devDependency` in the child `package.json` to ensure the `/node_modules/@solidjs/start/runtime/entry.jsx` script is available.

</details>
