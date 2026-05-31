/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let initialCount = 0;
let sampleRotulo = '';

const parseStationCount = (text) => {
  const match = String(text).match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

Given('el usuario navega al mapa con datos de combustible', () => {
  cy.intercept('GET', '**/EstacionesTerrestres/**').as('getFuelPrices');
  cy.visit('/mapa');
  cy.wait('@getFuelPrices').then(({ response }) => {
    const stations = response.body.ListaEESSPrecio;
    sampleRotulo = stations[stations.length - 1]['Rótulo'];
  });
  cy.get('[data-cy=map-station-count]', { timeout: 10000 }).invoke('text').then((text) => {
    initialCount = parseStationCount(text);
    expect(initialCount).to.be.greaterThan(0);
  });
});

When('filtra el mapa por un rótulo existente', () => {
  cy.get('#filtro-rotulo').clear().type(sampleRotulo);
});

Then('el contador de estaciones del mapa es menor que el total inicial', () => {
  cy.get('[data-cy=map-station-count]').invoke('text').then((text) => {
    const count = parseStationCount(text);
    expect(count).to.be.lessThan(initialCount);
  });
});
