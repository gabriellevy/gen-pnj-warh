import Coteries from './choix/Coteries'
import BoutonsRegions from './choix/BoutonsRegions'
import Sexe from './choix/Sexe'
import Fonctionnalites from './choix/Fonctionnalites'

function ZoneDeChoix() {
  return (
    <div>
      <BoutonsRegions />
      <Coteries />
      <Sexe />
      <Fonctionnalites />
    </div>
  )
}

export default ZoneDeChoix
