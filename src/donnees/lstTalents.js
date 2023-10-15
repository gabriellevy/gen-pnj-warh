import { normalizeCaracteres, retireAccents } from '../utils/retireAccents'

export const nomAffable = 'Affable'
export const nomBaratiner = 'Baratiner'
export const nomChatDeGouttiere = 'Chat de gouttière'
export const nomCombatDeloyal = 'Combat déloyal'
export const nomErgoteur = 'Ergoteur'
export const nomFaireLaManche = 'Faire la manche'
export const nomFerveurArdente = 'Ferveur ardente'
export const nomFuite = 'Fuite !'
export const nomGrandOrateur = 'Grand orateur'
export const nomIntrigant = 'Intrigant'
export const nomLireEcrire = 'Lire / écrire'
export const nomMenteur = 'Menteur'
export const nomOrateur = 'Orateur'
export const nomPasDeCote = 'Pas de côté'
export const nomSavoirVivreAuChoix = 'Savoir vivre (au choix)'
export const nomSociable = 'Sociable'

export const lstTalents = [
    {
      titre: nomAffable,
      description: [''],
    },
    {
      titre: nomBaratiner,
      description: [''],
    },
    {
      titre: nomChatDeGouttiere,
      description: [''],
    },
    {
      titre: nomCombatDeloyal,
      description: [''],
    },
    {
      titre: nomErgoteur,
      description: [''],
    },
    {
      titre: nomFaireLaManche,
      description: [''],
    },
    {
      titre: nomFerveurArdente,
      description: [''],
    },
    {
      titre: nomFuite,
      description: [''],
    },
    {
      titre: nomGrandOrateur,
      description: [''],
    },
    {
      titre: nomIntrigant,
      description: [''],
    },
    {
      titre: nomLireEcrire,
      description: [''],
    },
    {
      titre: nomMenteur,
      description: [''],
    },
    {
      titre: nomOrateur,
      description: [''],
    },
    {
      titre: nomPasDeCote,
      description: [''],
    },
    {
      titre: nomSavoirVivreAuChoix,
      description: [''],
    },
    {
      titre: nomSociable,
      description: [''],
    },
]

export function getTalent(idTalent) {
  for (let i = 0; i < lstTalents.length; i++) {
    const talent = lstTalents[i]
    if (talent.titre === idTalent) {
      return talent
    }
  }
  return null
}


/**
 * @param {*} nomTalentStr : la chaîne de caractère décrivant le champs Talent à l'utilisateur
 * @returns identifiant à utiliser pour accéder aux champs Talent de l'objet personnage via l'opérateur []
 */
export function getCompObjPropertyName(nomTalentStr) {
    return normalizeCaracteres(retireAccents(nomTalentStr)).toLowerCase()
}
