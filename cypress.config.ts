import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin';
import globMode from 'glob';
import { promisify } from 'util';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5001/_renderer.html?',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    screenshotsFolder: './cypress/snapshots/actual',
    trashAssetsBeforeRuns: true,

    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);

      on('task', {
        glob({ pattern }) {
          const glob = promisify(globMode);

          return glob(pattern, {
            ignore: ['**/ContentPage/**', '**/LikeControl/**', '**/Placeholder/**'],
          });
        },
      });
    },
  },
});
