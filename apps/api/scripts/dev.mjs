import path from "path";
import { fileURLToPath } from "url";
import esbuild from "esbuild";
import { spawn } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

/** @type{import('node:child_process').ChildProcess | null} */
var child = null;

function startServer() {
  return spawn(process.argv0, [path.join(__dirname, "..", "dist", "main.js")], {
    cwd: path.join(__dirname, "..", "dist"),
    stdio: "inherit",
  });
}

/** @type{import('esbuild').Plugin} */
const runPlugin = {
  name: "run",
  setup(build) {
    build.onStart(() => {
      if (child != null) {
        child.kill();
        child = null;
      }
    });

    build.onEnd(() => {
      if (child == null) {
        child = startServer();
      } else {
        child.on("close", () => {
          child = startServer();
        });
      }
    });
  },
};

esbuild
  .context({
    entryPoints: [path.join(__dirname, "..", "src", "main.ts")],
    sourceRoot: "src",
    outdir: "dist",
    platform: "node",
    target: "node18",
    packages: "external",
    logLevel: "info",
    plugins: [runPlugin],
  })
  .then((context) => context.watch());
