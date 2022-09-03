export const nomCC = 'Capacité de combat'
export const nomCT = 'Capacité de tir'
export const nomForce = 'Force'
export const nomEndurance = 'Endurance'
export const nomInitiative = 'Initiative'
export const nomAgilete = 'Agileté'
export const nomDexterite = 'Dextérité'
export const nomIntelligence = 'Intelligence'
export const nomForceMentale = 'Force mentale'
export const nomSociabilite = 'Sociabilité'

/**
 * @param {*} nomCaracStr : la chaîne de caractère décrivant le champs carac à l'utilisateur
 * @returns identifiant à utiliser pour accéder aux champs carac de l'objet personnage via l'opérateur []
 */
export function getCaracObjPropertyName(nomCaracStr) {
  if (nomCaracStr === nomCC) return 'cc'
  if (nomCaracStr === nomCC) return 'cc'
  if (nomCaracStr === nomForce) return 'force'
  if (nomCaracStr === nomEndurance) return 'endurance'
  if (nomCaracStr === nomInitiative) return 'initiative'
  if (nomCaracStr === nomAgilete) return 'agilete'
  if (nomCaracStr === nomDexterite) return 'dexterite'
  if (nomCaracStr === nomIntelligence) return 'intelligence'
  if (nomCaracStr === nomForceMentale) return 'force_mentale'
  if (nomCaracStr === nomSociabilite) return 'sociabilite'
  return 'carac inconnue'
}

export function modificateurCarac(valeurCarac) {
  if (valeurCarac < 4) return -4
  if (valeurCarac < 6) return -3
  if (valeurCarac < 8) return -2
  if (valeurCarac < 10) return -1
  if (valeurCarac < 12) return 0
  if (valeurCarac < 14) return 1
  if (valeurCarac < 16) return 2
  if (valeurCarac < 18) return 3
  if (valeurCarac < 20) return 4
  return 5
}

export const lstCaracsInitial = [
  {
    titre: nomCC,
    valeur: -1,
    description: 'Capacité de combat',
  },
  {
    titre: nomCT,
    valeur: -1,
    description: 'Capacité de tir',
  },
  {
    titre: nomForce,
    valeur: -1,
    description: 'Force',
  },
  {
    titre: nomEndurance,
    valeur: -1,
    description: 'Endurance',
  },
  {
    titre: nomInitiative,
    valeur: -1,
    description: 'Initiative',
  },
  {
    titre: nomAgilete,
    valeur: -1,
    description: 'Agilete',
  },
  {
    titre: nomDexterite,
    valeur: -1,
    description: 'description Dextérité',
  },
  {
    titre: nomForceMentale,
    valeur: -1,
    description: 'Force Mentale',
  },
  {
    titre: nomIntelligence,
    valeur: -1,
    description: 'description Intelligence',
  },
  {
    titre: nomSociabilite,
    valeur: -1,
    description: 'Sociabilite',
  },
]
