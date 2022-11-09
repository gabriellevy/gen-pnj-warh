import { normalizeCaracteres, retireAccents } from '../utils/retireAccents'
import { nomCC } from './lstCaracs'
import { nomCT } from './lstCaracs'
import { nomForce } from './lstCaracs'
import { nomEndurance } from './lstCaracs'
import { nomInitiative } from './lstCaracs'
import { nomAgilete } from './lstCaracs'
import { nomDexterite } from './lstCaracs'
import { nomIntelligence } from './lstCaracs'
import { nomForceMentale } from './lstCaracs'
import { nomSociabilite } from './lstCaracs'

export const nomArt = 'Art'
export const nomAthletisme = 'Athlétisme'
export const nomCalme = 'Calme'
export const nomCharme = 'Charme'
export const nomChevaucher = 'Chevaucher'
export const nomCommandement = 'Commandement'
export const nomConduiteAttelage = "Conduite d'attelage"

/**
 * @param {*} nomCompStr : la chaîne de caractère décrivant le champs compétence à l'utilisateur
 * @returns identifiant à utiliser pour accéder aux champs compétence de l'objet personnage via l'opérateur []
 */
export function getCompObjPropertyName(nomCompStr) {
  return normalizeCaracteres(retireAccents(nomCompStr)).toLowerCase()
}

export const lstComps = [
  {
    titre: nomConduiteAttelage,
    carac: nomAgilete,
    description: [''],
  },
  {
    titre: nomCommandement,
    carac: nomSociabilite,
    description: [''],
  },
  {
    titre: nomChevaucher,
    carac: nomAgilete,
    description: [''],
  },
  {
    titre: nomArt,
    carac: nomDexterite,
    description: [
      "Créez une oeuvre d'art avec le moyen d'expression de votre choix.",
    ],
  },
  {
    titre: nomAthletisme,
    carac: nomAgilete,
    description: [''],
  },
  {
    titre: nomCalme,
    carac: nomForceMentale,
    description: [''],
  },
  {
    titre: nomCharme,
    carac: nomSociabilite,
    description: [''],
  },
]

export function getCompetence(idComp) {
  for (let i = 0; i < lstComps.length; i++) {
    const comp = lstComps[i]
    if (comp.titre === idComp) {
      return comp
    }
  }
  return null
}
