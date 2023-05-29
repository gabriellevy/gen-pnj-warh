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
  nomCotMiddenheimer,
  nomCotMiddenlander,
} from '../../donnees/lstCoteries'
import { genNomConquistador } from '../../donnees/coteries/conquistadors/nomsConquistadors'
import { genNomEmpire } from '../../donnees/coteries/empire/nomsEmpire'
import { genNomNain } from '../../donnees/coteries/nains/nomsNains'
import { genNomElfe } from '../../donnees/coteries/elfes/nomsElfes'
import { genNomBretonnien } from '../../donnees/coteries/bretonniens/nomBretonniens'
import { genNomKislevite } from '../../donnees/coteries/kislevites/nomsKislevites'
import { genNomHalfelin } from '../../donnees/coteries/halfelins/nomsHalfelins'

import {
  getCompetence,
  getCompObjPropertyName,
  lstComps,
} from '../../donnees/lstComps'
import { lancerDe, getRandomInt } from '../rand'
import { genCarriere } from '../../comp/choix/coteries/CarriereGen'
import {
  getCarriere,
  getEvolutionObjFromCarriereAndEvolutionStr,
  getIndexEvolutionObjFromCarriereAndEvolutionStr,
} from '../../donnees/lstClasses'
import { getCaracObjPropertyName } from '../../donnees/lstCaracs'

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
  else if (perso.coterie === nomCotMiddenheimer) return genNomEmpire(perso.male)
  else if (perso.coterie === nomCotMiddenlander) return genNomEmpire(perso.male)
  else if (perso.coterie === nomCotNains) {
    return genNomNain(perso.male)
  } else if (perso.coterie === nomCotHalfelins) {
    return genNomHalfelin(perso.male)
  }
  return 'pas de nom pour lui'
}

/**
 * donne les valeurs initiales des caracs du perso selon sa race
 * @param {*} perso
 * @param {*} changementsAuPerso
 */
export function setCaracsInitiales(perso, changementsAuPerso) {
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

  if (perso.coterie === nomCotHautsElfes) {
    changementsAuPerso['cc'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['ct'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['initiative'] = 40 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['agilete'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['dexterite'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['intelligence'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['force_mentale'] = 30 + lancerDe('D10') + lancerDe('D10')
  } else if (perso.coterie === nomCotElfesSylvains) {
    changementsAuPerso['cc'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['ct'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['initiative'] = 40 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['agilete'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['dexterite'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['intelligence'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['force_mentale'] = 30 + lancerDe('D10') + lancerDe('D10')
  } else if (perso.coterie === nomCotNains) {
    changementsAuPerso['cc'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['endurance'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['agilete'] = 10 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['dexterite'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['force_mentale'] = 40 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['sociabilite'] = 10 + lancerDe('D10') + lancerDe('D10')
  } else if (perso.coterie === nomCotHalfelins) {
    changementsAuPerso['cc'] = 10 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['ct'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['force'] = 10 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['dexterite'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['force_mentale'] = 30 + lancerDe('D10') + lancerDe('D10')
    changementsAuPerso['sociabilite'] = 30 + lancerDe('D10') + lancerDe('D10')
  }
}

export function setCompetencesAZero(perso, changementsAuPerso) {
  for (let i = 0; i < lstComps.length; i++) {
    const compPropertyName = getCompObjPropertyName(lstComps[i].titre)
    changementsAuPerso[compPropertyName] = 0
  }
}

/**
 * maj les caracs en fonction de la carrière et des niveaux d'évolution du personnage
 */
export function majCaracs(perso, changementsAuPerso, nivCarriere) {
  // récupérer la carrière du joueur en tant qu'objet à partir de la str
  var carriereObj = getCarriere(perso.carriere)
  // les caracs initiales sont d'abord resettées selon la coterie, avant d'être modifiées par la carrière
  setCaracsInitiales(perso, changementsAuPerso)
  if (carriereObj && carriereObj.evolutions[0].caracs !== undefined) {
    // augmentations de caracs de niveau '0' :
    for (let i = 0; i < carriereObj.evolutions[0].caracs.length; ++i) {
      var caracStr = getCaracObjPropertyName(
        carriereObj.evolutions[0].caracs[i]
      )
      changementsAuPerso[caracStr] =
        changementsAuPerso[caracStr] +
        getRandomInt(6) * (nivCarriere + 1) +
        5 * nivCarriere
    }
    // augmentations de caracs de niveau '1' :
    if (nivCarriere > 0) {
      for (let i = 0; i < carriereObj.evolutions[1].caracs.length; ++i) {
        caracStr = getCaracObjPropertyName(carriereObj.evolutions[1].caracs[i])
        changementsAuPerso[caracStr] =
          changementsAuPerso[caracStr] +
          getRandomInt(6) * nivCarriere +
          5 * (nivCarriere - 1)
      }
      // augmentations de caracs de niveau '2' :
      if (nivCarriere > 1) {
        for (let i = 0; i < carriereObj.evolutions[2].caracs.length; ++i) {
          caracStr = getCaracObjPropertyName(
            carriereObj.evolutions[2].caracs[i]
          )
          changementsAuPerso[caracStr] =
            changementsAuPerso[caracStr] +
            getRandomInt(6) * (nivCarriere - 1) +
            5 * (nivCarriere - 2)
        }
        // augmentations de caracs de niveau '3' :
        if (nivCarriere > 2) {
          for (let i = 0; i < carriereObj.evolutions[3].caracs.length; ++i) {
            caracStr = getCaracObjPropertyName(
              carriereObj.evolutions[3].caracs[i]
            )
            changementsAuPerso[caracStr] =
              changementsAuPerso[caracStr] + getRandomInt(6) * (nivCarriere - 2)
          }
        }
      }
    }
  }

  // points de blessure
  changementsAuPerso['pointsDeBlessure'] =
    Math.floor(changementsAuPerso['force'] / 10) +
    2 * Math.floor(changementsAuPerso['endurance'] / 10) +
    Math.floor(changementsAuPerso['force_mentale'] / 10)
  if (perso.coterie === nomCotHalfelins) {
    changementsAuPerso['pointsDeBlessure'] =
      2 * Math.floor(changementsAuPerso['endurance'] / 10) +
      Math.floor(changementsAuPerso['force_mentale'] / 10)
  }
}

/**
 * maj les compétences en fonction de la carrière et des niveaux d'évolution du personnage
 */
export function majCompetences(perso, changementsAuPerso, nivCarriere) {
  // récupérer la carrière du joueur en tant qu'objet à partir de la str
  var carriereObj = getCarriere(perso.carriere)
  // les compétences initiales sont d'abord resettées à 0
  // elles devraient l'être selon la race du personnage mais on verra plus tard (A FAIRE)
  setCompetencesAZero(perso, changementsAuPerso)
  if (carriereObj.evolutions[0].competences !== undefined) {
    // augmentations de compétences de niveau '0' :
    for (let i = 0; i < carriereObj.evolutions[0].competences.length; ++i) {
      var compPropertyName = getCompObjPropertyName(
        carriereObj.evolutions[0].competences[i]
      )
      var valAugmentation = getRandomInt(9) * (nivCarriere + 1)
      if (valAugmentation > 2) {
        changementsAuPerso[compPropertyName] =
          changementsAuPerso[compPropertyName] + valAugmentation
      }
    }
    // augmentations de caracs de niveau '1' :
    if (nivCarriere > 0) {
      for (let i = 0; i < carriereObj.evolutions[1].competences.length; ++i) {
        compPropertyName = getCompObjPropertyName(
          carriereObj.evolutions[1].competences[i]
        )
        valAugmentation = getRandomInt(9) * nivCarriere
        if (valAugmentation > 2) {
          changementsAuPerso[compPropertyName] =
            changementsAuPerso[compPropertyName] + valAugmentation
        }
      }
      // augmentations de caracs de niveau '2' :
      if (nivCarriere > 1) {
        for (let i = 0; i < carriereObj.evolutions[2].competences.length; ++i) {
          compPropertyName = getCompObjPropertyName(
            carriereObj.evolutions[2].competences[i]
          )
          valAugmentation = getRandomInt(9) * (nivCarriere - 1)
          if (valAugmentation > 2) {
            changementsAuPerso[compPropertyName] =
              changementsAuPerso[compPropertyName] + valAugmentation
          }
        }
        // augmentations de caracs de niveau '3' :
        if (nivCarriere > 2) {
          for (
            let i = 0;
            i < carriereObj.evolutions[3].competences.length;
            ++i
          ) {
            compPropertyName = getCompObjPropertyName(
              carriereObj.evolutions[3].competences[i]
            )
            valAugmentation = getRandomInt(9) * (nivCarriere - 2)
            if (valAugmentation > 2) {
              changementsAuPerso[compPropertyName] =
                changementsAuPerso[compPropertyName] + valAugmentation
            }
          }
        }
      }
    }
  }
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
    statut_echelon: '',
    statut_standing: '',
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

    setCaracsInitiales(perso, changementsAuPerso)
    var indexEvolution = getIndexEvolutionObjFromCarriereAndEvolutionStr(
      perso.classe,
      perso.carriere,
      perso.evolution
    )

    // mettre à jour des caracs selon la coterie actuelle
    // --------- age
    var age = getRandomInt(60) + 15 // pour un humain classique
    if (perso.coterie === nomCotNains) {
      age = getRandomInt(600) + 15
    }
    if (perso.coterie === nomCotHalfelins) {
      age = age * 2
    }
    // ----------- classe et carrière aleatoires
    var classeCarriereObj = genCarriere(perso.coterie)
    var classeStr = classeCarriereObj.classeStr
    var carriereStr = classeCarriereObj.carriereStr
    changementsAuPerso['age'] = age
    changementsAuPerso['carriere'] = carriereStr
    changementsAuPerso['classe'] = classeStr
    changementsAuPerso['nom'] = genererNom(perso)
    changementsAuPerso['poids'] = calculerPoids(perso)

    majCaracs(perso, changementsAuPerso, indexEvolution)
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
    var indexEvolution = 0
    if (carriereObj.evolutions !== undefined) {
      if (carriereObj.evolutions.length === 4) {
        var randPercentIndex = getRandomInt(100)
        if (randPercentIndex < 30) indexEvolution = 0
        else if (randPercentIndex < 88) indexEvolution = 1
        else if (randPercentIndex < 98) indexEvolution = 2
        else indexEvolution = 2
      }
      evolutionObj = carriereObj.evolutions[indexEvolution]
    } else {
      evolutionObj.titre = ''
    }

    var changementsAuPerso = {}
    changementsAuPerso['evolution'] = evolutionObj.titre
    if (evolutionObj.statut !== undefined) {
      changementsAuPerso.statut_echelon = evolutionObj.statut.echelon
      changementsAuPerso.statut_standing = evolutionObj.statut.standing
    }
    majCaracs(perso, changementsAuPerso, indexEvolution)
    majCompetences(perso, changementsAuPerso, indexEvolution)
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }, [perso.carriere])

  /**
   * changement des caracs selon le niveau d'évolution de carrière
   */
  useEffect(() => {
    if (perso.evolution === undefined || perso.evolution === '') return

    // l'utiliser pour déterminer l'évolution de carrière
    var evolutionObj = getEvolutionObjFromCarriereAndEvolutionStr(
      perso.classe,
      perso.carriere,
      perso.evolution
    )
    var indexEvolution = getIndexEvolutionObjFromCarriereAndEvolutionStr(
      perso.classe,
      perso.carriere,
      perso.evolution
    )

    var changementsAuPerso = {}
    if (evolutionObj.statut !== undefined) {
      changementsAuPerso.statut_echelon = evolutionObj.statut.echelon
      changementsAuPerso.statut_standing = evolutionObj.statut.standing
    }
    // A FAIRE : les caracs du perso devrait être resettées (en fonction de la coterie) avant la fonction suivante
    // (ou alors il faut séparer "caracs initiales" des caracs améliorées par la carrière)
    majCaracs(perso, changementsAuPerso, indexEvolution)
    majCompetences(perso, changementsAuPerso, indexEvolution)
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }, [perso.evolution])

  return (
    <PersoContexte.Provider value={{ perso, setPerso }}>
      {children}
    </PersoContexte.Provider>
  )
}
