# Fullstack Starter Kit

```
pnpm install
```

## 🚀 Project Structure

Inside of this monorepo, you'll see the following folders:

```text
/
├── apps/
│   └── api/
│   └── www/
├── packages/
│   └── trpc/
└── package.json
```

Folders in the `apps` directory are considered the final projects, something the user will see at the end. The folders in the `packages` are the shared projects.

The template contains some preconfigured projects:

- `apps/api/` is a [fastify](https://fastify.dev/) project.
- `apps/www/` is an [Astro](https://astro.build/) project.
- `packages/trpc` is the shared [tRPC](https://trpc.io/) definition.

Tubo is used as monorepo build system. When `pnpm dev` is executed, every change to the `api/main.ts` and any modification for `.astro` or `.md` files in the `www/src/pages/` will dispatch an update.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                                                                 |
| :------------- | :------------------------------------------------------------------------------------- |
| `pnpm install` | Installs dependencies                                                                  |
| `pnpm dev`     | Starts local dev server at `localhost:4321` for Astro and `localhost:3000` for fastify |
| `pnpm build`   | Build your production project to `./apps/**/dist/` folders                             |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
