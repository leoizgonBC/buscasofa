/// <reference types="Cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario navega a la home', () => {
  cy.visit('/');
});

Then('debería ver en el footer el nombre {string}', (nombre) => {
  cy.get('[data-cy=footer]').should('contain', nombre);
});
