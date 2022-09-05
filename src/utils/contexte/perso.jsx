import React, { useState, createContext, useEffect } from 'react'
import { nomCotHalfelins } from '../../donnees/lstCoteries'
import { nomCotNains } from '../../donnees/lstCoteries'
import { nomCotConquistadors } from '../../donnees/lstCoteries'
import { nomCotHautsElfes } from '../../donnees/lstCoteries'
import { nomCotElfesSylvains } from '../../donnees/lstCoteries'
import { nomCotBretonniens } from '../../donnees/lstCoteries'
import { nomCotKislevites } from '../../donnees/lstCoteries'
import { genNomConquistador } from '../../donnees/coteries/conquistadors/nomsConquistadors'
import { genNomNain } from '../../donnees/coteries/nains/nomsNains'
import { genNomElfe } from '../../donnees/coteries/elfes/nomsElfes'
import { genNomBretonnien } from '../../donnees/coteries/bretonniens/nomBretonniens'
import { genNomKislevite } from '../../donnees/coteries/kislevites/nomsKislevites'

import {
  getCompObjPropertyName,
  lstComps,
  nomResistance,
} from '../../donnees/lstComps'
import { resMaxDe, typesDes, lancerDe } from '../rand'

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
    pointsDeBlessure: 0,
    poids: 0,
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
    // générer un nom selon la coterie choisie :
    changementsAuPerso['nom'] = 'youpi pas de noms pour cette coterie'
    changementsAuPerso['cc'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['ct'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['force'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['endurance'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['initiative'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['agilete'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['dexterite'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['intelligence'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['force_mentale'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['sociabilite'] = 20 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['pointsDeBlessure'] =
      Math.floor(changementsAuPerso['force'] / 10) +
      2 * Math.floor(changementsAuPerso['endurance'] / 10) +
      Math.floor(changementsAuPerso['force_mentale'] / 10)

    if (perso.coterie === nomCotConquistadors)
      changementsAuPerso['nom'] = genNomConquistador(perso.male)
    else if (perso.coterie === nomCotHautsElfes) {
      changementsAuPerso['cc'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['ct'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['initiative'] = 40 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['agilete'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['dexterite'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['intelligence'] =
        30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['force_mentale'] =
        30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['nom'] = genNomElfe(perso.male)
      changementsAuPerso['pointsDeBlessure'] =
        Math.floor(changementsAuPerso['force'] / 10) +
        2 * Math.floor(changementsAuPerso['endurance'] / 10) +
        Math.floor(changementsAuPerso['force_mentale'] / 10)
    } else if (perso.coterie === nomCotElfesSylvains) {
      changementsAuPerso['cc'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['ct'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['initiative'] = 40 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['agilete'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['dexterite'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['intelligence'] =
        30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['force_mentale'] =
        30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['nom'] = genNomElfe(perso.male)
      changementsAuPerso['pointsDeBlessure'] =
        Math.floor(changementsAuPerso['force'] / 10) +
        2 * Math.floor(changementsAuPerso['endurance'] / 10) +
        Math.floor(changementsAuPerso['force_mentale'] / 10)
    } else if (perso.coterie === nomCotBretonniens)
      changementsAuPerso['nom'] = genNomBretonnien(perso.male)
    else if (perso.coterie === nomCotKislevites)
      changementsAuPerso['nom'] = genNomKislevite(perso.male)
    else if (perso.coterie === nomCotNains) {
      changementsAuPerso['nom'] = genNomNain(perso.male)
      changementsAuPerso['cc'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['endurance'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['agilete'] = 10 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['dexterite'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['force_mentale'] =
        40 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['sociabilite'] = 10 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['pointsDeBlessure'] =
        Math.floor(changementsAuPerso['force'] / 10) +
        2 * Math.floor(changementsAuPerso['endurance'] / 10) +
        Math.floor(changementsAuPerso['force_mentale'] / 10)
    } else if (perso.coterie === nomCotHalfelins) {
      changementsAuPerso['cc'] = 10 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['ct'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['force'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['dexterite'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['force_mentale'] =
        30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['sociabilite'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['pointsDeBlessure'] =
        2 * Math.floor(changementsAuPerso['endurance'] / 10) +
        Math.floor(changementsAuPerso['force_mentale'] / 10)
    }

    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }, [perso.coterie])

  // c'est ici que je pourrais changer le bg ??

  return (
    <PersoContexte.Provider value={{ perso, setPerso }}>
      {children}
    </PersoContexte.Provider>
  )
}
