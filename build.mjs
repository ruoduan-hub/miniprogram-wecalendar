import * as esbuild from 'esbuild'
import * as glob from 'glob'
import { lessLoader } from 'esbuild-plugin-less';


const getEnv = () => {
  if (process.argv?.includes('--dev')) {
    return 'watch';
  }
};


const loaderConfig = {
  '.less': 'css',
  '.wxs': 'copy',
  '.wxml': 'copy',
  '.png': 'copy',
  '.json': 'copy',
  '.d.ts': 'copy',
}

if (getEnv()) {
  let ctx = await esbuild.context({
    entryPoints: glob.sync('src/**/*.{js,less,wxs,wxml,json,png,d.ts}'),
    outdir: 'demo/components',
    plugins: [lessLoader()],
    loader: loaderConfig,
    bundle: true,
    minify: false,
    sourcemap: false,
    logLevel: 'info',
  })
  ctx.watch()
} else {
  esbuild.build({
    entryPoints: glob.sync('src/**/*.{js,less,wxs,wxml,json,png,d.ts}'),
    outdir: 'dist',
    plugins: [lessLoader()],
    loader: loaderConfig,
    drop: ['debugger', 'console'],
    bundle: true,
    minify: true,
    sourcemap: false,
    logLevel: 'info',
  })
}




