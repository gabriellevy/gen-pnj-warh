import React, { useState, createContext, useEffect } from 'react'

import {
  getCompObjPropertyName,
  lstComps,
  nomResistance,
} from '../../donnees/lstComps'
import { resMaxDe, typesDes } from '../rand'

export const PersoContexte = createContext()

export function calculerPoids(perso) {
  var poidsVal = 39

  if (perso.male) poidsVal = poidsVal + 10
  if (perso.age > 25) poidsVal = poidsVal + 5

  if (perso.endurance > 30) poidsVal = poidsVal + 6
  if (perso.dexterite > 30) poidsVal = poidsVal - 4

  poidsVal = poidsVal + perso[getCompObjPropertyName(nomResistance)] * 3

  return poidsVal
}

export const PersoProvider = ({ children }) => {
  const [perso, setPerso] = useState({
    // valeurs de base des caracs
    cc: 0,
    ct: 0,
    force: 0,
    endurance: 0,
    initiative: 0,
    agilete: 0,
    dexterite: 0,
    intelligence: 0,
    force_mentale: 0,
    sociabilite: 0,
    niveau_richesse: 0,
    pointsDeVie: 0,
    utilisationsCapaMagique: 0,
    poids: 0,
    description: '',
    evts: [],
    coterie: '', // titre de coterie
  })

  useEffect(() => {
    // valeurs de base de compétences :
    lstComps.forEach(({ titre, description }) => {
      const idComp = getCompObjPropertyName(titre)
      perso[idComp] = 0
    })
  }, [])

  useEffect(() => {
    var changementsAuPerso = {}
    changementsAuPerso['poids'] = calculerPoids(perso)

    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }, [perso.male, perso.age])

  // c'est ici que je pourrais changer le bg ??

  return (
    <PersoContexte.Provider value={{ perso, setPerso }}>
      {children}
    </PersoContexte.Provider>
  )
}
