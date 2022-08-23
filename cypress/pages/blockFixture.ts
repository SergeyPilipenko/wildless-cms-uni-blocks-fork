/// <reference types="cypress" />

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

export const getBlock = () => cy.get('div[data-theme]:first > *');

export const headerMapIsLoaded = () => cy.contains('Кредитные карты').should('exist');
export const footerMapIsLoaded = () => cy.contains('Частным клиентам').should('exist');

export const activeSearchBar = () => cy.get('#search-bar-input').should('exist').type('тест');

export const galleryScrollRight = () =>
  cy.get("data-block-control='scroll-right']").should('exist').click();
