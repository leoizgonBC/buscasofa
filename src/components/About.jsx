import React from 'react'
import './About.css'

const TEAM_MEMBERS = [
  {
    name: 'LEONARDO IZQUIERDO GONZÁLEZ',
    contribution: 'Página About del equipo 05, componente NotFound con ruta 404, manejo de estados de carga y error en App y enlace «Quienes somos» en el Header.',
  },
  {
    name: 'LUCIA PEDRERO CAMBLOR',
    contribution: 'Escenarios de aceptación BDD de la página About y del footer, y scripts de Cypress en package.json.',
  },
  {
    name: 'DAVID MENGIBAR LÓPEZ-DUQUE',
    contribution: 'Tabla de vista previa de estaciones en la página Home.',
  },
  {
    name: 'JOSUÉ BARRERA MARTÍN',
    contribution: 'Contador de estaciones del mapa y escenario BDD de filtros por rótulo.',
  },
  {
    name: 'RUBÉN GALLARDO MENCÍA',
    contribution: 'Footer con los nombres reales del equipo y su identificador para las pruebas.',
  },
]

const About = () => {
  return (
    <div className="about-container">
      <h1>Acerca de nosotros</h1>
      <div id="info">
        Somos el equipo nº 05
      </div>
      <section className="team-members">
        {TEAM_MEMBERS.map(member => (
          <article key={member.name} data-cy="team-member" className="team-member">
            <h2>{member.name}</h2>
            <p>{member.contribution}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default About
