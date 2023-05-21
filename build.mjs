import * as path from 'node:path';

import { build } from 'esbuild';

async function buildIconvLite() {
  return await build({
    alias: {
      'buffer': 'buffer/'
    },
    bundle: true,
    entryPoints: [
      path.resolve('./node_modules/iconv-lite/lib/index.js')
    ],
    // external: [
    //   'buffer', 'string_decoder'
    // ],
    format: 'esm',
    // outdir: 'dist',
    outfile: 'dist/iconv-lite.mjs',
    sourcemap: true,
  });
}

async function main() {
  await buildIconvLite();
}
main();
