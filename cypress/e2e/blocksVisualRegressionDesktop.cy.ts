/// <reference types="cypress" />
import blockFixturesMapJSON from '../fixtures/blockFixturesMap.json';
import * as blockFixture from '../pages/blockFixture';

type Params = {
  path: string;
  fixtures: Array<string>;
};

describe('Desktop. Регресс отображения блоков', {}, () => {
  const blockFixturesMap = new Map<string, Params>(Object.entries(blockFixturesMapJSON));

  blockFixturesMap.forEach((blockParams, blockName) => {
    describe(`Desktop. Регресс отображения блока ${blockName}`, () => {
      blockParams.fixtures.forEach((fixture) => {
        it(`Блок ${blockName}: ${fixture}`, () => {
          cy.visit(blockFixture.getBlockFixtureURL(blockParams.path, fixture));

          const screenshotName = `${blockName}_${fixture}`;

          switch (blockName) {
            case 'Header': {
              blockFixture.firstLevelMenuIsLoaded();
              blockFixture.getBlock().compareSnapshot(screenshotName);
              break;
            }
            case 'Footer': {
              blockFixture.firstLevelMenuIsLoaded();
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
  });
});
