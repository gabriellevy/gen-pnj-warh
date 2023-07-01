
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
  nomCotNordlander,
} from './lstCoteries'

import { getRandomInt } from '../utils/rand'

export const nomRegReikland = 'Reikland'
export const nomRegMiddenheim = 'Middenheim'
export const nomRegMiddenlander = 'Middenland'
export const nomRegNordlander = 'Nordland'
export const nomRegMontagnesGrises = 'Montagnes grises'
export const nomBretonnie = 'Bretonnie'
export const nomKislev = 'Kislev'
export const nomMootland = 'Mootland'

export function majCoterieSelonRegion(regionStr) {
  // changement de la coterie selon la région sélectionnée => entraîne le changement de caracs par propagation
  var nouvCoterie = nomCotEmpire
  var rand = getRandomInt(100)
  if (regionStr === nomRegMiddenheim) {
    if (rand === 0) nouvCoterie = nomCotHautsElfes
    else if (rand === 1) nouvCoterie = nomCotElfesSylvains
    else if (rand <= 2) nouvCoterie = nomCotBretonniens
    //else if (rand <= 6) nouvCoterie = nomCotEstalie
    else if (rand <= 6) nouvCoterie = nomCotHalfelins
    else if (rand <= 8) nouvCoterie = nomCotKislevites
    else if (rand <= 11) nouvCoterie = nomCotNains
    else if (rand <= 95) nouvCoterie = nomCotMiddenheimer
  } else if (regionStr === nomRegMiddenlander) {
    if (rand === 0) nouvCoterie = nomCotHautsElfes
    else if (rand === 1) nouvCoterie = nomCotElfesSylvains
    else if (rand <= 2) nouvCoterie = nomCotBretonniens
    //else if (rand <= 6) nouvCoterie = nomCotEstalie
    else if (rand <= 6) nouvCoterie = nomCotHalfelins
    else if (rand <= 8) nouvCoterie = nomCotKislevites
    else if (rand <= 11) nouvCoterie = nomCotNains
    else if (rand <= 95) nouvCoterie = nomCotMiddenlander
  } else if (regionStr === nomRegNordlander) {
    if (rand === 0) nouvCoterie = nomCotHautsElfes
    else if (rand === 1) nouvCoterie = nomCotElfesSylvains
    else if (rand <= 2) nouvCoterie = nomCotBretonniens
    //else if (rand <= 6) nouvCoterie = nomCotEstalie
    else if (rand <= 6) nouvCoterie = nomCotHalfelins
    else if (rand <= 8) nouvCoterie = nomCotKislevites
    else if (rand <= 11) nouvCoterie = nomCotNains
    else if (rand <= 95) nouvCoterie = nomCotNordlander
  } else if (regionStr === nomRegReikland) {
    if (rand === 0) nouvCoterie = nomCotHautsElfes
    else if (rand === 1) nouvCoterie = nomCotElfesSylvains
    else if (rand <= 4) nouvCoterie = nomCotBretonniens
    //else if (rand <= 6) nouvCoterie = nomCotEstalie
    else if (rand <= 9) nouvCoterie = nomCotHalfelins
    else if (rand <= 10) nouvCoterie = nomCotKislevites
    else if (rand <= 13) nouvCoterie = nomCotNains
    else if (rand <= 14) nouvCoterie = nomCotMiddenheimer
  } else if (regionStr === nomRegMontagnesGrises) {
    if (rand === 0) nouvCoterie = nomCotHautsElfes
    else if (rand === 1) nouvCoterie = nomCotElfesSylvains
    else if (rand <= 6) nouvCoterie = nomCotBretonniens
    //else if (rand <= 7) nouvCoterie = nomCotEstalie
    else if (rand <= 11) nouvCoterie = nomCotHalfelins
    else if (rand <= 12) nouvCoterie = nomCotKislevites
    else if (rand <= 70) nouvCoterie = nomCotNains
  } else if (regionStr === nomBretonnie) {
    if (rand === 0) nouvCoterie = nomCotHautsElfes
    else if (rand <= 5) nouvCoterie = nomCotElfesSylvains
    //else if (rand <= 11) nouvCoterie = nomCotEstalie
    else if (rand <= 12) nouvCoterie = nomCotHalfelins
    else if (rand <= 13) nouvCoterie = nomCotKislevites
    else if (rand <= 17) nouvCoterie = nomCotNains
    else if (rand <= 30) nouvCoterie = nomCotEmpire
    else nouvCoterie = nomCotBretonniens
  } else if (regionStr === nomKislev) {
    if (rand === 0) nouvCoterie = nomCotHautsElfes
    else if (rand <= 1) nouvCoterie = nomCotElfesSylvains
    //else if (rand <= 3) nouvCoterie = nomCotEstalie
    else if (rand <= 4) nouvCoterie = nomCotHalfelins
    else if (rand <= 10) nouvCoterie = nomCotBretonniens
    else if (rand <= 13) nouvCoterie = nomCotNains
    else if (rand <= 26) nouvCoterie = nomCotEmpire
    else nouvCoterie = nomCotKislevites
  } else if (regionStr === nomMootland) {
    if (rand === 0) nouvCoterie = nomCotHautsElfes
    else if (rand <= 1) nouvCoterie = nomCotElfesSylvains
    //else if (rand <= 4) nouvCoterie = nomCotEstalie
    else if (rand <= 9) nouvCoterie = nomCotKislevites
    else if (rand <= 13) nouvCoterie = nomCotBretonniens
    else if (rand <= 19) nouvCoterie = nomCotNains
    else if (rand <= 45) nouvCoterie = nomCotEmpire
    else nouvCoterie = nomCotHalfelins
}
return nouvCoterie
}

export const lstRegions = [
  {
    titre: nomRegReikland,
    description: '',
  },
  {
    titre: nomRegMiddenheim,
    description: '',
  },
  {
    titre: nomRegMiddenlander,
    description: '',
  },
  {
    titre: nomRegNordlander,
    description: '',
  },
  {
    titre: nomRegMontagnesGrises,
    description: '',
  },
  {
    titre: nomBretonnie,
    description: '',
  },
  {
    titre: nomKislev,
    description: '',
  },
  {
    titre: nomMootland,
    description: '',
  },
]
