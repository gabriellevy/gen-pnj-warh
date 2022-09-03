import Coteries from './choix/Coteries'
import Caracs from './choix/ChoixCaracs'
import Voies from './choix/Voies'
import Finalisation from './choix/Finalisation'
import AffichageFinal from './choix/AffichageFinal'
import { useContext } from 'react'
import { PhaseChoixContexte } from '../utils/contexte/phaseChoix'
import EvtsAleatoires from './choix/EvtsAleatoires'

function ZoneDeChoix() {
  const { phaseChoix, majPhaseChoix } = useContext(PhaseChoixContexte)
  const iDCoteries = 'Coteries'
  const iDVoies = 'Voies'
  const iDFinalisation = 'Finalisation'
  const iDAffichageFinal = 'AffichageFinal'
  const iDEvtsAleatoires = 'EvtsAleatoires'
  const iDCaracs = 'Caracs'
  const ordre = [
    iDCoteries,
    iDCaracs,
    iDVoies,
    iDEvtsAleatoires,
    iDFinalisation,
    iDAffichageFinal,
  ]
  if (ordre[phaseChoix - 1] === iDCoteries) {
    return (
      <div>
        <Coteries />
      </div>
    )
  }
  if (ordre[phaseChoix - 1] === iDVoies) {
    return (
      <div>
        <Voies />
      </div>
    )
  }
  if (ordre[phaseChoix - 1] === iDCaracs) {
    return (
      <div>
        <Caracs />
      </div>
    )
  }
  if (ordre[phaseChoix - 1] === iDFinalisation) {
    return (
      <div>
        <Finalisation />
      </div>
    )
  }
  if (ordre[phaseChoix - 1] === iDAffichageFinal) {
    return (
      <div>
        <AffichageFinal />
      </div>
    )
  }
  if (ordre[phaseChoix - 1] === iDEvtsAleatoires) {
    return (
      <div>
        <EvtsAleatoires />
      </div>
    )
  }
}

export default ZoneDeChoix
