import { getRandomInt } from '../../utils/rand'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import styled from 'styled-components'
import {
  lstRegions
} from '../../donnees/lstRegions'

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 14px;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`

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
          <ButtonToggle
            key={region.titre}
            active={active === region}
            onClick={() => gererRegion(region)}
          >
            {region.titre}
          </ButtonToggle>
        ))}
    </div>
  )
}
export default BoutonsRegions
