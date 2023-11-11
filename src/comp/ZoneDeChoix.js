import Coteries from './choix/Coteries'
import Sexe from './choix/Sexe'
import GenPerso from './choix/GenPerso'

function ZoneDeChoix() {
  return (
    <div>
      <GenPerso/>
      <Coteries />
      <Sexe />
    </div>
  )
}

export default ZoneDeChoix
