import esbuild from "esbuild";
import { buildOptions } from "./common.mjs";

esbuild.buildSync({
  ...buildOptions,
  treeShaking: true,
});
