import { getEvtAleatoireCoterie } from '../../donnees/lstCoteries'
import '../../styles/Coteries.css'
import { useContext, useEffect, useState } from 'react'
import { PhaseChoixContexte } from '../../utils/contexte/phaseChoix'
import { PersoContexte } from '../../utils/contexte/perso'
import { interpreterNouvLigne } from './coteries/ZoneDeValidation'
import { getCompObjPropertyName } from '../../donnees/lstComps'
import { getEvtAleatoireVoie } from '../../donnees/lstVoies'

function EvtsAleatoires() {
  const { perso, setPerso } = useContext(PersoContexte)
  const { phaseChoix, majPhaseChoix } = useContext(PhaseChoixContexte)
  const [texteFinal, setTexteFinal] = useState('aucun événement')
  const [rerender, setRerender] = useState(false)
  const [changementsAuPerso, setChangementsAuPerso] = useState({})

  useEffect(() => {
    // détermination de tous les événements aléatoires
    var texte = ''
    var changementsAuPersoLocal = {}

    // événement aléatoire de coterie (+ un deuxième ? coterie des parents ? du lycée ?)
    texte = texte + 'Événements de coterie : \n'
    const evtsAleatoireCoterie = getEvtAleatoireCoterie(perso.coterie, 1)
    evtsAleatoireCoterie.forEach((evt) => {
      texte =
        texte + '\n' + evt.description + ' (+1 ' + evt.bonusCompetence + ')'
      const idComp = getCompObjPropertyName(evt.bonusCompetence)
      changementsAuPersoLocal[idComp] = perso[idComp] + 1
    })

    texte = texte + '\n\n\nÉvénements de voie : \n'
    const evtsAleatoiresVoie = getEvtAleatoireVoie(perso.metier, 1)
    evtsAleatoiresVoie.forEach((evt) => {
      if (evt.bonusCompetence !== undefined) {
        texte =
          texte + '\n' + evt.description + ' (+1 ' + evt.bonusCompetence + ')'
        const idComp = getCompObjPropertyName(evt.bonusCompetence)
        changementsAuPersoLocal[idComp] = perso[idComp] + 1
      } else {
        texte =
          texte +
          '\n' +
          evt.description +
          ' (+ ' +
          evt.bonusRichesse +
          ' en niveau de vie)'
        changementsAuPersoLocal['niveau_richesse'] =
          perso['niveau_richesse'] + evt.bonusRichesse
      }
    })

    setTexteFinal(interpreterNouvLigne(texte))
    setRerender(!rerender)
    setChangementsAuPerso(changementsAuPersoLocal)
  }, [])

  function validerEvts() {
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
    majPhaseChoix(phaseChoix + 1)
  }

  return (
    <div style={{ padding: '0px 15px 0px 15px' }}>
      <div className="texteStandard">{texteFinal}</div>
      <button className="bouton" onClick={() => validerEvts()}>
        Confirmer
      </button>
    </div>
  )
}

export default EvtsAleatoires
