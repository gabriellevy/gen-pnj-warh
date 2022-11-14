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

/**
 * @param {*} nomCompStr : la chaîne de caractère décrivant le champs compétence à l'utilisateur
 * @returns identifiant à utiliser pour accéder aux champs compétence de l'objet personnage via l'opérateur []
 */
export function getCompObjPropertyName(nomCompStr) {
  return normalizeCaracteres(retireAccents(nomCompStr)).toLowerCase()
}

export const nomArt = 'Art'
export const nomAthletisme = 'Athlétisme'
export const nomCalme = 'Calme'
export const nomCharme = 'Charme'
export const nomChevaucher = 'Chevaucher'
export const nomCommandement = 'Commandement'
export const nomConduiteAttelage = "Conduite d'attelage"
export const nomCorpsACorps = 'Corps à corps'
export const nomCrochetage = 'Crochetage'
export const nomDiscretion = 'Discrétion'
export const nomDivertissement = 'Divertissement'
export const nomDressage = 'Dressage'
export const nomEmpriseSurAnimaux = 'Emprise sur les animaux'
export const nomEscalade = 'Escalade'
export const nomEscamotage = 'Escamotage'
export const nomEsquive = 'Esquive'
export const nomEvaluation = 'Évaluation'
export const nomFocalisation = 'Focalisation'
export const nomGuerison = 'Guérison'
export const nomIntimidation = 'Intimidation'
export const nomIntuition = 'Intuition'
export const nomLangue = 'Langue'
export const nomMarchandage = 'Marchandage'
export const nomMetier = 'Métier'
export const nomMusicien = 'Musicien'
export const nomNatation = 'Natation'
export const nomOrientation = 'Orientation'
export const nomPari = 'Pari'
export const nomPerception = 'Perception'
export const nomPiegeage = 'Piégeage'
export const nomPistage = 'Pistage'
export const nomPriere = 'Prière'
export const nomProjectiles = 'Projectiles'

export const lstComps = [
  {
    titre: nomProjectiles,
    carac: nomCT,
    description: [''],
  },
  {
    titre: nomPriere,
    carac: nomSociabilite,
    description: [''],
  },
  {
    titre: nomPistage,
    carac: nomInitiative,
    description: [''],
  },
  {
    titre: nomPiegeage,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: nomPerception,
    carac: nomInitiative,
    description: [''],
  },
  {
    titre: nomPari,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomOrientation,
    carac: nomInitiative,
    description: [''],
  },
  {
    titre: nomNatation,
    carac: nomForce,
    description: [''],
  },
  {
    titre: nomMusicien,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: nomMetier,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: nomLangue,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomIntuition,
    carac: nomInitiative,
    description: [''],
  },
  {
    titre: nomIntimidation,
    carac: nomForce,
    description: [''],
  },
  {
    titre: nomGuerison,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomFocalisation,
    carac: nomForceMentale,
    description: [''],
  },
  {
    titre: nomEvaluation,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomEsquive,
    carac: nomAgilete,
    description: [''],
  },
  {
    titre: nomEscamotage,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: nomEscalade,
    carac: nomForce,
    description: [''],
  },
  {
    titre: nomEmpriseSurAnimaux,
    carac: nomForceMentale,
    description: [''],
  },
  {
    titre: nomDressage,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomDivertissement,
    carac: nomSociabilite,
    description: [''],
  },
  {
    titre: nomDiscretion,
    carac: nomAgilete,
    description: [''],
  },
  {
    titre: nomCrochetage,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: nomCorpsACorps,
    carac: nomCC,
    description: [''],
  },
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
