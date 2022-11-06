import React, { useState, createContext, useEffect } from 'react'
import {
  nomCotEmpire,
  nomCotHalfelins,
  nomCotNains,
  nomCotEstalie,
  nomCotHautsElfes,
  nomCotElfesSylvains,
  nomCotBretonniens,
  nomCotKislevites,
} from '../../donnees/lstCoteries'
import { genNomConquistador } from '../../donnees/coteries/conquistadors/nomsConquistadors'
import { genNomEmpire } from '../../donnees/coteries/empire/nomsEmpire'
import { genNomNain } from '../../donnees/coteries/nains/nomsNains'
import { genNomElfe } from '../../donnees/coteries/elfes/nomsElfes'
import { genNomBretonnien } from '../../donnees/coteries/bretonniens/nomBretonniens'
import { genNomKislevite } from '../../donnees/coteries/kislevites/nomsKislevites'
import { genNomHalfelin } from '../../donnees/coteries/halfelins/nomsHalfelins'

import { getCompObjPropertyName, lstComps } from '../../donnees/lstComps'
import { lancerDe, getRandomInt } from '../rand'
import { genCarriere } from '../../comp/choix/coteries/CarriereGen'
import { getCarriere } from '../../donnees/lstClasses'

export const PersoContexte = createContext()

export function calculerPoids(perso) {
  var poidsVal = getRandomInt(8)

  if (perso.male) poidsVal = poidsVal + getRandomInt(13)
  if (perso.age > 25) poidsVal = poidsVal + getRandomInt(7)

  poidsVal = poidsVal + perso.endurance + perso.force

  if (perso.coterie === nomCotHalfelins) poidsVal = poidsVal - 20
  if (
    perso.coterie === nomCotElfesSylvains ||
    perso.coterie === nomCotHautsElfes
  )
    poidsVal = poidsVal - 5

  return poidsVal
}

export function genererNom(perso) {
  /**
   * régénération du nom selon sexe et coterie
   */
  if (perso.coterie === nomCotEstalie) return genNomConquistador(perso.male)
  else if (perso.coterie === nomCotHautsElfes) {
    return genNomElfe(perso.male)
  } else if (perso.coterie === nomCotHautsElfes) {
    return genNomElfe(perso.male)
  } else if (perso.coterie === nomCotElfesSylvains) {
    return genNomElfe(perso.male)
  } else if (perso.coterie === nomCotBretonniens)
    return genNomBretonnien(perso.male)
  else if (perso.coterie === nomCotKislevites)
    return genNomKislevite(perso.male)
  else if (perso.coterie === nomCotHalfelins) return genNomHalfelin(perso.male)
  else if (perso.coterie === nomCotEmpire) return genNomEmpire(perso.male)
  else if (perso.coterie === nomCotNains) {
    return genNomNain(perso.male)
  } else if (perso.coterie === nomCotHalfelins) {
    return genNomHalfelin(perso.male)
  }
  return 'pas de nom pour lui'
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
    classe: '',
    carriere: '',
    evolution: '',
  })

  useEffect(() => {
    // valeurs de base de compétences :
    lstComps.forEach(({ titre, description }) => {
      const idComp = getCompObjPropertyName(titre)
      perso[idComp] = 0
    })
  }, [])

  // le changement de coterie implique un recalcul de presque tout :
  // âge, métier, portrait
  // mais pas la région car au contraire c'est le changemnt de région qui implique le changement de coterie
  useEffect(() => {
    var changementsAuPerso = {}

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

    if (perso.coterie === nomCotHautsElfes) {
      changementsAuPerso['cc'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['ct'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['initiative'] = 40 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['agilete'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['dexterite'] = 30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['intelligence'] =
        30 + lancerDe('D10') + lancerDe('D10')
      changementsAuPerso['force_mentale'] =
        30 + lancerDe('D10') + lancerDe('D10')
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
      changementsAuPerso['pointsDeBlessure'] =
        Math.floor(changementsAuPerso['force'] / 10) +
        2 * Math.floor(changementsAuPerso['endurance'] / 10) +
        Math.floor(changementsAuPerso['force_mentale'] / 10)
    } else if (perso.coterie === nomCotNains) {
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

    // mettre à jour des caracs selon la coterie actuelle
    // --------- age
    var age = getRandomInt(60) + 15 // pour un humain classique
    if (perso.coterie === nomCotNains) {
      age = getRandomInt(600) + 15
    }
    if (perso.coterie === nomCotHalfelins) {
      age = age * 2
    }
    // ----------- classe et carrère aleatoires
    var classeCarriereObj = genCarriere(perso.coterie)
    var classeStr = classeCarriereObj.classeStr
    var carriereStr = classeCarriereObj.carriereStr
    changementsAuPerso['age'] = age
    changementsAuPerso['carriere'] = carriereStr
    changementsAuPerso['classe'] = classeStr
    changementsAuPerso['nom'] = genererNom(perso)
    changementsAuPerso['poids'] = calculerPoids(perso)

    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }, [perso.coterie])

  /**
   * régénération du poids
   */
  useEffect(() => {
    var changementsAuPerso = {}
    changementsAuPerso['poids'] = calculerPoids(perso)
    changementsAuPerso['nom'] = genererNom(perso)
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }, [perso.male])

  /**
   * régénération du niveau de carrière
   */
  useEffect(() => {
    if (perso.carriere === undefined || perso.carriere === '') return
    // récupérer la carrière du joueur en tant qu'objet à partir de la str
    var carriereObj = getCarriere(perso.carriere)

    // l'utiliser pour déterminer l'évolution de carrière
    var evolutionObj = {}
    if (carriereObj.evolutions !== undefined) {
      var indexEvolution = getRandomInt(carriereObj.evolutions.length) // A FAIRE : changer probas d'évolution
      evolutionObj = carriereObj.evolutions[indexEvolution]
    } else {
      evolutionObj.titre = ''
    }

    var changementsAuPerso = {}
    changementsAuPerso['evolution'] = evolutionObj.titre
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }, [perso.carriere])

  return (
    <PersoContexte.Provider value={{ perso, setPerso }}>
      {children}
    </PersoContexte.Provider>
  )
}
