import { normalizeCaracteres, retireAccents } from '../utils/retireAccents'

export const nomAffable = 'Affable'
export const nomArtiste = 'Artiste'
export const nomBaratiner = 'Baratiner'
export const nomBricoleur = 'Bricoleur'
export const nomChatDeGouttiere = 'Chat de gouttière'
export const nomCombatDeloyal = 'Combat déloyal'
export const nomCooperatif = 'Coopératif'
export const nomCostaud = 'Costaud'
export const nomDiscret = 'Discret'
export const nomDoigtsDeFee = 'Doigts de fée'
export const nomEffraction = 'Effraction'
export const nomErgoteur = 'Ergoteur'
export const nomEscroquer = 'Escroquer'
export const nomFaireLaManche = 'Faire la manche'
export const nomFerveurArdente = 'Ferveur ardente'
export const nomFuite = 'Fuite !'
export const nomGrandOrateur = 'Grand orateur'
export const nomInfatigable = 'Infatigable'
export const nomInsignifiant = 'Insignifiant'
export const nomIntrigant = 'Intrigant'
export const nomLectureRapide = 'Lecture rapide'
export const nomLireEcrire = 'Lire / écrire'
export const nomMagnumOpus = 'Magnum opus'
export const nomMaitreArtisan = 'Maître artisan (au choix)'
export const nomMenteur = 'Menteur'
export const nomNegociateur = 'Négociateur'
export const nomOrateur = 'Orateur'
export const nomPasDeCote = 'Pas de côté'
export const nomPerseverant = 'Persévérant'
export const nomPerspicace = 'Perspicace'
export const nomPresenceImposante = 'Présence imposante'
export const nomSavantAuChoix = 'Savant (au choix)'
export const nomSavoirVivreAuChoix = 'Savoir vivre (au choix)'
export const nomSavoirVivreGuilde = 'Savoir vivre (guilde)'
export const nomSavoirVivreServiteur = 'Savoir vivre (serviteur)'
export const nomSensAiguiseAuChoix = 'Sens aiguisé (au choix)'
export const nomSensAiguiseGoutOuToucher = 'Sens aiguisé (goût ou toucher)'
export const nomSixiemeSens = 'Sixième sens'
export const nomSociable = 'Sociable'
export const nomStudieux = 'Studieux'
export const nomSuborneur = 'Suborneur'
export const nomTourDesSouvenirs = 'Tour des souvenirs'
export const nomTravailleurQualifieAuChoix = 'Travailleur qualifié (au choix)'
export const nomTresFort = 'Très fort'
export const nomVivacite = 'Vivacité'

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
      titre: nomEffraction,
      description: [''],
    },
    {
      titre: nomErgoteur,
      description: [''],
    },
    {
      titre: nomEscroquer,
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
      titre: nomInsignifiant,
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
      titre: nomPerseverant,
      description: [''],
    },
    {
      titre: nomPerspicace,
      description: [''],
    },
    {
      titre: nomSensAiguiseGoutOuToucher,
      description: [''],
    },
    {
      titre: nomSavantAuChoix,
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
      titre: nomSavoirVivreServiteur,
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
    {
      titre: nomVivacite,
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
