import Selection from './choix/Selection'
import BoutonsRegions from './choix/BoutonsRegions'
import Sexe from './choix/Sexe'
import { useContext } from 'react'

function ZoneDeChoix() {
  return (
    <div>
      <BoutonsRegions />
      <Selection />
      <Sexe />
    </div>
  )
}

export default ZoneDeChoix
