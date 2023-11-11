import { useState } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import {
  lstRegions
} from '../../donnees/lstRegions'
import { BoutonBascule } from '../App'

function BoutonsRegions() {
  const { perso, setPerso } = useContext(PersoContexte)
  const [region, majRegion] = useState(perso.region)
  const [active, setActive] = useState(lstRegions[0])

  function gererRegion(region) {
    setActive(region)
    majRegion(region)

    var changementsAuPerso = {
      region: region.titre,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  return (
    <div style={{ padding: '5px 15px 5px 15px' }}>
        {lstRegions.map((region) => (
          <BoutonBascule
            key={region.titre}
            active={active === region}
            onClick={() => gererRegion(region)}
          >
            {region.titre}
          </BoutonBascule>
        ))}
    </div>
  )
}
export default BoutonsRegions
