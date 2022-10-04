import { nomCotHalfelins, nomCotNains } from '../../../donnees/lstCoteries'
import { getRandomInt } from '../../../utils/rand'
import {
  nomAgitateur,
  nomApothicaire,
  nomArtisan,
  nomArtiste,
  nomBailli,
  nomBatelier,
  nomBourgeois,
  nomChasseur,
  nomChasseurDePrimes,
  nomCitadins,
  nomCocher,
  nomColporteur,
  nomConseiller,
  nomContrebandier,
  nomCourtisans,
  nomDebardeur,
  nomDuelliste,
  nomEclaireur,
  nomEmissaire,
  nomEnqueteur,
  nomErudit,
  nomEspion,
  nomFemmeDuFleuve,
  nomGarde,
  nomGladiateur,
  nomGuerriers,
  nomHorsLaLoi,
  nomIngenieur,
  nomIntendant,
  nomItinerants,
  nomJuriste,
  nomLettres,
  nomMarchand,
  nomMarin,
  nomMedecin,
  nomMendiant,
  nomMessager,
  nomMilicien,
  nomMineur,
  nomNaufrageur,
  nomNautonnier,
  nomRanconneur,
  nomRatier,
  nomReceleur,
  nomRiverains,
  nomRoublards,
  nomRuraux,
  nomSaltimbanque,
  nomServiteur,
  nomSoldat,
  nomSpadassin,
  nomTueur,
  nomVillageois,
  nomVoleur,
} from '../../../donnees/lstClasses'

/**
 * génère une carrière aléatoire selon la coterie sélectionnée
 * A FAIRE : classes et carrières aléatoires des autres races (empire, halfelins, elfes...)
 */
export function genCarriere(nomCoterie) {
  var scoreCarriere = getRandomInt(100) + 1 // selon p30 des règels officielles
  var classeStr = ''
  var carriereStr = ''
  if (nomCoterie === nomCotNains) {
    if (scoreCarriere <= 2) {
      classeStr = nomCitadins
      carriereStr = nomAgitateur
    } else if (scoreCarriere <= 8) {
      classeStr = nomCitadins
      carriereStr = nomArtisan
    } else if (scoreCarriere <= 14) {
      classeStr = nomCitadins
      carriereStr = nomBourgeois
    } else if (scoreCarriere <= 16) {
      classeStr = nomCitadins
      carriereStr = nomEnqueteur
    } else if (scoreCarriere <= 20) {
      classeStr = nomCitadins
      carriereStr = nomMarchand
    } else if (scoreCarriere <= 21) {
      classeStr = nomCitadins
      carriereStr = nomMendiant
    } else if (scoreCarriere <= 24) {
      classeStr = nomCitadins
      carriereStr = nomMilicien
    } else if (scoreCarriere <= 25) {
      classeStr = nomCitadins
      carriereStr = nomRatier
    } else if (scoreCarriere <= 26) {
      classeStr = nomCourtisans
      carriereStr = nomArtiste
    } else if (scoreCarriere <= 28) {
      classeStr = nomCourtisans
      carriereStr = nomConseiller
    } else if (scoreCarriere <= 29) {
      classeStr = nomCourtisans
      carriereStr = nomDuelliste
    } else if (scoreCarriere <= 31) {
      classeStr = nomCourtisans
      carriereStr = nomEmissaire
    } else if (scoreCarriere <= 32) {
      classeStr = nomCourtisans
      carriereStr = nomEspion
    } else if (scoreCarriere <= 34) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
    } else if (scoreCarriere <= 35) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
    } else if (scoreCarriere <= 36) {
      classeStr = nomCourtisans
      carriereStr = nomServiteur
    } else if (scoreCarriere <= 39) {
      classeStr = nomGuerriers
      carriereStr = nomGarde
    } else if (scoreCarriere <= 42) {
      classeStr = nomGuerriers
      carriereStr = nomGladiateur
    } else if (scoreCarriere <= 45) {
      classeStr = nomGuerriers
      carriereStr = nomSoldat
    } else if (scoreCarriere <= 48) {
      classeStr = nomGuerriers
      carriereStr = nomSpadassin
    } else if (scoreCarriere <= 52) {
      classeStr = nomGuerriers
      carriereStr = nomTueur
    } else if (scoreCarriere <= 56) {
      classeStr = nomItinerants
      carriereStr = nomChasseurDePrimes
    } else if (scoreCarriere <= 57) {
      classeStr = nomItinerants
      carriereStr = nomCocher
    } else if (scoreCarriere <= 59) {
      classeStr = nomItinerants
      carriereStr = nomColporteur
    } else if (scoreCarriere <= 61) {
      classeStr = nomItinerants
      carriereStr = nomMessager
    } else if (scoreCarriere <= 63) {
      classeStr = nomItinerants
      carriereStr = nomSaltimbanque
    } else if (scoreCarriere <= 64) {
      classeStr = nomLettres
      carriereStr = nomApothicaire
    } else if (scoreCarriere <= 66) {
      classeStr = nomLettres
      carriereStr = nomErudit
    } else if (scoreCarriere <= 69) {
      classeStr = nomLettres
      carriereStr = nomIngenieur
    } else if (scoreCarriere <= 71) {
      classeStr = nomLettres
      carriereStr = nomJuriste
    } else if (scoreCarriere <= 72) {
      classeStr = nomLettres
      carriereStr = nomMedecin
    } else if (scoreCarriere <= 74) {
      classeStr = nomRiverains
      carriereStr = nomBatelier
    } else if (scoreCarriere <= 76) {
      classeStr = nomRiverains
      carriereStr = nomContrebandier
    } else if (scoreCarriere <= 78) {
      classeStr = nomRiverains
      carriereStr = nomDebardeur
    } else if (scoreCarriere <= 80) {
      classeStr = nomRiverains
      carriereStr = nomFemmeDuFleuve
    } else if (scoreCarriere <= 81) {
      classeStr = nomRiverains
      carriereStr = nomMarin
    } else if (scoreCarriere <= 82) {
      classeStr = nomRiverains
      carriereStr = nomNaufrageur
    } else if (scoreCarriere <= 83) {
      classeStr = nomRiverains
      carriereStr = nomNautonnier
    } else if (scoreCarriere <= 86) {
      classeStr = nomRoublards
      carriereStr = nomHorsLaLoi
    } else if (scoreCarriere <= 87) {
      classeStr = nomRoublards
      carriereStr = nomRanconneur
    } else if (scoreCarriere <= 88) {
      classeStr = nomRoublards
      carriereStr = nomReceleur
    } else if (scoreCarriere <= 89) {
      classeStr = nomRoublards
      carriereStr = nomVoleur
    } else if (scoreCarriere <= 91) {
      classeStr = nomRuraux
      carriereStr = nomBailli
    } else if (scoreCarriere <= 93) {
      classeStr = nomRuraux
      carriereStr = nomChasseur
    } else if (scoreCarriere <= 94) {
      classeStr = nomRuraux
      carriereStr = nomEclaireur
    } else if (scoreCarriere <= 99) {
      classeStr = nomRuraux
      carriereStr = nomMineur
    } else if (scoreCarriere <= 100) {
      classeStr = nomRuraux
      carriereStr = nomVillageois
    }
  } else if (nomCoterie === nomCotHalfelins) {
    if (scoreCarriere <= 2) {
      classeStr = nomCitadins
      carriereStr = nomAgitateur
    } else if (scoreCarriere <= 8) {
      classeStr = nomCitadins
      carriereStr = nomArtisan
    } else if (scoreCarriere <= 14) {
      classeStr = nomCitadins
      carriereStr = nomBourgeois
    } else if (scoreCarriere <= 16) {
      classeStr = nomCitadins
      carriereStr = nomEnqueteur
    } else if (scoreCarriere <= 20) {
      classeStr = nomCitadins
      carriereStr = nomMarchand
    } else if (scoreCarriere <= 21) {
      classeStr = nomCitadins
      carriereStr = nomMendiant
    } else if (scoreCarriere <= 24) {
      classeStr = nomCitadins
      carriereStr = nomMilicien
    } else if (scoreCarriere <= 25) {
      classeStr = nomCitadins
      carriereStr = nomRatier
    } else if (scoreCarriere <= 26) {
      classeStr = nomCourtisans
      carriereStr = nomArtiste
    } else if (scoreCarriere <= 28) {
      classeStr = nomCourtisans
      carriereStr = nomConseiller
    } else if (scoreCarriere <= 29) {
      classeStr = nomCourtisans
      carriereStr = nomDuelliste
    } else if (scoreCarriere <= 31) {
      classeStr = nomCourtisans
      carriereStr = nomEmissaire
    } else if (scoreCarriere <= 32) {
      classeStr = nomCourtisans
      carriereStr = nomEspion
    } else if (scoreCarriere <= 34) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
    } else if (scoreCarriere <= 35) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
    } else if (scoreCarriere <= 36) {
      classeStr = nomCourtisans
      carriereStr = nomServiteur
    } else if (scoreCarriere <= 39) {
      classeStr = nomGuerriers
      carriereStr = nomGarde
    } else if (scoreCarriere <= 42) {
      classeStr = nomGuerriers
      carriereStr = nomGladiateur
    } else if (scoreCarriere <= 45) {
      classeStr = nomGuerriers
      carriereStr = nomSoldat
    } else if (scoreCarriere <= 48) {
      classeStr = nomGuerriers
      carriereStr = nomSpadassin
    } else if (scoreCarriere <= 52) {
      classeStr = nomGuerriers
      carriereStr = nomTueur
    } else if (scoreCarriere <= 56) {
      classeStr = nomItinerants
      carriereStr = nomChasseurDePrimes
    } else if (scoreCarriere <= 57) {
      classeStr = nomItinerants
      carriereStr = nomCocher
    } else if (scoreCarriere <= 59) {
      classeStr = nomItinerants
      carriereStr = nomColporteur
    } else if (scoreCarriere <= 61) {
      classeStr = nomItinerants
      carriereStr = nomMessager
    } else if (scoreCarriere <= 63) {
      classeStr = nomItinerants
      carriereStr = nomSaltimbanque
    } else if (scoreCarriere <= 64) {
      classeStr = nomLettres
      carriereStr = nomApothicaire
    } else if (scoreCarriere <= 66) {
      classeStr = nomLettres
      carriereStr = nomErudit
    } else if (scoreCarriere <= 69) {
      classeStr = nomLettres
      carriereStr = nomIngenieur
    } else if (scoreCarriere <= 71) {
      classeStr = nomLettres
      carriereStr = nomJuriste
    } else if (scoreCarriere <= 72) {
      classeStr = nomLettres
      carriereStr = nomMedecin
    } else if (scoreCarriere <= 74) {
      classeStr = nomRiverains
      carriereStr = nomBatelier
    } else if (scoreCarriere <= 76) {
      classeStr = nomRiverains
      carriereStr = nomContrebandier
    } else if (scoreCarriere <= 78) {
      classeStr = nomRiverains
      carriereStr = nomDebardeur
    } else if (scoreCarriere <= 80) {
      classeStr = nomRiverains
      carriereStr = nomFemmeDuFleuve
    } else if (scoreCarriere <= 81) {
      classeStr = nomRiverains
      carriereStr = nomMarin
    } else if (scoreCarriere <= 82) {
      classeStr = nomRiverains
      carriereStr = nomNaufrageur
    } else if (scoreCarriere <= 83) {
      classeStr = nomRiverains
      carriereStr = nomNautonnier
    } else if (scoreCarriere <= 86) {
      classeStr = nomRoublards
      carriereStr = nomHorsLaLoi
    } else if (scoreCarriere <= 87) {
      classeStr = nomRoublards
      carriereStr = nomRanconneur
    } else if (scoreCarriere <= 88) {
      classeStr = nomRoublards
      carriereStr = nomReceleur
    } else if (scoreCarriere <= 89) {
      classeStr = nomRoublards
      carriereStr = nomVoleur
    } else if (scoreCarriere <= 91) {
      classeStr = nomRuraux
      carriereStr = nomBailli
    } else if (scoreCarriere <= 93) {
      classeStr = nomRuraux
      carriereStr = nomChasseur
    } else if (scoreCarriere <= 94) {
      classeStr = nomRuraux
      carriereStr = nomEclaireur
    } else if (scoreCarriere <= 99) {
      classeStr = nomRuraux
      carriereStr = nomMineur
    } else if (scoreCarriere <= 100) {
      classeStr = nomRuraux
      carriereStr = nomVillageois
    }
  }
  var classeCarriereObj = {}
  classeCarriereObj.classeStr = classeStr
  classeCarriereObj.carriereStr = carriereStr
  return classeCarriereObj
}
