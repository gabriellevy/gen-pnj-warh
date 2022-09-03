import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'

/**
 * affiche le personnage final
 * le top serait de permettre la génération d'un pdf si possible
 */
function AffichageFinal() {
  const { perso, setPerso } = useContext(PersoContexte)
  return (
    <div style={{ padding: '0px 15px 0px 15px' }}>
      <div className="texteStandard">A FAIRE : affichage des caracs</div>
    </div>
  )
}

export default AffichageFinal
