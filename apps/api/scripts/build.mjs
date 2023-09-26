#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";
import esbuild from "esbuild";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

esbuild.buildSync({
  entryPoints: [path.join(__dirname, "..", "src", "main.ts")],
  bundle: true,
  outdir: "dist",
  platform: "node",
  target: "node18",
  packages: "external",
});
