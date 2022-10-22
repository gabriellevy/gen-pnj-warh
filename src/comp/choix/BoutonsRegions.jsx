import { getRandomInt } from '../../utils/rand'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import {
  lstRegions,
  nomRegMontagnesGrises,
  nomRegReikland,
} from '../../donnees/lstRegions'
import styled from 'styled-components'
import {
  nomCotBretonniens,
  nomCotElfesSylvains,
  nomCotEmpire,
  nomCotEstalie,
  nomCotHalfelins,
  nomCotHautsElfes,
  nomCotKislevites,
  nomCotNains,
} from '../../donnees/lstCoteries'

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
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

    // changement de la coterie selon la région sélectionnée => entraîne le changeemnt de caracs par propagation
    var nouvCoterie = nomCotEmpire
    var rand = getRandomInt(100)
    if (region.titre === nomRegReikland) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand === 1) nouvCoterie = nomCotElfesSylvains
      else if (rand <= 4) nouvCoterie = nomCotBretonniens
      else if (rand <= 6) nouvCoterie = nomCotEstalie
      else if (rand <= 9) nouvCoterie = nomCotHalfelins
      else if (rand <= 10) nouvCoterie = nomCotKislevites
      else if (rand <= 13) nouvCoterie = nomCotNains
    } else if (region.titre === nomRegMontagnesGrises) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand === 1) nouvCoterie = nomCotElfesSylvains
      else if (rand <= 6) nouvCoterie = nomCotBretonniens
      else if (rand <= 7) nouvCoterie = nomCotEstalie
      else if (rand <= 11) nouvCoterie = nomCotHalfelins
      else if (rand <= 12) nouvCoterie = nomCotKislevites
      else if (rand <= 70) nouvCoterie = nomCotNains
    }

    var changementsAuPerso = {
      region: region.titre,
      coterie: nouvCoterie,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  return (
    <div style={{ padding: '5px 15px 5px 15px' }}>
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
