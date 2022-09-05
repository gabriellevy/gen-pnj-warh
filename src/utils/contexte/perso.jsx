import React, { useState, createContext, useEffect } from 'react'
import { nomCotConquistadors } from '../../donnees/lstCoteries'
import { nomCotHautsElfes } from '../../donnees/lstCoteries'
import { nomCotElfesSylvains } from '../../donnees/lstCoteries'
import { nomCotBretonniens } from '../../donnees/lstCoteries'
import { nomCotKislevites } from '../../donnees/lstCoteries'
import { genNomConquistador } from '../../donnees/coteries/conquistadors/nomsConquistadors'
import { genNomElfe } from '../../donnees/coteries/elfes/nomsElfes'
import { genNomBretonnien } from '../../donnees/coteries/bretonniens/nomBretonniens'
import { genNomKislevite } from '../../donnees/coteries/kislevites/nomsKislevites'

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
    poids: 0,
    description: '',
    evts: [],
    coterie: '', // titre de coterie
    nom: '',
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
    changementsAuPerso['nom'] =
      // générer un nom selon la coterie choisie :
      changementsAuPerso['nom'] = 'youpi pas de noms pour cette coterie'
    if (perso.coterie === nomCotConquistadors)
      changementsAuPerso['nom'] = genNomConquistador(perso.male)
    else if (perso.coterie === nomCotHautsElfes)
      changementsAuPerso['nom'] = genNomElfe(perso.male)
    else if (perso.coterie === nomCotElfesSylvains)
      changementsAuPerso['nom'] = genNomElfe(perso.male)
    else if (perso.coterie === nomCotBretonniens)
      changementsAuPerso['nom'] = genNomBretonnien(perso.male)
    else if (perso.coterie === nomCotKislevites)
      changementsAuPerso['nom'] = genNomKislevite(perso.male)

    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }, [perso.male, perso.age, perso.coterie])

  // c'est ici que je pourrais changer le bg ??

  return (
    <PersoContexte.Provider value={{ perso, setPerso }}>
      {children}
    </PersoContexte.Provider>
  )
}
