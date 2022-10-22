import { bronze, argent, or } from './lstNiveauDeVie'

// classes
export const nomCitadins = 'Citadins'
export const nomCourtisans = 'Courtisans'
export const nomGuerriers = 'Guerriers'
export const nomItinerants = 'Itinérants'
export const nomLettres = 'Lettrés'
export const nomRiverains = 'Riverains'
export const nomRoublards = 'Roublards'
export const nomRuraux = 'Ruraux'

// -------------- carrières
export const nomAgitateur = 'Agitateur'
export const nomArtisan = 'Artisan'
export const nomBourgeois = 'Bourgeois'
export const nomEnqueteur = 'Enquêteur'
export const nomMarchand = 'Marchand'
export const nomMendiant = 'Mendiant'
export const nomMilicien = 'Milicien'
export const nomRatier = 'Ratier'

export const nomArtiste = 'Artiste'
export const nomConseiller = 'Conseiller'
export const nomDuelliste = 'Duelliste'
export const nomEmissaire = 'Emissaire'
export const nomEspion = 'Espion'
export const nomIntendant = 'Intendant'
export const nomNoble = 'Noble'
export const nomServiteur = 'Serviteur'

export const nomCavalier = 'Cavalier'
export const nomChevalier = 'Chevalier'
export const nomGarde = 'Garde'
export const nomGladiateur = 'Gladiateur'
export const nomPretreGuerrier = 'Prêtre guerrier'
export const nomSoldat = 'Soldat'
export const nomSpadassin = 'Spadassin'
export const nomTueur = 'Tueur'

export const nomChasseurDePrimes = 'Chasseur de primes'
export const nomCocher = 'Cocher'
export const nomColporteur = 'Colporteur'
export const nomFlagellant = 'Flagellant'
export const nomMessager = 'Messager'
export const nomPatrouilleurRoutier = 'Patrouilleur routier'
export const nomRepurgateur = 'Répurgateur'
export const nomSaltimbanque = 'Saltimbanque'

export const nomApothicaire = 'Apothicaire'
export const nomErudit = 'Erudit'
export const nomIngenieur = 'Ingénieur'
export const nomJuriste = 'Juriste'
export const nomMedecin = 'Médecin'
export const nomNonne = 'Nonne'
export const nomPretre = 'Prêtre'
export const nomSorcier = 'Sorcier'

// carrières de riverains
export const nomBatelier = 'Batelier'
export const nomContrebandier = 'Contrebandier'
export const nomDebardeur = 'Débardeur'
export const nomFemmeDuFleuve = 'Femme du fleuve'
export const nomMarin = 'Marin'
export const nomNaufrageur = 'Naufrageur'
export const nomNautonnier = 'Nautonnier'
export const nomPatrouilleurFluvial = 'Patrouilleur fluvial'

export const nomCharlatan = 'Charlatan'
export const nomEntremetteur = 'Entremetteur'
export const nomHorsLaLoi = 'Hors-la-loi'
export const nomPilleurDeTombes = 'Pilleur de tombes'
export const nomRanconneur = 'Rançonneur'
export const nomReceleur = 'Receleur'
export const nomSorcierDissident = 'Sorcier dissident'
export const nomVoleur = 'Voleur'

export const nomBailli = 'Bailli'
export const nomChasseur = 'Chasseur'
export const nomEclaireur = 'Eclaireur'
export const nomHerboriste = 'Herboriste'
export const nomMineur = 'Mineur'
export const nomMystique = 'Mystique'
export const nomSorcierDeVillage = 'Sorcier de village'
export const nomVillageois = 'Villageois'

export function getClasseObj(idClasse) {
  var coterieObj
  lstClasses.forEach((classe) => {
    if (classe.titre === idClasse) {
      coterieObj = classe
    }
  })
  return coterieObj
}

export const nomPamphletaire = 'Pamphlétaire'
export const nomFauteurTrouble = 'Fauteur de trouble'
export const nomDemagogue = 'Démagogue'

export const lstClasses = [
  {
    titre: nomCitadins,
    description: 'Citadins',
    carrieres: [
      {
        titre: nomAgitateur,
        description: 'Agitateur',
        evolutions: [
          {
            titre: nomPamphletaire,
            statut: {
              echelon: bronze,
              standing: 1,
            },
          },
          {
            titre: nomAgitateur,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
          {
            titre: nomFauteurTrouble,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomDemagogue,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
        ],
      },
      {
        titre: nomArtisan,
        description: 'Artisan',
      },
      {
        titre: nomBourgeois,
        description: 'Bourgeois',
      },
      {
        titre: nomEnqueteur,
        description: 'Enquêteur',
      },
      {
        titre: nomMarchand,
        description: 'Marchand',
      },
      {
        titre: nomMendiant,
        description: 'Mendiant',
      },
      {
        titre: nomMilicien,
        description: 'Milicien',
      },
      {
        titre: nomRatier,
        description: 'Ratier',
      },
    ],
  },
  {
    titre: nomCourtisans,
    description: 'Courtisans',
    carrieres: [
      {
        titre: nomArtiste,
        description: 'Artiste',
      },
      {
        titre: nomConseiller,
        description: 'Conseiller',
      },
      {
        titre: nomDuelliste,
        description: 'Duelliste',
      },
      {
        titre: nomEmissaire,
        description: 'Emissaire',
      },
      {
        titre: nomEspion,
        description: 'Espion',
      },
      {
        titre: nomIntendant,
        description: 'Intendant',
      },
      {
        titre: nomNoble,
        description: 'Noble',
      },
      {
        titre: nomServiteur,
        description: 'Serviteur',
      },
    ],
  },
  {
    titre: nomGuerriers,
    description: 'Guerriers',
    carrieres: [
      {
        titre: nomCavalier,
        description: 'Cavalier',
      },
      {
        titre: nomChevalier,
        description: 'Chevalier',
      },
      {
        titre: nomGarde,
        description: 'Garde',
      },
      {
        titre: nomGladiateur,
        description: 'Gladiateur',
      },
      {
        titre: nomPretreGuerrier,
        description: 'nomPretreGuerrier',
      },
      {
        titre: nomSoldat,
        description: 'Soldat',
      },
      {
        titre: nomSpadassin,
        description: 'Spadassin',
      },
      {
        titre: nomTueur,
        description: 'Tueur',
      },
    ],
  },
  {
    titre: nomItinerants,
    description: 'Itinérants',
    carrieres: [
      {
        titre: nomChasseurDePrimes,
        description: 'ChasseurDePrimes',
      },
      {
        titre: nomCocher,
        description: 'Cocher',
      },
      {
        titre: nomColporteur,
        description: 'Colporteur',
      },
      {
        titre: nomFlagellant,
        description: 'Flagellant',
      },
      {
        titre: nomMessager,
        description: 'Messager',
      },
      {
        titre: nomPatrouilleurRoutier,
        description: 'Patrouilleur routier',
      },
      {
        titre: nomRepurgateur,
        description: 'Repurgateur',
      },
      {
        titre: nomSaltimbanque,
        description: 'Saltimbanque',
      },
    ],
  },
  {
    titre: nomLettres,
    description: 'Lettrés',
    carrieres: [
      {
        titre: nomApothicaire,
        description: 'Apothicaire',
      },
      {
        titre: nomErudit,
        description: 'Erudit',
      },
      {
        titre: nomIngenieur,
        description: 'Ingénieur',
      },
      {
        titre: nomJuriste,
        description: 'Juriste',
      },
      {
        titre: nomSorcier,
        description: 'Sorcier',
      },
      {
        titre: nomMedecin,
        description: 'nomMedecin',
      },
      {
        titre: nomNonne,
        description: 'Nonne',
      },
      {
        titre: nomPretre,
        description: 'nomPretre',
      },
    ],
  },
  {
    titre: nomRiverains,
    description: 'Riverains',
    carrieres: [
      {
        titre: nomBatelier,
        description: 'Batelier',
      },
      {
        titre: nomContrebandier,
        description: 'Contrebandier',
      },
      {
        titre: nomDebardeur,
        description: 'nomDebardeur',
      },
      {
        titre: nomFemmeDuFleuve,
        description: 'Femme du fleuve',
      },
      {
        titre: nomMarin,
        description: 'Marin',
      },
      {
        titre: nomNaufrageur,
        description: 'Naufrageur',
      },
      {
        titre: nomNautonnier,
        description: 'Nautonnier',
      },
      {
        titre: nomPatrouilleurFluvial,
        description: 'Patrouilleur fluvial',
      },
    ],
  },
  {
    titre: nomRoublards,
    description: 'Roublards',
    carrieres: [
      {
        titre: nomCharlatan,
        description: 'Charlatan',
      },
      {
        titre: nomEntremetteur,
        description: 'Entremetteur',
      },
      {
        titre: nomHorsLaLoi,
        description: 'Hors-la-loi',
      },
      {
        titre: nomPilleurDeTombes,
        description: 'nomPilleurDeTombes',
      },
      {
        titre: nomRanconneur,
        description: 'Rançonneur',
      },
      {
        titre: nomReceleur,
        description: 'Receleur',
      },
      {
        titre: nomSorcierDissident,
        description: 'Sorcier dissident',
      },
      {
        titre: nomVoleur,
        description: 'Voleur',
      },
    ],
  },
  {
    titre: nomRuraux,
    description: 'Ruraux',
    carrieres: [
      {
        titre: nomBailli,
        description: 'Bailli',
      },
      {
        titre: nomChasseur,
        description: 'Chasseur',
      },
      {
        titre: nomEclaireur,
        description: 'Eclaireur',
      },
      {
        titre: nomHerboriste,
        description: 'Herboriste',
      },
      {
        titre: nomMineur,
        description: 'Mineur',
      },
      {
        titre: nomMystique,
        description: 'Mystique',
      },
      {
        titre: nomSorcierDeVillage,
        description: 'nomSorcierDeVillage',
      },
      {
        titre: nomVillageois,
        description: 'Villageois',
      },
    ],
  },
]
