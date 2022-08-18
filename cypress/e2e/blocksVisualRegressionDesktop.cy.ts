/// <reference types="cypress" />

import * as blockFixture from '../pages/blockFixture';

describe('Desktop. Регресс отображения блоков', {}, () => {
  const pattetnBlockFixtureDesktop = 'src/components/**/*fixture.tsx';
  let blockFixturePathMap = new Map<string, string>();

  before(() => {
    blockFixturePathMap = blockFixture.getBlockFixurePathMap(pattetnBlockFixtureDesktop);
  });

  it(`Desktop. Регресс отображения блока`, function () {
    blockFixturePathMap.forEach((blockPath, blockName) => {
      const blockFixtures = blockFixture.getBlockFixtures(blockPath);

      blockFixtures.each((fixture) => {
        cy.visit(blockFixture.getBlockFixtureURL(blockPath, fixture));
        const screenshotName = `${blockName}_${fixture}`;

        blockFixture.getBlock().compareSnapshot(screenshotName);
      });
    });
  });
});
