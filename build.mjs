import * as esbuild from 'esbuild'
import * as glob from 'glob'


const getEnv = () => {
  if (process.argv?.includes('--dev')) {
    return 'watch';
  }
};


if (getEnv()) {
  let ctx = await esbuild.context({
    entryPoints: glob.sync('src/**/*.{js,less,wxs,wxml,json,png}'),
    outdir: 'demo/components',
    loader: {
      '.less': 'copy',
      '.wxs': 'copy',
      '.wxml': 'copy',
      '.json': 'copy',
      '.png': 'copy',
      '.json': 'copy',
    },
    bundle: true,
    minify: false,
    sourcemap: false,
    logLevel: 'info',
  })
  ctx.watch()
} else {
  esbuild.build({
    entryPoints: glob.sync('src/**/*.{js,less,wxs,wxml,json}'),
    outdir: 'dist',
    loader: {
      '.less': 'copy',
      '.wxs': 'copy',
      '.wxml': 'copy',
      '.json': 'copy',
      '.png': 'copy',
    },
    drop: ['debugger', 'console'],
    bundle: false,
    minify: false,
    sourcemap: false,
    logLevel: 'info',
  })
}




