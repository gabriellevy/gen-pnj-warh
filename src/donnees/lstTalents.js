import { normalizeCaracteres, retireAccents } from '../utils/retireAccents'

export const nomAffable = 'Affable'
export const nomArtiste = 'Artiste'
export const nomBaratiner = 'Baratiner'
export const nomBricoleur = 'Bricoleur'
export const nomChatDeGouttiere = 'Chat de gouttière'
export const nomCombatDeloyal = 'Combat déloyal'
export const nomCostaud = 'Costaud'
export const nomDoigtsDeFee = 'Doigts de fée'
export const nomErgoteur = 'Ergoteur'
export const nomFaireLaManche = 'Faire la manche'
export const nomFerveurArdente = 'Ferveur ardente'
export const nomFuite = 'Fuite !'
export const nomGrandOrateur = 'Grand orateur'
export const nomInfatigable = 'Infatigable'
export const nomIntrigant = 'Intrigant'
export const nomLireEcrire = 'Lire / écrire'
export const nomMagnumOpus = 'Magnum opus'
export const nomMaitreArtisan = 'Maître artisan (au choix)'
export const nomMenteur = 'Menteur'
export const nomNegociateur = 'Négociateur'
export const nomOrateur = 'Orateur'
export const nomPasDeCote = 'Pas de côté'
export const nomSavoirVivreAuChoix = 'Savoir vivre (au choix)'
export const nomSavoirVivreGuilde = 'Savoir vivre (guilde)'
export const nomSensAiguiseGoutOuToucher = 'Sens aiguisé (goût ou toucher)'
export const nomSociable = 'Sociable'
export const nomSuborneur = 'Suborneur'
export const nomTravailleurQualifieAuChoix = 'Trvailleur qualifié (au choix)'
export const nomTresFort = 'Très fort'

export const lstTalents = [
    {
      titre: nomAffable,
      description: [''],
    },
    {
      titre: nomArtiste,
      description: [''],
    },
    {
      titre: nomBaratiner,
      description: [''],
    },
    {
      titre: nomBricoleur,
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
      titre: nomCostaud,
      description: [''],
    },
    {
      titre: nomDoigtsDeFee,
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
      titre: nomInfatigable,
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
      titre: nomMagnumOpus,
      description: [''],
    },
    {
      titre: nomMaitreArtisan,
      description: [''],
    },
    {
      titre: nomMenteur,
      description: [''],
    },
    {
      titre: nomNegociateur,
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
      titre: nomSensAiguiseGoutOuToucher,
      description: [''],
    },
    {
      titre: nomSavoirVivreAuChoix,
      description: [''],
    },
    {
      titre: nomSavoirVivreGuilde,
      description: [''],
    },
    {
      titre: nomSociable,
      description: [''],
    },
    {
      titre: nomSuborneur,
      description: [''],
    },
    {
      titre: nomTravailleurQualifieAuChoix,
      description: [''],
    },
    {
      titre: nomTresFort,
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
export function getTalentObjPropertyName(nomTalentStr) {
    return normalizeCaracteres(retireAccents(nomTalentStr)).toLowerCase()
}
