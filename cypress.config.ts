import { defineConfig } from 'cypress';
import cypressMochawesomeReporter from 'cypress-mochawesome-reporter/plugin';
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin';
import fs from 'fs';
import glob from 'glob';
import { basename } from 'path';

type Params = {
  path: string;
  fixtures: Array<string>;
};

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    reportFilename: 'report',
    reportPageTitle: 'Report',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    baseUrl: 'http://localhost:8080/_renderer.html?',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    experimentalInteractiveRunEvents: true,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    screenshotsFolder: './cypress/snapshots/actual',
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: false,

    setupNodeEvents(on, config) {
      on('before:spec', (spec) => {
        let filesPattern;

        if (spec.name.includes('blocksVisualRegressionDesktop')) {
          filesPattern = 'src/components/**/*fixture.tsx';
        }
        if (spec.name.includes('blocksVisualRegressionMobile')) {
          filesPattern = 'src/components/**/*fixture.mobile.tsx';
        }

        glob(
          filesPattern,
          {
            ignore: ['**/ContentPage/**', '**/LikeControl/**', '**/Placeholder/**'],
          },
          (err, files) => {
            return fs.writeFileSync(
              './cypress/fixtures/blockFixturesMap.json',
              JSON.stringify(Object.fromEntries(createFixturesMap(err, files))),
            );
          },
        );
      });

      on(
        'before:browser:launch',
        (browser: Cypress.Browser, launchOptions: Cypress.BrowserLaunchOptions) => {
          if (browser.family === 'chromium') {
            launchOptions.args.push('--force-color-profile=srgb');
            launchOptions.args.push('--disable-low-res-tiling');
            launchOptions.args.push('--disable-smooth-scrolling');
          }

          return launchOptions;
        },
      );

      getCompareSnapshotsPlugin(on, config);
      cypressMochawesomeReporter(on);
    },
  },
});

const createFixturesMap = (_, files) => {
  const blockFixturesMap = new Map<string, Params>();

  files.forEach((file) => {
    const blockPath = String(file);
    const blockName = basename(blockPath, '.tsx').replace(/\.\w+/g, '');
    const fileContent = fs.readFileSync(file).toString();
    const fixtures = fileContent.substring(fileContent.indexOf('export default'));
    const keyValuePairs = fixtures
      .substring(fixtures.indexOf('{') + 1, fixtures.lastIndexOf('}'))
      .split(/[>)],\n\s/g)
      .map((pair) => pair.split(':'));

    const blockParams: Params = {
      path: blockPath,
      fixtures: keyValuePairs.map(([key]) => key.trim().replace(/'/g, '')),
    };

    blockFixturesMap.set(blockName, blockParams);
  });

  return blockFixturesMap;
};
