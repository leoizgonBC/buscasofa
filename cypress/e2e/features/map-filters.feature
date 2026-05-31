Feature: Filtros del mapa

  Scenario: Filtrar gasolineras por rótulo en el mapa
    Given el usuario navega al mapa con datos de combustible
    When filtra el mapa por un rótulo existente
    Then el contador de estaciones del mapa es menor que el total inicial
