#!/usr/bin/env node

const cssModulesPlugin = require('esbuild-css-modules-plugin')

require('esbuild')
  .build({
    logLevel: 'info',
    entryPoints: ['src/index.js'],
    external: ['react'],
    format: 'esm',
    bundle: true,
    minify: true,
    outfile: 'dist/layout-blocks.esm.js',
    plugins: [cssModulesPlugin()],
  })
  .catch(() => process.exit(1))

require('esbuild')
  .build({
    logLevel: 'info',
    entryPoints: ['src/index.js'],
    external: ['react'],
    format: 'cjs',
    bundle: true,
    minify: true,
    outfile: 'dist/index.js',
    plugins: [cssModulesPlugin()],
  })
  .catch(() => process.exit(1))
