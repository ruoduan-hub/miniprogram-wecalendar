import * as esbuild from "esbuild";
import * as glob from "glob";
import * as fs from "fs";
import * as path from "path";

import { lessLoader } from "esbuild-plugin-less";

const getEnv = () => {
  if (process.argv?.includes("--dev")) {
    return "watch";
  }
};

let cssToWxssPlugin = {
  name: "css-to-wxss-plugin",
  setup(build) {
    build.initialOptions.write = false;
    build.onEnd((result) => {
      for (let outputFile of result.outputFiles) {
        const directoryPath = path.dirname(outputFile.path);
        if (!fs.existsSync(directoryPath)) {
          fs.mkdirSync(directoryPath, { recursive: true });
        }
        if (path.extname(outputFile.path) === ".css") {
          const newPath = outputFile.path.replace(".css", ".wxss");
          try {
            fs.writeFileSync(newPath, outputFile.contents);
            fs.writeFileSync(outputFile.path, outputFile.contents);
          } catch (error) {
            console.log("ERROR: " + error);
          }
        } else {
          fs.writeFileSync(outputFile.path, outputFile.contents);
        }
      }
    });
  },
};

const loaderConfig = {
  ".less": "css",
  ".wxs": "copy",
  ".wxml": "copy",
  ".png": "copy",
  ".json": "copy",
  ".less": "css",
  ".less": "copy",
};

if (getEnv()) {
  let ctx = await esbuild.context({
    entryPoints: glob.sync("src/**/*.{js,less,wxs,wxml,json,png,d.ts}"),
    outdir: "demo/components",
    plugins: [lessLoader(), cssToWxssPlugin],
    loader: loaderConfig,
    bundle: true,
    minify: false,
    sourcemap: false,
    logLevel: "info",
  });
  ctx.watch();
} else {
  esbuild.build({
    entryPoints: glob.sync("src/**/*.{js,less,wxs,wxml,json,png,d.ts}"),
    outdir: "dist",
    plugins: [lessLoader(), cssToWxssPlugin],
    loader: loaderConfig,
    drop: ["debugger", "console"],
    bundle: true,
    minify: true,
    sourcemap: false,
    logLevel: "info",
  });
}
