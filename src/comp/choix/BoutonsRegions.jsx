import { getRandomInt } from '../../utils/rand'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { lstRegions } from '../../donnees/lstRegions'
import styled from 'styled-components'
const Button = styled.button`
  /* Same as above */
`
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`
const ButtonGroup = styled.div`
  display: flex;
`

function BoutonsRegions() {
  const { perso, setPerso } = useContext(PersoContexte)
  const [region, majRegion] = useState(perso.region)
  const [active, setActive] = useState(lstRegions[0])

  // sélection aléatoire de région
  useEffect(() => {
    if (perso.region === undefined || perso.region === '') {
      var indexRegion = getRandomInt(lstRegions.length)
      var regionObj = lstRegions[indexRegion]

      var changementsAuPerso = {
        region: regionObj.titre,
      }
      var persoFinal = { ...perso, ...changementsAuPerso }
      setPerso(persoFinal)
    }
  }, [perso, setPerso])

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
      Boutons région :
      <ButtonGroup>
        {lstRegions.map((region) => (
          <ButtonToggle
            key={region.titre}
            active={active === region}
            onClick={() => gererRegion(region)}
          >
            {region.titre}
          </ButtonToggle>
        ))}
      </ButtonGroup>
    </div>
  )
}
export default BoutonsRegions
