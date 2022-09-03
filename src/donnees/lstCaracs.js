export const nomDexterite = 'Dextérité'
export const nomConstitution = 'Constitution'
export const nomCharisme = 'Charisme'
export const nomIntelligence = 'Intelligence'
export const nomSensibilite = 'Sensibilité'
export const nomMagie = 'Magie'

/**
 * @param {*} nomCaracStr : la chaîne de caractère décrivant le champs carac à l'utilisateur
 * @returns identifiant à utiliser pour accéder aux champs carac de l'objet personnage via l'opérateur []
 */
export function getCaracObjPropertyName(nomCaracStr) {
  if (nomCaracStr === nomDexterite) return 'dexterite'
  if (nomCaracStr === nomConstitution) return 'constitution'
  if (nomCaracStr === nomCharisme) return 'charisme'
  if (nomCaracStr === nomIntelligence) return 'intelligence'
  if (nomCaracStr === nomSensibilite) return 'sensibilite'
  if (nomCaracStr === nomMagie) return 'magie'
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
    titre: nomDexterite,
    valeur: -1,
    description: 'description Dextérité',
  },
  {
    titre: nomConstitution,
    valeur: -1,
    description: '(inclut la force)',
  },
  {
    titre: nomCharisme,
    valeur: -1,
    description: 'description Charisme',
  },
  {
    titre: nomIntelligence,
    valeur: -1,
    description: 'description Intelligence',
  },
  {
    titre: nomSensibilite,
    valeur: -1,
    description:
      'Perception au sens large, inclut :\n     - la finesse des sens\n     - la perception de la magie\n     - la perception psychologique',
  },
  {
    titre: nomMagie,
    valeur: -1,
    description: 'description Magie',
  },
]
