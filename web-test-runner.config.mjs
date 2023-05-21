import { esbuildPlugin } from '@web/dev-server-esbuild';
import { importMapsPlugin } from '@web/dev-server-import-maps';

/** @type {import('@web/test-runner').TestRunnerConfig} */
const config = {
  files: [
    '**/*.test.ts'
  ],
  coverageConfig: {
    // NOTE: https://github.com/modernweb-dev/web/issues/1400
    // `exclude: ['**/node_modules/**']` is not worked
    include: ['**/*.ts'],
    // NOTE: to GitHub Pages
    reportDir: 'docs'
  },
  plugins: [
    esbuildPlugin({
      ts: true
    }),
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            'iconv-lite': '/dist/iconv-lite.mjs'
          }
        }
      }
    })
  ],
};

export default config;
