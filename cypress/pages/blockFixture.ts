/// <reference types="cypress" />
import { basename } from 'path';

const fixtureURL = (path, name) =>
  `_fixtureId=${encodeURIComponent(
    JSON.stringify({
      path,
      name,
    }),
  )}`;

export const getBlockFixtureURL = (path, fixture) => {
  return `${Cypress.config().baseUrl}${fixtureURL(path, fixture)}`;
};

export const getBlockFixurePathMap = (pattern: string) => {
  const blockFixturePathMap = new Map<string, string>();
  const files = cy.task('glob', { pattern: pattern });

  files.each((el) => {
    const blockPath = String(el);
    const blockName = basename(blockPath, '.tsx').replace(/\.\w+/g, '');
    blockFixturePathMap.set(blockName, blockPath);
  });

  return blockFixturePathMap;
};

export const getBlockFixtures = (blockPath: string) =>
  cy.readFile(blockPath).then((file) => {
    const fixtures = String(file).substring(String(file).indexOf('export default'));
    const keyValuePairs = fixtures
      .substring(fixtures.indexOf('{') + 1, fixtures.lastIndexOf('}'))
      .split(/[>)],\n\s/g)
      .map((pair) => pair.split(':'));
    return keyValuePairs.map(([key]) => key.trim().replace(/'/g, ''));
  });

export const getBlock = () => cy.get('div[data-theme]:first > *');

export const headerMapIsLoaded = () => cy.contains('Кредитные карты').should('exist');
export const footerMapIsLoaded = () => cy.contains('Частным клиентам').should('exist');

export const activeSearchBar = () => cy.get('#search-bar-input').should('exist').type('тест');

export const galleryScrollRight = () =>
  cy.get("data-block-control='scroll-right']").should('exist').click();
