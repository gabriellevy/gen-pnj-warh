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

/**
 * @param {*} nomCompStr : la chaîne de caractère décrivant le champs compétence à l'utilisateur
 * @returns identifiant à utiliser pour accéder aux champs compétence de l'objet personnage via l'opérateur []
 */
export function getCompObjPropertyName(nomCompStr) {
  if (nomCompStr === nomArt) return 'art'
  return 'compétence inconnue'
}

export function getCompetence(idComp) {
  for (let i = 0; i < lstComps.length; i++) {
    const comp = lstComps[i]
    if (comp.titre === idComp) {
      return comp
    }
  }
  return null
}

export const lstComps = [
  {
    titre: nomArt,
    carac: nomDexterite,
    description: [
      "Créez une oeuvre d'art avec le moyen d'expression de votre choix.",
    ],
  },
]
