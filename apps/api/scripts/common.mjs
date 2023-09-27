import { fileURLToPath } from "url";
import path from "path";
import packagejson from "../package.json" assert { type: "json" };

export const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

const buildDependencies = ["@project/trpc"];

export const external = Object.keys(packagejson.dependencies).filter(
  (dep) => !buildDependencies.includes(dep),
);

export const outdir = path.join(__dirname, "..", "dist");

export const outfile = path.join(outdir, "main.cjs");

/** @type{import('esbuild').BuildOptions}*/
export const buildOptions = {
  entryPoints: [path.join(__dirname, "..", "src", "main.ts")],
  bundle: true,
  outfile,
  platform: "node",
  target: "node18",
  external,
  logLevel: "info",
};
