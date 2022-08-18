/// <reference types="cypress" />

import * as blockFixture from '../pages/blockFixture';

describe(
  'Mobile. Регресс отображения блоков',
  {
    baseUrl: 'http://localhost:5002/_renderer.html?',
    viewportWidth: 414,
    viewportHeight: 896,
  },
  () => {
    const pattetnBlockFixtureMobile = 'src/components/**/*fixture.mobile.tsx';
    let blockFixturePathMap = new Map<string, string>();

    before(() => {
      blockFixturePathMap = blockFixture.getBlockFixurePathMap(pattetnBlockFixtureMobile);
    });

    it(`Mobile. Регресс отображения блока`, function () {
      blockFixturePathMap.forEach((blockPath, blockName) => {
        const blockFixtures = blockFixture.getBlockFixtures(blockPath);

        blockFixtures.each((fixture) => {
          cy.visit(blockFixture.getBlockFixtureURL(blockPath, fixture));
          const screenshotName = `${blockName}_${fixture}`;

          switch (blockName) {
            case 'Header': {
              blockFixture.headerMapIsLoaded();
              blockFixture.getBlock().compareSnapshot(screenshotName);
              break;
            }
            case 'Footer': {
              blockFixture.footerMapIsLoaded();
              blockFixture.getBlock().compareSnapshot(screenshotName);
              break;
            }
            default: {
              blockFixture.getBlock().compareSnapshot(screenshotName);
              break;
            }
          }
        });
      });
    });
  },
);
