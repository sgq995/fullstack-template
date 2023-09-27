import esbuild from "esbuild";
import { spawn } from "node:child_process";
import { buildOptions, outdir, outfile } from "./common.mjs";

/** @type{import('node:child_process').ChildProcess | null} */
var child = null;

function startServer() {
  return spawn(process.argv0, [outfile], {
    cwd: outdir,
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
    ...buildOptions,
    plugins: [runPlugin],
  })
  .then((context) => context.watch());
