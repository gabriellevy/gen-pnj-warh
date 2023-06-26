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
} from '../../../donnees/lstCoteries'
import { getRandomInt } from '../../../utils/rand'
import {
  nomAgitateur,
  nomApothicaire,
  nomArtisan,
  nomArtiste,
  nomBailli,
  nomBatelier,
  nomBourgeois,
  nomCavalier,
  nomCharlatan,
  nomChasseur,
  nomChasseurDePrimes,
  nomChevalier,
  nomChevaucheurBaireau,
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
  nomEntremetteur,
  nomErudit,
  nomEspion,
  nomFemmeDuFleuve,
  nomFlagellant,
  nomFrereLoup,
  nomGarde,
  nomGardechamps,
  nomGladiateur,
  nomGuerriers,
  nomHerboriste,
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
  nomMystique,
  nomNaufrageur,
  nomNautonnier,
  nomNoble,
  nomNonne,
  nomPatrouilleurFluvial,
  nomPatrouilleurKarak,
  nomPatrouilleurRoutier,
  nomPilleurDeTombes,
  nomPretre,
  nomPretreGuerrier,
  nomRanconneur,
  nomRatier,
  nomReceleur,
  nomRepurgateur,
  nomRiverains,
  nomRoublards,
  nomRuraux,
  nomSaltimbanque,
  nomServiteur,
  nomSoldat,
  nomSorcier,
  nomSorcierDeVillage,
  nomSorcierDissident,
  nomSpadassin,
  nomTueur,
  nomVillageois,
  nomVoleur,
} from '../../../donnees/lstClasses'

/**
 * génère une carrière aléatoire selon la coterie sélectionnée
 */
export function genCarriere(nomCoterie) {
  var scoreCarriere = getRandomInt(100) + 1 // selon p30 des règels officielles
  var classeStr = ''
  var carriereStr = ''
  if (nomCoterie === nomCotNains) {
    return genCarriereNain(scoreCarriere) //---------------------------------------------- NAINS
  } else if (
    // ------------Middenheimer -----------------
    nomCoterie === nomCotMiddenlander
  ) {
    // ---------- lettrés ---------//
    if (scoreCarriere <= 1) {
      classeStr = nomLettres
      carriereStr = nomApothicaire
    } else if (scoreCarriere <= 2) {
      classeStr = nomLettres
      carriereStr = nomIngenieur
    } else if (scoreCarriere <= 3) {
      classeStr = nomLettres
      carriereStr = nomJuriste
    } else if (scoreCarriere <= 5) {
      classeStr = nomLettres
      carriereStr = nomNonne
    } else if (scoreCarriere <= 6) {
      classeStr = nomLettres
      carriereStr = nomMedecin
    } else if (scoreCarriere <= 11) {
      classeStr = nomLettres
      carriereStr = nomPretre
    } else if (scoreCarriere <= 13) {
      classeStr = nomLettres
      carriereStr = nomErudit
    } else if (scoreCarriere <= 14) {
      classeStr = nomLettres
      carriereStr = nomSorcier
      // ---------- citadins ---------//
    } else if (scoreCarriere <= 15) {
      classeStr = nomCitadins
      carriereStr = nomAgitateur
    } else if (scoreCarriere <= 17) {
      classeStr = nomCitadins
      carriereStr = nomArtisan
    } else if (scoreCarriere <= 19) {
      classeStr = nomCitadins
      carriereStr = nomMendiant
    } else if (scoreCarriere <= 20) {
      classeStr = nomCitadins
      carriereStr = nomEnqueteur
    } else if (scoreCarriere <= 21) {
      classeStr = nomCitadins
      carriereStr = nomMarchand
    } else if (scoreCarriere <= 23) {
      classeStr = nomCitadins
      carriereStr = nomRatier
    } else if (scoreCarriere <= 26) {
      classeStr = nomCitadins
      carriereStr = nomBourgeois
    } else if (scoreCarriere <= 27) {
      classeStr = nomCitadins
      carriereStr = nomMilicien
      // ---------- courtisans ---------//
    } else if (scoreCarriere <= 28) {
      classeStr = nomCourtisans
      carriereStr = nomConseiller
    } else if (scoreCarriere <= 29) {
      classeStr = nomCourtisans
      carriereStr = nomArtiste
    } else if (scoreCarriere <= 30) {
      classeStr = nomCourtisans
      carriereStr = nomDuelliste
    } else if (scoreCarriere <= 31) {
      classeStr = nomCourtisans
      carriereStr = nomEmissaire
    } else if (scoreCarriere <= 32) {
      classeStr = nomCourtisans
      carriereStr = nomNoble
    } else if (scoreCarriere <= 35) {
      classeStr = nomCourtisans
      carriereStr = nomServiteur
    } else if (scoreCarriere <= 36) {
      classeStr = nomCourtisans
      carriereStr = nomEspion
    } else if (scoreCarriere <= 37) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
      // ---------- ruraux ---------//
    } else if (scoreCarriere <= 38) {
      classeStr = nomRuraux
      carriereStr = nomBailli
    } else if (scoreCarriere <= 39) {
      classeStr = nomRuraux
      carriereStr = nomSorcierDeVillage
    } else if (scoreCarriere <= 40) {
      classeStr = nomRuraux
      carriereStr = nomHerboriste
    } else if (scoreCarriere <= 42) {
      classeStr = nomRuraux
      carriereStr = nomChasseur
    } else if (scoreCarriere <= 43) {
      classeStr = nomRuraux
      carriereStr = nomMineur
    } else if (scoreCarriere <= 44) {
      classeStr = nomRuraux
      carriereStr = nomMystique
    } else if (scoreCarriere <= 45) {
      classeStr = nomRuraux
      carriereStr = nomEclaireur
    } else if (scoreCarriere <= 50) {
      classeStr = nomRuraux
      carriereStr = nomVillageois
      // ---------- itinérants ---------//
    } else if (scoreCarriere <= 51) {
      classeStr = nomItinerants
      carriereStr = nomChasseurDePrimes
    } else if (scoreCarriere <= 52) {
      classeStr = nomItinerants
      carriereStr = nomCocher
    } else if (scoreCarriere <= 54) {
      classeStr = nomItinerants
      carriereStr = nomSaltimbanque
    } else if (scoreCarriere <= 55) {
      classeStr = nomItinerants
      carriereStr = nomMessager
    } else if (scoreCarriere <= 56) {
      classeStr = nomItinerants
      carriereStr = nomColporteur
    } else if (scoreCarriere <= 57) {
      classeStr = nomItinerants
      carriereStr = nomPatrouilleurRoutier
    } else if (scoreCarriere <= 58) {
      classeStr = nomItinerants
      carriereStr = nomRepurgateur
    } else if (scoreCarriere <= 60) {
      classeStr = nomItinerants
      carriereStr = nomFrereLoup
      // ---------- riverains ---------//
    } else if (scoreCarriere <= 62) {
      classeStr = nomRiverains
      carriereStr = nomBatelier
    } else if (scoreCarriere <= 63) {
      classeStr = nomRiverains
      carriereStr = nomNautonnier
    } else if (scoreCarriere <= 65) {
      classeStr = nomRiverains
      carriereStr = nomPatrouilleurFluvial
    } else if (scoreCarriere <= 68) {
      classeStr = nomRiverains
      carriereStr = nomFemmeDuFleuve
    } else if (scoreCarriere <= 70) {
      classeStr = nomRiverains
      carriereStr = nomMarin
    } else if (scoreCarriere <= 71) {
      classeStr = nomRiverains
      carriereStr = nomContrebandier
    } else if (scoreCarriere <= 73) {
      classeStr = nomRiverains
      carriereStr = nomDebardeur
    } else if (scoreCarriere <= 74) {
      classeStr = nomRiverains
      carriereStr = nomNaufrageur
      // ---------- roublards ---------//
    } else if (scoreCarriere <= 76) {
      classeStr = nomRoublards
      carriereStr = nomEntremetteur
    } else if (scoreCarriere <= 77) {
      classeStr = nomRoublards
      carriereStr = nomCharlatan
    } else if (scoreCarriere <= 78) {
      classeStr = nomRoublards
      carriereStr = nomReceleur
    } else if (scoreCarriere <= 79) {
      classeStr = nomRoublards
      carriereStr = nomPilleurDeTombes
    } else if (scoreCarriere <= 83) {
      classeStr = nomRoublards
      carriereStr = nomHorsLaLoi
    } else if (scoreCarriere <= 84) {
      classeStr = nomRoublards
      carriereStr = nomRanconneur
    } else if (scoreCarriere <= 87) {
      classeStr = nomRoublards
      carriereStr = nomVoleur
    } else if (scoreCarriere <= 88) {
      classeStr = nomRoublards
      carriereStr = nomSorcierDissident
      // ---------- guerriers ---------//
    } else if (scoreCarriere <= 90) {
      classeStr = nomGuerriers
      carriereStr = nomCavalier
    } else if (scoreCarriere <= 92) {
      classeStr = nomGuerriers
      carriereStr = nomGarde
    } else if (scoreCarriere <= 93) {
      classeStr = nomGuerriers
      carriereStr = nomChevalier
    } else if (scoreCarriere <= 94) {
      classeStr = nomGuerriers
      carriereStr = nomGladiateur
    } else if (scoreCarriere <= 95) {
      classeStr = nomGuerriers
      carriereStr = nomSpadassin
    } else if (scoreCarriere <= 99) {
      classeStr = nomGuerriers
      carriereStr = nomSoldat
    } else if (scoreCarriere <= 100) {
      classeStr = nomGuerriers
      carriereStr = nomPretreGuerrier
    }
  } else if (
    // ------------Nordlander -----------------
    nomCoterie === nomCotNordlander
  ) {
    // ---------- lettrés ---------//
    if (scoreCarriere <= 1) {
      classeStr = nomLettres
      carriereStr = nomApothicaire
    } else if (scoreCarriere <= 2) {
      classeStr = nomLettres
      carriereStr = nomIngenieur
    } else if (scoreCarriere <= 3) {
      classeStr = nomLettres
      carriereStr = nomJuriste
    } else if (scoreCarriere <= 5) {
      classeStr = nomLettres
      carriereStr = nomNonne
    } else if (scoreCarriere <= 6) {
      classeStr = nomLettres
      carriereStr = nomMedecin
    } else if (scoreCarriere <= 10) {
      classeStr = nomLettres
      carriereStr = nomPretre
    } else if (scoreCarriere <= 12) {
      classeStr = nomLettres
      carriereStr = nomErudit
    } else if (scoreCarriere <= 13) {
      classeStr = nomLettres
      carriereStr = nomSorcier
      // ---------- citadins ---------//
    } else if (scoreCarriere <= 14) {
      classeStr = nomCitadins
      carriereStr = nomAgitateur
    } else if (scoreCarriere <= 16) {
      classeStr = nomCitadins
      carriereStr = nomArtisan
    } else if (scoreCarriere <= 18) {
      classeStr = nomCitadins
      carriereStr = nomMendiant
    } else if (scoreCarriere <= 19) {
      classeStr = nomCitadins
      carriereStr = nomEnqueteur
    } else if (scoreCarriere <= 20) {
      classeStr = nomCitadins
      carriereStr = nomMarchand
    } else if (scoreCarriere <= 22) {
      classeStr = nomCitadins
      carriereStr = nomRatier
    } else if (scoreCarriere <= 24) {
      classeStr = nomCitadins
      carriereStr = nomBourgeois
    } else if (scoreCarriere <= 25) {
      classeStr = nomCitadins
      carriereStr = nomMilicien
      // ---------- courtisans ---------//
    } else if (scoreCarriere <= 26) {
      classeStr = nomCourtisans
      carriereStr = nomConseiller
    } else if (scoreCarriere <= 27) {
      classeStr = nomCourtisans
      carriereStr = nomArtiste
    } else if (scoreCarriere <= 28) {
      classeStr = nomCourtisans
      carriereStr = nomDuelliste
    } else if (scoreCarriere <= 29) {
      classeStr = nomCourtisans
      carriereStr = nomEmissaire
    } else if (scoreCarriere <= 30) {
      classeStr = nomCourtisans
      carriereStr = nomNoble
    } else if (scoreCarriere <= 33) {
      classeStr = nomCourtisans
      carriereStr = nomServiteur
    } else if (scoreCarriere <= 34) {
      classeStr = nomCourtisans
      carriereStr = nomEspion
    } else if (scoreCarriere <= 35) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
      // ---------- ruraux ---------//
    } else if (scoreCarriere <= 36) {
      classeStr = nomRuraux
      carriereStr = nomBailli
    } else if (scoreCarriere <= 37) {
      classeStr = nomRuraux
      carriereStr = nomSorcierDeVillage
    } else if (scoreCarriere <= 38) {
      classeStr = nomRuraux
      carriereStr = nomHerboriste
    } else if (scoreCarriere <= 40) {
      classeStr = nomRuraux
      carriereStr = nomChasseur
    } else if (scoreCarriere <= 41) {
      classeStr = nomRuraux
      carriereStr = nomMineur
    } else if (scoreCarriere <= 42) {
      classeStr = nomRuraux
      carriereStr = nomMystique
    } else if (scoreCarriere <= 43) {
      classeStr = nomRuraux
      carriereStr = nomEclaireur
    } else if (scoreCarriere <= 48) {
      classeStr = nomRuraux
      carriereStr = nomVillageois
      // ---------- itinérants ---------//
    } else if (scoreCarriere <= 49) {
      classeStr = nomItinerants
      carriereStr = nomChasseurDePrimes
    } else if (scoreCarriere <= 50) {
      classeStr = nomItinerants
      carriereStr = nomCocher
    } else if (scoreCarriere <= 52) {
      classeStr = nomItinerants
      carriereStr = nomSaltimbanque
    } else if (scoreCarriere <= 53) {
      classeStr = nomItinerants
      carriereStr = nomMessager
    } else if (scoreCarriere <= 54) {
      classeStr = nomItinerants
      carriereStr = nomColporteur
    } else if (scoreCarriere <= 55) {
      classeStr = nomItinerants
      carriereStr = nomPatrouilleurRoutier
    } else if (scoreCarriere <= 56) {
      classeStr = nomItinerants
      carriereStr = nomRepurgateur
    } else if (scoreCarriere <= 58) {
      classeStr = nomItinerants
      carriereStr = nomFrereLoup
      // ---------- riverains ---------//
    } else if (scoreCarriere <= 60) {
      classeStr = nomRiverains
      carriereStr = nomBatelier
    } else if (scoreCarriere <= 61) {
      classeStr = nomRiverains
      carriereStr = nomNautonnier
    } else if (scoreCarriere <= 63) {
      classeStr = nomRiverains
      carriereStr = nomPatrouilleurFluvial
    } else if (scoreCarriere <= 66) {
      classeStr = nomRiverains
      carriereStr = nomFemmeDuFleuve
    } else if (scoreCarriere <= 70) {
      classeStr = nomRiverains
      carriereStr = nomMarin
    } else if (scoreCarriere <= 72) {
      classeStr = nomRiverains
      carriereStr = nomContrebandier
    } else if (scoreCarriere <= 74) {
      classeStr = nomRiverains
      carriereStr = nomDebardeur
    } else if (scoreCarriere <= 75) {
      classeStr = nomRiverains
      carriereStr = nomNaufrageur
      // ---------- roublards ---------//
    } else if (scoreCarriere <= 77) {
      classeStr = nomRoublards
      carriereStr = nomEntremetteur
    } else if (scoreCarriere <= 78) {
      classeStr = nomRoublards
      carriereStr = nomCharlatan
    } else if (scoreCarriere <= 79) {
      classeStr = nomRoublards
      carriereStr = nomReceleur
    } else if (scoreCarriere <= 80) {
      classeStr = nomRoublards
      carriereStr = nomPilleurDeTombes
    } else if (scoreCarriere <= 84) {
      classeStr = nomRoublards
      carriereStr = nomHorsLaLoi
    } else if (scoreCarriere <= 85) {
      classeStr = nomRoublards
      carriereStr = nomRanconneur
    } else if (scoreCarriere <= 87) {
      classeStr = nomRoublards
      carriereStr = nomVoleur
    } else if (scoreCarriere <= 88) {
      classeStr = nomRoublards
      carriereStr = nomSorcierDissident
      // ---------- guerriers ---------//
    } else if (scoreCarriere <= 90) {
      classeStr = nomGuerriers
      carriereStr = nomCavalier
    } else if (scoreCarriere <= 92) {
      classeStr = nomGuerriers
      carriereStr = nomGarde
    } else if (scoreCarriere <= 93) {
      classeStr = nomGuerriers
      carriereStr = nomChevalier
    } else if (scoreCarriere <= 94) {
      classeStr = nomGuerriers
      carriereStr = nomGladiateur
    } else if (scoreCarriere <= 95) {
      classeStr = nomGuerriers
      carriereStr = nomSpadassin
    } else if (scoreCarriere <= 99) {
      classeStr = nomGuerriers
      carriereStr = nomSoldat
    } else if (scoreCarriere <= 100) {
      classeStr = nomGuerriers
      carriereStr = nomPretreGuerrier
    }
  } else if (
    // ------------Middenheimer -----------------
    nomCoterie === nomCotMiddenheimer
  ) {
    // ---------- lettrés ---------//
    if (scoreCarriere <= 1) {
      classeStr = nomLettres
      carriereStr = nomApothicaire
    } else if (scoreCarriere <= 2) {
      classeStr = nomLettres
      carriereStr = nomIngenieur
    } else if (scoreCarriere <= 3) {
      classeStr = nomLettres
      carriereStr = nomJuriste
    } else if (scoreCarriere <= 5) {
      classeStr = nomLettres
      carriereStr = nomNonne
    } else if (scoreCarriere <= 6) {
      classeStr = nomLettres
      carriereStr = nomMedecin
    } else if (scoreCarriere <= 11) {
      classeStr = nomLettres
      carriereStr = nomPretre
    } else if (scoreCarriere <= 13) {
      classeStr = nomLettres
      carriereStr = nomErudit
    } else if (scoreCarriere <= 14) {
      classeStr = nomLettres
      carriereStr = nomSorcier
      // ---------- citadins ---------//
    } else if (scoreCarriere <= 15) {
      classeStr = nomCitadins
      carriereStr = nomAgitateur
    } else if (scoreCarriere <= 18) {
      classeStr = nomCitadins
      carriereStr = nomArtisan
    } else if (scoreCarriere <= 21) {
      classeStr = nomCitadins
      carriereStr = nomMendiant
    } else if (scoreCarriere <= 22) {
      classeStr = nomCitadins
      carriereStr = nomEnqueteur
    } else if (scoreCarriere <= 24) {
      classeStr = nomCitadins
      carriereStr = nomMarchand
    } else if (scoreCarriere <= 26) {
      classeStr = nomCitadins
      carriereStr = nomRatier
    } else if (scoreCarriere <= 28) {
      classeStr = nomCitadins
      carriereStr = nomBourgeois
    } else if (scoreCarriere <= 31) {
      classeStr = nomCitadins
      carriereStr = nomMilicien
      // ---------- courtisans ---------//
    } else if (scoreCarriere <= 32) {
      classeStr = nomCourtisans
      carriereStr = nomConseiller
    } else if (scoreCarriere <= 33) {
      classeStr = nomCourtisans
      carriereStr = nomArtiste
    } else if (scoreCarriere <= 34) {
      classeStr = nomCourtisans
      carriereStr = nomDuelliste
    } else if (scoreCarriere <= 35) {
      classeStr = nomCourtisans
      carriereStr = nomEmissaire
    } else if (scoreCarriere <= 36) {
      classeStr = nomCourtisans
      carriereStr = nomNoble
    } else if (scoreCarriere <= 39) {
      classeStr = nomCourtisans
      carriereStr = nomServiteur
    } else if (scoreCarriere <= 40) {
      classeStr = nomCourtisans
      carriereStr = nomEspion
    } else if (scoreCarriere <= 41) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
      // ---------- ruraux ---------//
    } else if (scoreCarriere <= 42) {
      classeStr = nomRuraux
      carriereStr = nomBailli
    } else if (scoreCarriere <= 43) {
      classeStr = nomRuraux
      carriereStr = nomSorcierDeVillage
    } else if (scoreCarriere <= 44) {
      classeStr = nomRuraux
      carriereStr = nomHerboriste
    } else if (scoreCarriere <= 45) {
      classeStr = nomRuraux
      carriereStr = nomChasseur
    } else if (scoreCarriere <= 47) {
      classeStr = nomRuraux
      carriereStr = nomMineur
    } else if (scoreCarriere <= 48) {
      classeStr = nomRuraux
      carriereStr = nomMystique
    } else if (scoreCarriere <= 49) {
      classeStr = nomRuraux
      carriereStr = nomEclaireur
    } else if (scoreCarriere <= 54) {
      classeStr = nomRuraux
      carriereStr = nomVillageois
      // ---------- itinérants ---------//
    } else if (scoreCarriere <= 55) {
      classeStr = nomItinerants
      carriereStr = nomChasseurDePrimes
    } else if (scoreCarriere <= 57) {
      classeStr = nomItinerants
      carriereStr = nomCocher
    } else if (scoreCarriere <= 60) {
      classeStr = nomItinerants
      carriereStr = nomSaltimbanque
    } else if (scoreCarriere <= 61) {
      classeStr = nomItinerants
      carriereStr = nomMessager
    } else if (scoreCarriere <= 63) {
      classeStr = nomItinerants
      carriereStr = nomColporteur
    } else if (scoreCarriere <= 64) {
      classeStr = nomItinerants
      carriereStr = nomPatrouilleurRoutier
    } else if (scoreCarriere <= 65) {
      classeStr = nomItinerants
      carriereStr = nomRepurgateur
    } else if (scoreCarriere <= 68) {
      classeStr = nomItinerants
      carriereStr = nomFrereLoup
      // ---------- riverains ---------//
      /*} else if (scoreCarriere <= 61) {
      classeStr = nomRiverains
      carriereStr = nomBatelier*/
    } else if (scoreCarriere <= 69) {
      classeStr = nomRiverains
      carriereStr = nomContrebandier
    } else if (scoreCarriere <= 71) {
      classeStr = nomRiverains
      carriereStr = nomDebardeur
      /*} else if (scoreCarriere <= 67) {
      classeStr = nomRiverains
      carriereStr = nomFemmeDuFleuve
    } else if (scoreCarriere <= 69) {
      classeStr = nomRiverains
      carriereStr = nomMarin
    } else if (scoreCarriere <= 70) {
      classeStr = nomRiverains
      carriereStr = nomNaufrageur
    } else if (scoreCarriere <= 71) {
      classeStr = nomRiverains
      carriereStr = nomNautonnier
    } else if (scoreCarriere <= 73) {
      classeStr = nomRiverains
      carriereStr = nomPatrouilleurFluvial*/
      // ---------- roublards ---------//
    } else if (scoreCarriere <= 73) {
      classeStr = nomRoublards
      carriereStr = nomEntremetteur
    } else if (scoreCarriere <= 74) {
      classeStr = nomRoublards
      carriereStr = nomCharlatan
    } else if (scoreCarriere <= 76) {
      classeStr = nomRoublards
      carriereStr = nomReceleur
    } else if (scoreCarriere <= 77) {
      classeStr = nomRoublards
      carriereStr = nomPilleurDeTombes
    } else if (scoreCarriere <= 79) {
      classeStr = nomRoublards
      carriereStr = nomHorsLaLoi
    } else if (scoreCarriere <= 82) {
      classeStr = nomRoublards
      carriereStr = nomRanconneur
    } else if (scoreCarriere <= 86) {
      classeStr = nomRoublards
      carriereStr = nomVoleur
    } else if (scoreCarriere <= 87) {
      classeStr = nomRoublards
      carriereStr = nomSorcierDissident
      // ---------- guerriers ---------//
    } else if (scoreCarriere <= 89) {
      classeStr = nomGuerriers
      carriereStr = nomCavalier
    } else if (scoreCarriere <= 92) {
      classeStr = nomGuerriers
      carriereStr = nomGarde
    } else if (scoreCarriere <= 93) {
      classeStr = nomGuerriers
      carriereStr = nomChevalier
    } else if (scoreCarriere <= 94) {
      classeStr = nomGuerriers
      carriereStr = nomGladiateur
    } else if (scoreCarriere <= 95) {
      classeStr = nomGuerriers
      carriereStr = nomSpadassin
    } else if (scoreCarriere <= 99) {
      classeStr = nomGuerriers
      carriereStr = nomSoldat
    } else if (scoreCarriere <= 100) {
      classeStr = nomGuerriers
      carriereStr = nomPretreGuerrier
    }
  } else if (
    // ------------HUMAINS -----------------
    nomCoterie === nomCotEmpire ||
    nomCoterie === nomCotKislevites ||
    nomCoterie === nomCotEstalie
  ) {
    // ---------- citadins ---------//
    if (scoreCarriere <= 1) {
      classeStr = nomCitadins
      carriereStr = nomAgitateur
    } else if (scoreCarriere <= 3) {
      classeStr = nomCitadins
      carriereStr = nomArtisan
    } else if (scoreCarriere <= 6) {
      classeStr = nomCitadins
      carriereStr = nomBourgeois
    } else if (scoreCarriere <= 7) {
      classeStr = nomCitadins
      carriereStr = nomEnqueteur
    } else if (scoreCarriere <= 8) {
      classeStr = nomCitadins
      carriereStr = nomMarchand
    } else if (scoreCarriere <= 10) {
      classeStr = nomCitadins
      carriereStr = nomMendiant
    } else if (scoreCarriere <= 11) {
      classeStr = nomCitadins
      carriereStr = nomMilicien
    } else if (scoreCarriere <= 13) {
      classeStr = nomCitadins
      carriereStr = nomRatier
      // ---------- courtisans ---------//
    } else if (scoreCarriere <= 14) {
      classeStr = nomCourtisans
      carriereStr = nomArtiste
    } else if (scoreCarriere <= 15) {
      classeStr = nomCourtisans
      carriereStr = nomConseiller
    } else if (scoreCarriere <= 16) {
      classeStr = nomCourtisans
      carriereStr = nomDuelliste
    } else if (scoreCarriere <= 17) {
      classeStr = nomCourtisans
      carriereStr = nomEmissaire
    } else if (scoreCarriere <= 18) {
      classeStr = nomCourtisans
      carriereStr = nomEspion
    } else if (scoreCarriere <= 19) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
    } else if (scoreCarriere <= 20) {
      classeStr = nomCourtisans
      carriereStr = nomNoble
    } else if (scoreCarriere <= 23) {
      classeStr = nomCourtisans
      carriereStr = nomServiteur
      // ---------- guerriers ---------//
    } else if (scoreCarriere <= 25) {
      classeStr = nomGuerriers
      carriereStr = nomCavalier
    } else if (scoreCarriere <= 26) {
      classeStr = nomGuerriers
      carriereStr = nomChevalier
    } else if (scoreCarriere <= 28) {
      classeStr = nomGuerriers
      carriereStr = nomGarde
    } else if (scoreCarriere <= 29) {
      classeStr = nomGuerriers
      carriereStr = nomGladiateur
    } else if (scoreCarriere <= 30) {
      classeStr = nomGuerriers
      carriereStr = nomPretreGuerrier
    } else if (scoreCarriere <= 34) {
      classeStr = nomGuerriers
      carriereStr = nomSoldat
    } else if (scoreCarriere <= 35) {
      classeStr = nomGuerriers
      carriereStr = nomSpadassin
      // ---------- itinérants ---------//
    } else if (scoreCarriere <= 36) {
      classeStr = nomItinerants
      carriereStr = nomChasseurDePrimes
    } else if (scoreCarriere <= 37) {
      classeStr = nomItinerants
      carriereStr = nomCocher
    } else if (scoreCarriere <= 38) {
      classeStr = nomItinerants
      carriereStr = nomColporteur
    } else if (scoreCarriere <= 40) {
      classeStr = nomItinerants
      carriereStr = nomFlagellant
    } else if (scoreCarriere <= 41) {
      classeStr = nomItinerants
      carriereStr = nomMessager
    } else if (scoreCarriere <= 42) {
      classeStr = nomItinerants
      carriereStr = nomPatrouilleurRoutier
    } else if (scoreCarriere <= 43) {
      classeStr = nomItinerants
      carriereStr = nomRepurgateur
    } else if (scoreCarriere <= 45) {
      classeStr = nomItinerants
      carriereStr = nomSaltimbanque
      // ---------- lettrés ---------//
    } else if (scoreCarriere <= 46) {
      classeStr = nomLettres
      carriereStr = nomApothicaire
    } else if (scoreCarriere <= 48) {
      classeStr = nomLettres
      carriereStr = nomErudit
    } else if (scoreCarriere <= 49) {
      classeStr = nomLettres
      carriereStr = nomIngenieur
    } else if (scoreCarriere <= 50) {
      classeStr = nomLettres
      carriereStr = nomJuriste
    } else if (scoreCarriere <= 51) {
      classeStr = nomLettres
      carriereStr = nomMedecin
    } else if (scoreCarriere <= 53) {
      classeStr = nomLettres
      carriereStr = nomNonne
    } else if (scoreCarriere <= 58) {
      classeStr = nomLettres
      carriereStr = nomPretre
    } else if (scoreCarriere <= 59) {
      classeStr = nomLettres
      carriereStr = nomSorcier
      // ---------- riverains ---------//
    } else if (scoreCarriere <= 61) {
      classeStr = nomRiverains
      carriereStr = nomBatelier
    } else if (scoreCarriere <= 62) {
      classeStr = nomRiverains
      carriereStr = nomContrebandier
    } else if (scoreCarriere <= 64) {
      classeStr = nomRiverains
      carriereStr = nomDebardeur
    } else if (scoreCarriere <= 67) {
      classeStr = nomRiverains
      carriereStr = nomFemmeDuFleuve
    } else if (scoreCarriere <= 69) {
      classeStr = nomRiverains
      carriereStr = nomMarin
    } else if (scoreCarriere <= 70) {
      classeStr = nomRiverains
      carriereStr = nomNaufrageur
    } else if (scoreCarriere <= 71) {
      classeStr = nomRiverains
      carriereStr = nomNautonnier
    } else if (scoreCarriere <= 73) {
      classeStr = nomRiverains
      carriereStr = nomPatrouilleurFluvial
      // ---------- roublards ---------//
    } else if (scoreCarriere <= 74) {
      classeStr = nomRoublards
      carriereStr = nomCharlatan
    } else if (scoreCarriere <= 76) {
      classeStr = nomRoublards
      carriereStr = nomEntremetteur
    } else if (scoreCarriere <= 80) {
      classeStr = nomRoublards
      carriereStr = nomHorsLaLoi
    } else if (scoreCarriere <= 81) {
      classeStr = nomRoublards
      carriereStr = nomPilleurDeTombes
    } else if (scoreCarriere <= 82) {
      classeStr = nomRoublards
      carriereStr = nomRanconneur
    } else if (scoreCarriere <= 83) {
      classeStr = nomRoublards
      carriereStr = nomReceleur
    } else if (scoreCarriere <= 84) {
      classeStr = nomRoublards
      carriereStr = nomSorcierDissident
    } else if (scoreCarriere <= 87) {
      classeStr = nomRoublards
      carriereStr = nomVoleur
      // ---------- ruraux ---------//
    } else if (scoreCarriere <= 88) {
      classeStr = nomRuraux
      carriereStr = nomBailli
    } else if (scoreCarriere <= 90) {
      classeStr = nomRuraux
      carriereStr = nomChasseur
    } else if (scoreCarriere <= 91) {
      classeStr = nomRuraux
      carriereStr = nomEclaireur
    } else if (scoreCarriere <= 92) {
      classeStr = nomRuraux
      carriereStr = nomHerboriste
    } else if (scoreCarriere <= 93) {
      classeStr = nomRuraux
      carriereStr = nomMineur
    } else if (scoreCarriere <= 94) {
      classeStr = nomRuraux
      carriereStr = nomMystique
    } else if (scoreCarriere <= 95) {
      classeStr = nomRuraux
      carriereStr = nomSorcierDeVillage
    } else if (scoreCarriere <= 100) {
      classeStr = nomRuraux
      carriereStr = nomVillageois
    }
  } else if (nomCoterie === nomCotBretonniens) {
    // ---------- citadins ---------//
    if (scoreCarriere <= 1) {
      classeStr = nomCitadins
      carriereStr = nomAgitateur
    } else if (scoreCarriere <= 3) {
      classeStr = nomCitadins
      carriereStr = nomArtisan
    } else if (scoreCarriere <= 6) {
      classeStr = nomCitadins
      carriereStr = nomBourgeois
    } else if (scoreCarriere <= 7) {
      classeStr = nomCitadins
      carriereStr = nomEnqueteur
    } else if (scoreCarriere <= 8) {
      classeStr = nomCitadins
      carriereStr = nomMarchand
    } else if (scoreCarriere <= 10) {
      classeStr = nomCitadins
      carriereStr = nomMendiant
    } else if (scoreCarriere <= 11) {
      classeStr = nomCitadins
      carriereStr = nomMilicien
    } else if (scoreCarriere <= 13) {
      classeStr = nomCitadins
      carriereStr = nomRatier
      // ---------- courtisans ---------//
    } else if (scoreCarriere <= 14) {
      classeStr = nomCourtisans
      carriereStr = nomArtiste
    } else if (scoreCarriere <= 15) {
      classeStr = nomCourtisans
      carriereStr = nomConseiller
    } else if (scoreCarriere <= 17) {
      classeStr = nomCourtisans
      carriereStr = nomDuelliste
    } else if (scoreCarriere <= 18) {
      classeStr = nomCourtisans
      carriereStr = nomEmissaire
    } else if (scoreCarriere <= 19) {
      classeStr = nomCourtisans
      carriereStr = nomEspion
    } else if (scoreCarriere <= 20) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
    } else if (scoreCarriere <= 22) {
      classeStr = nomCourtisans
      carriereStr = nomNoble
    } else if (scoreCarriere <= 26) {
      classeStr = nomCourtisans
      carriereStr = nomServiteur
      // ---------- guerriers ---------//
    } else if (scoreCarriere <= 28) {
      classeStr = nomGuerriers
      carriereStr = nomCavalier
    } else if (scoreCarriere <= 32) {
      classeStr = nomGuerriers
      carriereStr = nomChevalier
    } else if (scoreCarriere <= 33) {
      classeStr = nomGuerriers
      carriereStr = nomGarde
    } else if (scoreCarriere <= 34) {
      classeStr = nomGuerriers
      carriereStr = nomGladiateur
    } else if (scoreCarriere <= 38) {
      classeStr = nomGuerriers
      carriereStr = nomSoldat
    } else if (scoreCarriere <= 39) {
      classeStr = nomGuerriers
      carriereStr = nomSpadassin
      // ---------- itinérants ---------//
    } else if (scoreCarriere <= 40) {
      classeStr = nomItinerants
      carriereStr = nomChasseurDePrimes
    } else if (scoreCarriere <= 41) {
      classeStr = nomItinerants
      carriereStr = nomCocher
    } else if (scoreCarriere <= 43) {
      classeStr = nomItinerants
      carriereStr = nomColporteur
    } else if (scoreCarriere <= 45) {
      classeStr = nomItinerants
      carriereStr = nomMessager
    } else if (scoreCarriere <= 48) {
      classeStr = nomItinerants
      carriereStr = nomSaltimbanque
      // ---------- lettrés ---------//
    } else if (scoreCarriere <= 49) {
      classeStr = nomLettres
      carriereStr = nomApothicaire
    } else if (scoreCarriere <= 50) {
      classeStr = nomLettres
      carriereStr = nomErudit
    } else if (scoreCarriere <= 52) {
      classeStr = nomLettres
      carriereStr = nomJuriste
    } else if (scoreCarriere <= 54) {
      classeStr = nomLettres
      carriereStr = nomMedecin
      // ---------- riverains ---------//
    } else if (scoreCarriere <= 55) {
      classeStr = nomRiverains
      carriereStr = nomBatelier
    } else if (scoreCarriere <= 56) {
      classeStr = nomRiverains
      carriereStr = nomContrebandier
    } else if (scoreCarriere <= 58) {
      classeStr = nomRiverains
      carriereStr = nomDebardeur
    } else if (scoreCarriere <= 59) {
      classeStr = nomRiverains
      carriereStr = nomFemmeDuFleuve
    } else if (scoreCarriere <= 62) {
      classeStr = nomRiverains
      carriereStr = nomMarin
    } else if (scoreCarriere <= 63) {
      classeStr = nomRiverains
      carriereStr = nomNaufrageur
    } else if (scoreCarriere <= 64) {
      classeStr = nomRiverains
      carriereStr = nomNautonnier
    } else if (scoreCarriere <= 65) {
      classeStr = nomRiverains
      carriereStr = nomPatrouilleurFluvial
      // ---------- roublards ---------//
    } else if (scoreCarriere <= 67) {
      classeStr = nomRoublards
      carriereStr = nomCharlatan
    } else if (scoreCarriere <= 68) {
      classeStr = nomRoublards
      carriereStr = nomEntremetteur
    } else if (scoreCarriere <= 70) {
      classeStr = nomRoublards
      carriereStr = nomHorsLaLoi
    } else if (scoreCarriere <= 71) {
      classeStr = nomRoublards
      carriereStr = nomPilleurDeTombes
    } else if (scoreCarriere <= 72) {
      classeStr = nomRoublards
      carriereStr = nomRanconneur
    } else if (scoreCarriere <= 73) {
      classeStr = nomRoublards
      carriereStr = nomReceleur
    } else if (scoreCarriere <= 75) {
      classeStr = nomRoublards
      carriereStr = nomSorcierDissident
    } else if (scoreCarriere <= 77) {
      classeStr = nomRoublards
      carriereStr = nomVoleur
      // ---------- ruraux ---------//
    } else if (scoreCarriere <= 79) {
      classeStr = nomRuraux
      carriereStr = nomBailli
    } else if (scoreCarriere <= 82) {
      classeStr = nomRuraux
      carriereStr = nomChasseur
    } else if (scoreCarriere <= 84) {
      classeStr = nomRuraux
      carriereStr = nomEclaireur
    } else if (scoreCarriere <= 87) {
      classeStr = nomRuraux
      carriereStr = nomHerboriste
    } else if (scoreCarriere <= 90) {
      classeStr = nomRuraux
      carriereStr = nomMineur
    } else if (scoreCarriere <= 92) {
      classeStr = nomRuraux
      carriereStr = nomMystique
    } else if (scoreCarriere <= 100) {
      classeStr = nomRuraux
      carriereStr = nomVillageois
    }
  } else if (nomCoterie === nomCotHalfelins) {
    return genCarriereHobbit(scoreCarriere)
  } else if (
    // ------------ELFES SYLVAINS -----------------
    nomCoterie === nomCotElfesSylvains
  ) {
    // ---------- citadins ---------//
    if (scoreCarriere <= 5) {
      classeStr = nomCitadins
      carriereStr = nomArtisan
      // ---------- courtisans ---------//
    } else if (scoreCarriere <= 9) {
      classeStr = nomCourtisans
      carriereStr = nomArtiste
    } else if (scoreCarriere <= 13) {
      classeStr = nomCourtisans
      carriereStr = nomConseiller
    } else if (scoreCarriere <= 20) {
      classeStr = nomCourtisans
      carriereStr = nomEmissaire
    } else if (scoreCarriere <= 24) {
      classeStr = nomCourtisans
      carriereStr = nomEspion
    } else if (scoreCarriere <= 30) {
      classeStr = nomCourtisans
      carriereStr = nomNoble
      // ---------- guerriers ---------//
    } else if (scoreCarriere <= 35) {
      classeStr = nomGuerriers
      carriereStr = nomCavalier
    } else if (scoreCarriere <= 37) {
      classeStr = nomGuerriers
      carriereStr = nomChevalier
    } else if (scoreCarriere <= 39) {
      classeStr = nomGuerriers
      carriereStr = nomGarde
    } else if (scoreCarriere <= 41) {
      classeStr = nomGuerriers
      carriereStr = nomGladiateur
    } else if (scoreCarriere <= 45) {
      classeStr = nomGuerriers
      carriereStr = nomSoldat
      // ---------- itinérants ---------//
    } else if (scoreCarriere <= 47) {
      classeStr = nomItinerants
      carriereStr = nomChasseurDePrimes
    } else if (scoreCarriere <= 50) {
      classeStr = nomItinerants
      carriereStr = nomMessager
    } else if (scoreCarriere <= 55) {
      classeStr = nomItinerants
      carriereStr = nomSaltimbanque
      // ---------- lettrés ---------//
    } else if (scoreCarriere <= 56) {
      classeStr = nomLettres
      carriereStr = nomErudit
    } else if (scoreCarriere <= 60) {
      classeStr = nomLettres
      carriereStr = nomSorcier
      // ---------- riverains ---------//
    } else if (scoreCarriere <= 61) {
      classeStr = nomRiverains
      carriereStr = nomNaufrageur
      // ---------- roublards ---------//
    } else if (scoreCarriere <= 67) {
      classeStr = nomRoublards
      carriereStr = nomHorsLaLoi
      // ---------- ruraux ---------//
    } else if (scoreCarriere <= 77) {
      classeStr = nomRuraux
      carriereStr = nomChasseur
    } else if (scoreCarriere <= 88) {
      classeStr = nomRuraux
      carriereStr = nomEclaireur
    } else if (scoreCarriere <= 95) {
      classeStr = nomRuraux
      carriereStr = nomHerboriste
    } else if (scoreCarriere <= 100) {
      classeStr = nomRuraux
      carriereStr = nomMystique
    }
  } else if (
    // ------------HAUT ELFES -----------------
    nomCoterie === nomCotHautsElfes
  ) {
    // ---------- citadins ---------//
    if (scoreCarriere <= 3) {
      classeStr = nomCitadins
      carriereStr = nomArtisan
    } else if (scoreCarriere <= 5) {
      classeStr = nomCitadins
      carriereStr = nomBourgeois
    } else if (scoreCarriere <= 7) {
      classeStr = nomCitadins
      carriereStr = nomEnqueteur
    } else if (scoreCarriere <= 12) {
      classeStr = nomCitadins
      carriereStr = nomMarchand
    } else if (scoreCarriere <= 13) {
      classeStr = nomCitadins
      carriereStr = nomMilicien
      // ---------- courtisans ---------//
    } else if (scoreCarriere <= 14) {
      classeStr = nomCourtisans
      carriereStr = nomArtiste
    } else if (scoreCarriere <= 16) {
      classeStr = nomCourtisans
      carriereStr = nomConseiller
    } else if (scoreCarriere <= 18) {
      classeStr = nomCourtisans
      carriereStr = nomDuelliste
    } else if (scoreCarriere <= 21) {
      classeStr = nomCourtisans
      carriereStr = nomEmissaire
    } else if (scoreCarriere <= 24) {
      classeStr = nomCourtisans
      carriereStr = nomEspion
    } else if (scoreCarriere <= 26) {
      classeStr = nomCourtisans
      carriereStr = nomIntendant
    } else if (scoreCarriere <= 29) {
      classeStr = nomCourtisans
      carriereStr = nomNoble
      // ---------- guerriers ---------//
    } else if (scoreCarriere <= 33) {
      classeStr = nomGuerriers
      carriereStr = nomCavalier
    } else if (scoreCarriere <= 34) {
      classeStr = nomGuerriers
      carriereStr = nomChevalier
    } else if (scoreCarriere <= 36) {
      classeStr = nomGuerriers
      carriereStr = nomGarde
    } else if (scoreCarriere <= 38) {
      classeStr = nomGuerriers
      carriereStr = nomGladiateur
    } else if (scoreCarriere <= 40) {
      classeStr = nomGuerriers
      carriereStr = nomSoldat
    } else if (scoreCarriere <= 41) {
      classeStr = nomGuerriers
      carriereStr = nomSpadassin
      // ---------- itinérants ---------//
    } else if (scoreCarriere <= 44) {
      classeStr = nomItinerants
      carriereStr = nomChasseurDePrimes
    } else if (scoreCarriere <= 45) {
      classeStr = nomItinerants
      carriereStr = nomMessager
    } else if (scoreCarriere <= 48) {
      classeStr = nomItinerants
      carriereStr = nomSaltimbanque
      // ---------- lettrés ---------//
    } else if (scoreCarriere <= 50) {
      classeStr = nomLettres
      carriereStr = nomApothicaire
    } else if (scoreCarriere <= 54) {
      classeStr = nomLettres
      carriereStr = nomErudit
    } else if (scoreCarriere <= 58) {
      classeStr = nomLettres
      carriereStr = nomJuriste
    } else if (scoreCarriere <= 60) {
      classeStr = nomLettres
      carriereStr = nomMedecin
    } else if (scoreCarriere <= 64) {
      classeStr = nomLettres
      carriereStr = nomSorcier
      // ---------- riverains ---------//
    } else if (scoreCarriere <= 65) {
      classeStr = nomRiverains
      carriereStr = nomBatelier
    } else if (scoreCarriere <= 66) {
      classeStr = nomRiverains
      carriereStr = nomContrebandier
    } else if (scoreCarriere <= 81) {
      classeStr = nomRiverains
      carriereStr = nomMarin
      // ---------- roublards ---------//
    } else if (scoreCarriere <= 84) {
      classeStr = nomRoublards
      carriereStr = nomCharlatan
    } else if (scoreCarriere <= 86) {
      classeStr = nomRoublards
      carriereStr = nomEntremetteur
    } else if (scoreCarriere <= 89) {
      classeStr = nomRoublards
      carriereStr = nomHorsLaLoi
      // ---------- ruraux ---------//
    } else if (scoreCarriere <= 92) {
      classeStr = nomRuraux
      carriereStr = nomChasseur
    } else if (scoreCarriere <= 98) {
      classeStr = nomRuraux
      carriereStr = nomEclaireur
    } else if (scoreCarriere <= 100) {
      classeStr = nomRuraux
      carriereStr = nomHerboriste
    }
  }
  var classeCarriereObj = {}
  classeCarriereObj.classeStr = classeStr
  classeCarriereObj.carriereStr = carriereStr
  return classeCarriereObj
}

export function genCarriereNain(scoreCarriere) {
  var classeStr = ''
  var carriereStr = ''

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
    carriereStr = nomNoble
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
  } else if (scoreCarriere <= 60) {
    classeStr = nomItinerants
    carriereStr = nomPatrouilleurKarak
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
  
  var classeCarriereObj = {}
  classeCarriereObj.classeStr = classeStr
  classeCarriereObj.carriereStr = carriereStr
  return classeCarriereObj
}

export function genCarriereHobbit(scoreCarriere) {
  var classeStr = ''
  var carriereStr = ''
  // ---------- citadins ---------//
  if (scoreCarriere <= 2) {
    classeStr = nomCitadins
    carriereStr = nomAgitateur
  } else if (scoreCarriere <= 7) {
    classeStr = nomCitadins
    carriereStr = nomArtisan
  } else if (scoreCarriere <= 10) {
    classeStr = nomCitadins
    carriereStr = nomBourgeois
  } else if (scoreCarriere <= 12) {
    classeStr = nomCitadins
    carriereStr = nomEnqueteur
  } else if (scoreCarriere <= 16) {
    classeStr = nomCitadins
    carriereStr = nomMarchand
  } else if (scoreCarriere <= 20) {
    classeStr = nomCitadins
    carriereStr = nomMendiant
  } else if (scoreCarriere <= 22) {
    classeStr = nomCitadins
    carriereStr = nomMilicien
  } else if (scoreCarriere <= 25) {
    classeStr = nomCitadins
    carriereStr = nomRatier
    // ---------- courtisans ---------//
  } else if (scoreCarriere <= 27) {
    classeStr = nomCourtisans
    carriereStr = nomArtiste
  } else if (scoreCarriere <= 28) {
    classeStr = nomCourtisans
    carriereStr = nomConseiller
  } else if (scoreCarriere <= 29) {
    classeStr = nomCourtisans
    carriereStr = nomEmissaire
  } else if (scoreCarriere <= 30) {
    classeStr = nomCourtisans
    carriereStr = nomEspion
  } else if (scoreCarriere <= 32) {
    classeStr = nomCourtisans
    carriereStr = nomIntendant
  } else if (scoreCarriere <= 38) {
    classeStr = nomCourtisans
    carriereStr = nomServiteur
    // ---------- guerriers ---------//
  } else if (scoreCarriere <= 40) {
    classeStr = nomGuerriers
    carriereStr = nomGarde
  } else if (scoreCarriere <= 41) {
    classeStr = nomGuerriers
    carriereStr = nomGladiateur
  } else if (scoreCarriere <= 42) {
    classeStr = nomGuerriers
    carriereStr = nomChevaucheurBaireau
  } else if (scoreCarriere <= 44) {
    classeStr = nomGuerriers
    carriereStr = nomSoldat
    // ---------- itinérants ---------//
  } else if (scoreCarriere <= 45) {
    classeStr = nomItinerants
    carriereStr = nomChasseurDePrimes
  } else if (scoreCarriere <= 47) {
    classeStr = nomItinerants
    carriereStr = nomCocher
  } else if (scoreCarriere <= 49) {
    classeStr = nomItinerants
    carriereStr = nomColporteur
  } else if (scoreCarriere <= 51) {
    classeStr = nomItinerants
    carriereStr = nomMessager
  } else if (scoreCarriere <= 52) {
    classeStr = nomItinerants
    carriereStr = nomGardechamps
  } else if (scoreCarriere <= 55) {
    classeStr = nomItinerants
    carriereStr = nomSaltimbanque
    // ---------- lettrés ---------//
  } else if (scoreCarriere <= 56) {
    classeStr = nomLettres
    carriereStr = nomApothicaire
  } else if (scoreCarriere <= 58) {
    classeStr = nomLettres
    carriereStr = nomErudit
  } else if (scoreCarriere <= 59) {
    classeStr = nomLettres
    carriereStr = nomIngenieur
  } else if (scoreCarriere <= 61) {
    classeStr = nomLettres
    carriereStr = nomJuriste
  } else if (scoreCarriere <= 63) {
    classeStr = nomLettres
    carriereStr = nomMedecin
    // ---------- riverains ---------//
  } else if (scoreCarriere <= 64) {
    classeStr = nomRiverains
    carriereStr = nomBatelier
  } else if (scoreCarriere <= 68) {
    classeStr = nomRiverains
    carriereStr = nomContrebandier
  } else if (scoreCarriere <= 71) {
    classeStr = nomRiverains
    carriereStr = nomDebardeur
  } else if (scoreCarriere <= 74) {
    classeStr = nomRiverains
    carriereStr = nomFemmeDuFleuve
  } else if (scoreCarriere <= 75) {
    classeStr = nomRiverains
    carriereStr = nomMarin
  } else if (scoreCarriere <= 76) {
    classeStr = nomRiverains
    carriereStr = nomNautonnier
  } else if (scoreCarriere <= 77) {
    classeStr = nomRiverains
    carriereStr = nomPatrouilleurFluvial
    // ---------- roublards ---------//
  } else if (scoreCarriere <= 78) {
    classeStr = nomRoublards
    carriereStr = nomCharlatan
  } else if (scoreCarriere <= 81) {
    classeStr = nomRoublards
    carriereStr = nomEntremetteur
  } else if (scoreCarriere <= 82) {
    classeStr = nomRoublards
    carriereStr = nomHorsLaLoi
  } else if (scoreCarriere <= 83) {
    classeStr = nomRoublards
    carriereStr = nomPilleurDeTombes
  } else if (scoreCarriere <= 84) {
    classeStr = nomRoublards
    carriereStr = nomRanconneur
  } else if (scoreCarriere <= 85) {
    classeStr = nomRoublards
    carriereStr = nomReceleur
  } else if (scoreCarriere <= 89) {
    classeStr = nomRoublards
    carriereStr = nomVoleur
    // ---------- ruraux ---------//
  } else if (scoreCarriere <= 90) {
    classeStr = nomRuraux
    carriereStr = nomBailli
  } else if (scoreCarriere <= 92) {
    classeStr = nomRuraux
    carriereStr = nomChasseur
  } else if (scoreCarriere <= 93) {
    classeStr = nomRuraux
    carriereStr = nomEclaireur
  } else if (scoreCarriere <= 96) {
    classeStr = nomRuraux
    carriereStr = nomHerboriste
  } else if (scoreCarriere <= 97) {
    classeStr = nomRuraux
    carriereStr = nomMineur
  } else if (scoreCarriere <= 100) {
    classeStr = nomRuraux
    carriereStr = nomVillageois
  }

  var classeCarriereObj = {}
  classeCarriereObj.classeStr = classeStr
  classeCarriereObj.carriereStr = carriereStr
  return classeCarriereObj
}
