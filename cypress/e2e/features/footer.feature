Feature: Footer del equipo

  Scenario: Los nombres del equipo aparecen en el footer
    Given el usuario navega a la home
    Then debería ver en el footer el nombre "LEONARDO IZQUIERDO GONZÁLEZ"
    And debería ver en el footer el nombre "LUCIA PEDRERO CAMBLOR"
    And debería ver en el footer el nombre "DAVID MENGIBAR LÓPEZ-DUQUE"
    And debería ver en el footer el nombre "JOSUÉ BARRERA MARTÍN"
    And debería ver en el footer el nombre "RUBÉN GALLARDO MENCÍA"
