import { getRandomInt } from '../../utils/rand'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import {
  lstRegions,
  nomBretonnie,
  nomKislev,
  nomMootland,
  nomRegMiddenheim,
  nomRegMiddenlander,
  nomRegMontagnesGrises,
  nomRegNordlander,
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
  nomCotMiddenheimer,
  nomCotMiddenlander,
  nomCotNains,
  nomCotNordlander,
} from '../../donnees/lstCoteries'

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
    if (region.titre === nomRegMiddenheim) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand === 1) nouvCoterie = nomCotElfesSylvains
      else if (rand <= 2) nouvCoterie = nomCotBretonniens
      //else if (rand <= 6) nouvCoterie = nomCotEstalie
      else if (rand <= 6) nouvCoterie = nomCotHalfelins
      else if (rand <= 8) nouvCoterie = nomCotKislevites
      else if (rand <= 11) nouvCoterie = nomCotNains
      else if (rand <= 95) nouvCoterie = nomCotMiddenheimer
    } else if (region.titre === nomRegMiddenlander) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand === 1) nouvCoterie = nomCotElfesSylvains
      else if (rand <= 2) nouvCoterie = nomCotBretonniens
      //else if (rand <= 6) nouvCoterie = nomCotEstalie
      else if (rand <= 6) nouvCoterie = nomCotHalfelins
      else if (rand <= 8) nouvCoterie = nomCotKislevites
      else if (rand <= 11) nouvCoterie = nomCotNains
      else if (rand <= 95) nouvCoterie = nomCotMiddenlander
    } else if (region.titre === nomRegNordlander) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand === 1) nouvCoterie = nomCotElfesSylvains
      else if (rand <= 2) nouvCoterie = nomCotBretonniens
      //else if (rand <= 6) nouvCoterie = nomCotEstalie
      else if (rand <= 6) nouvCoterie = nomCotHalfelins
      else if (rand <= 8) nouvCoterie = nomCotKislevites
      else if (rand <= 11) nouvCoterie = nomCotNains
      else if (rand <= 95) nouvCoterie = nomCotNordlander
    } else if (region.titre === nomRegReikland) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand === 1) nouvCoterie = nomCotElfesSylvains
      else if (rand <= 4) nouvCoterie = nomCotBretonniens
      //else if (rand <= 6) nouvCoterie = nomCotEstalie
      else if (rand <= 9) nouvCoterie = nomCotHalfelins
      else if (rand <= 10) nouvCoterie = nomCotKislevites
      else if (rand <= 13) nouvCoterie = nomCotNains
      else if (rand <= 14) nouvCoterie = nomCotMiddenheimer
    } else if (region.titre === nomRegMontagnesGrises) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand === 1) nouvCoterie = nomCotElfesSylvains
      else if (rand <= 6) nouvCoterie = nomCotBretonniens
      //else if (rand <= 7) nouvCoterie = nomCotEstalie
      else if (rand <= 11) nouvCoterie = nomCotHalfelins
      else if (rand <= 12) nouvCoterie = nomCotKislevites
      else if (rand <= 70) nouvCoterie = nomCotNains
    } else if (region.titre === nomBretonnie) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand <= 5) nouvCoterie = nomCotElfesSylvains
      //else if (rand <= 11) nouvCoterie = nomCotEstalie
      else if (rand <= 12) nouvCoterie = nomCotHalfelins
      else if (rand <= 13) nouvCoterie = nomCotKislevites
      else if (rand <= 17) nouvCoterie = nomCotNains
      else if (rand <= 30) nouvCoterie = nomCotEmpire
      else nouvCoterie = nomCotBretonniens
    } else if (region.titre === nomKislev) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand <= 1) nouvCoterie = nomCotElfesSylvains
      //else if (rand <= 3) nouvCoterie = nomCotEstalie
      else if (rand <= 4) nouvCoterie = nomCotHalfelins
      else if (rand <= 10) nouvCoterie = nomCotBretonniens
      else if (rand <= 13) nouvCoterie = nomCotNains
      else if (rand <= 26) nouvCoterie = nomCotEmpire
      else nouvCoterie = nomCotKislevites
    } else if (region.titre === nomMootland) {
      if (rand === 0) nouvCoterie = nomCotHautsElfes
      else if (rand <= 1) nouvCoterie = nomCotElfesSylvains
      //else if (rand <= 4) nouvCoterie = nomCotEstalie
      else if (rand <= 9) nouvCoterie = nomCotKislevites
      else if (rand <= 13) nouvCoterie = nomCotBretonniens
      else if (rand <= 19) nouvCoterie = nomCotNains
      else if (rand <= 45) nouvCoterie = nomCotEmpire
      else nouvCoterie = nomCotHalfelins
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
