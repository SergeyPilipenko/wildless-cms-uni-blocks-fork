/// <reference types="cypress" />
import blockFixturesMapJSON from '../fixtures/blockFixturesMap.json';
import * as blockFixture from '../pages/blockFixture';

type Params = {
  path: string;
  fixtures: Array<string>;
};

describe(
  'Mobile. Регресс отображения блоков',
  {
    baseUrl: 'http://localhost:8080/mobile/_renderer.html?',
    viewportWidth: 414,
    viewportHeight: 896,
  },
  () => {
    const blockFixturesMap = new Map<string, Params>(Object.entries(blockFixturesMapJSON));

    blockFixturesMap.forEach((blockParams, blockName) => {
      describe(`Регресс отображения блока ${blockName}`, () => {
        blockParams.fixtures.forEach((fixture) => {
          it(`Блок ${blockName}: ${fixture}`, () => {
            cy.visit(blockFixture.getBlockFixtureURL(blockParams.path, fixture));

            const screenshotName = `${blockName}_${fixture}`;

            switch (blockName) {
              case 'Header': {
                blockFixture.secondLevelMenuIsLoaded();
                blockFixture.getBlock().compareSnapshot(screenshotName);
                break;
              }
              case 'Footer': {
                blockFixture.firstLevelMenuIsLoaded();
                blockFixture.getBlock().find('svg').should('have.length', '7');
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
  },
);
