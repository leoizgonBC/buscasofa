/// <reference types="Cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

const CONTRIBUTIONS = {
  'LEONARDO IZQUIERDO GONZÁLEZ': 'Página About del equipo 05',
  'LUCIA PEDRERO CAMBLOR': 'Escenarios de aceptación BDD',
  'DAVID MENGIBAR LÓPEZ-DUQUE': 'Tabla de vista previa de estaciones',
  'JOSUÉ BARRERA MARTÍN': 'Contador de estaciones del mapa',
  'RUBÉN GALLARDO MENCÍA': 'Footer con los nombres reales del equipo',
};

Given('el usuario navega a la página About', () => {
  cy.visit('/about');
});

Then('debería ver el número de equipo {string}', (numero) => {
  cy.get('#info').should('contain', numero);
});

Then('debería ver al miembro {string} con su contribución', (nombre) => {
  const fragmento = CONTRIBUTIONS[nombre];
  cy.get('[data-cy=team-member]')
    .contains(nombre)
    .parents('[data-cy=team-member]')
    .should('contain', fragmento);
});
