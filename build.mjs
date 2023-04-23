import * as esbuild from 'esbuild'
import * as glob from 'glob'


const getEnv = () => {
  if (process.argv?.includes('--dev')) {
    return 'watch';
  }
};


if (getEnv()) {
  let ctx = await esbuild.context({
    entryPoints: glob.sync('src/**/*.{js,less,wxs,wxml,json,png,d.ts}'),
    outdir: 'demo/components',
    loader: {
      '.less': 'copy',
      '.wxs': 'copy',
      '.wxml': 'copy',
      '.json': 'copy',
      '.png': 'copy',
      '.json': 'copy',
      '.d.ts': 'copy',
    },
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
    loader: {
      '.less': 'copy',
      '.wxs': 'copy',
      '.wxml': 'copy',
      '.json': 'copy',
      '.png': 'copy',
      '.d.ts': 'copy',
    },
    drop: ['debugger', 'console'],
    bundle: true,
    minify: true,
    sourcemap: false,
    logLevel: 'info',
  })
}




