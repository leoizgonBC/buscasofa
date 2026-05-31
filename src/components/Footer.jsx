import React from 'react'

const TEAM_MEMBERS = [
  'LEONARDO IZQUIERDO GONZÁLEZ',
  'LUCIA PEDRERO CAMBLOR',
  'DAVID MENGIBAR LÓPEZ-DUQUE',
  'JOSUÉ BARRERA MARTÍN',
  'RUBÉN GALLARDO MENCÍA',
]

const Footer = () => {
  return (
    <footer data-cy="footer">
      <h2>Miembros del equipo:</h2>
      <ul>
        {TEAM_MEMBERS.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
