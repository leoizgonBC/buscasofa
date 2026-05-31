Feature: Página About

  Scenario: Información del equipo en la página About
    Given el usuario navega a la página About
    Then debería ver el número de equipo "5"
    And debería ver al miembro "LEONARDO IZQUIERDO GONZÁLEZ" con su contribución
    And debería ver al miembro "LUCIA PEDRERO CAMBLOR" con su contribución
    And debería ver al miembro "DAVID MENGIBAR LÓPEZ-DUQUE" con su contribución
    And debería ver al miembro "JOSUÉ BARRERA MARTÍN" con su contribución
    And debería ver al miembro "RUBÉN GALLARDO MENCÍA" con su contribución
