import esbuild from "esbuild";
import { buildOptions } from "./common.mjs";

esbuild.buildSync({
  ...buildOptions,
  drop: ["debugger"],
  minify: true,
  treeShaking: true,
});
