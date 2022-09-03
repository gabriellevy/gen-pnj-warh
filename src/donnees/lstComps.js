import { nomDexterite } from './lstCaracs'
import { nomCharisme } from './lstCaracs'
import { nomConstitution } from './lstCaracs'
import { nomIntelligence } from './lstCaracs'
import { nomSensibilite } from './lstCaracs'
import { nomMagie } from './lstCaracs'

export const nomAnimaux = 'Animaux'
export const nomCorpsACorps = 'Corps à corps'
export const nomMilieuRue = 'Connaissance de la rue'
export const nomMilieuReseau = "Réseau d'informateur"
export const nomResistance = 'Résistance'
export const nomSurvie = 'Survie'
export const nomIntimider = 'Intimider'
export const nomForce = 'Force'
export const nomConvaincre = 'Convaincre'
export const nomNegoce = 'Négociation, marchandage'
export const nomInvestigation = 'Investigation'
export const nomIntuition = 'Intuition'
export const nomCommandement = 'Commandement'
export const nomTir = 'Tir'
export const nomInformatique = 'Informatique'
export const nomFabricationTechnique = 'Fabrication technique'
export const nomReparer = 'Réparer'
export const nomLangues = 'Langues'
export const nomLoi = 'Loi'
export const nomArt = 'Art'
export const nomAlchimie = 'Alchimie'
export const nomArcanes = 'Arcanes'
export const nomMilieuMonde = 'Connaissance du monde'
export const nomPilotage = 'Pilotage'
export const nomDetrousser = 'Détrousser'
export const nomDiscretion = 'Discrétion'
export const nomSIntroduire = "S'introduire"
export const nomMilieuClerge = 'Connaissance du clergé'
export const nomMilieuHauteSociete = 'Connaissance de la haute société'
export const nomMiracles = 'Miracles'
export const nomAcrobatie = 'Acrobatie'
export const nomActeur = 'Acteur'
export const nomMusique = 'Musique'
export const nomScience = 'Science'
export const nomMedecine = 'Médecine'
export const nomArtisanat = 'Artisanat'
export const nomEffort = 'Effort'

/**
 * @param {*} nomCompStr : la chaîne de caractère décrivant le champs compétence à l'utilisateur
 * @returns identifiant à utiliser pour accéder aux champs compétence de l'objet personnage via l'opérateur []
 */
export function getCompObjPropertyName(nomCompStr) {
  if (nomCompStr === nomAnimaux) return 'animaux'
  if (nomCompStr === nomCorpsACorps) return 'corps_a_corps'
  if (nomCompStr === nomMilieuRue) return 'connaissance_de_la_rue'
  if (nomCompStr === nomMilieuReseau) return 'reseau_d_informateur'
  if (nomCompStr === nomResistance) return 'resistance'
  if (nomCompStr === nomSurvie) return 'survie'
  if (nomCompStr === nomIntimider) return 'intimider'
  if (nomCompStr === nomForce) return 'force'
  if (nomCompStr === nomConvaincre) return 'convaincre'
  if (nomCompStr === nomNegoce) return 'negociation_marchandage'
  if (nomCompStr === nomInvestigation) return 'investigation'
  if (nomCompStr === nomIntuition) return 'intuition'
  if (nomCompStr === nomCommandement) return 'commandement'
  if (nomCompStr === nomTir) return 'tir'
  if (nomCompStr === nomInformatique) return 'informatique'
  if (nomCompStr === nomFabricationTechnique) return 'fabrication_technique'
  if (nomCompStr === nomReparer) return 'reparer'
  if (nomCompStr === nomLangues) return 'langues'
  if (nomCompStr === nomLoi) return 'loi'
  if (nomCompStr === nomArt) return 'art'
  if (nomCompStr === nomAlchimie) return 'alchimie'
  if (nomCompStr === nomArcanes) return 'arcanes'
  if (nomCompStr === nomMilieuMonde) return 'connaissance_du_monde'
  if (nomCompStr === nomPilotage) return 'pilotage'
  if (nomCompStr === nomDetrousser) return 'detrousser'
  if (nomCompStr === nomDiscretion) return 'discrétion'
  if (nomCompStr === nomSIntroduire) return 's_introduire'
  if (nomCompStr === nomMilieuClerge) return 'connaissance_du_clerge'
  if (nomCompStr === nomMilieuHauteSociete)
    return 'connaissance_de_la_haute_societe'
  if (nomCompStr === nomMiracles) return 'miracles'
  if (nomCompStr === nomAcrobatie) return 'acrobatie'
  if (nomCompStr === nomActeur) return 'acteur'
  if (nomCompStr === nomMusique) return 'musique'
  if (nomCompStr === nomScience) return 'science'
  if (nomCompStr === nomMedecine) return 'medecine'
  if (nomCompStr === nomArtisanat) return 'artisanat'
  if (nomCompStr === nomEffort) return 'effort'
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
    titre: nomAcrobatie,
    valeur: 0,
    carac: nomDexterite,
    description: [
      'Marcher sur un fil (difficulté 15)\n',
      'Faire un salto (difficulté 15)\n',
      'Marcher sur un toit plat (difficulté6)',
    ],
  },
  {
    titre: nomActeur,
    valeur: 0,
    carac: nomCharisme,
    description: [
      'Inclut le déguisement.\n',
      'Se faire passer pour un passant innocent (difficulté 8).\n',
      "Se faire passer pour un professionnel d'un métier non maîtrisé (difficulté 15).\n",
    ],
  },
  {
    titre: nomAlchimie,
    valeur: 0,
    carac: nomMagie,
    description: ['cf voie des elixirs p93 CoC pour des idées.\n'],
  },
  {
    titre: nomAnimaux,
    valeur: 0,
    carac: nomSensibilite,
    description: [
      "Savoir s'occuper d'un animal, le dresser, le dompter.\n",
      'niveau 1 : +1 un animal dressé\n',
      'niveau 3 : +1 un animal dressé\n',
      'niveau 6 : +1 un animal dressé\n',
      "S'occuper d'un chat (difficulté 4)",
      'Dresser un cheval (difficulté 14)',
      'Se comporter face à des requins en plongée (difficulté 15)',
    ],
  },
  {
    titre: nomArcanes,
    valeur: 0,
    carac: nomMagie,
    description: [
      "Maîtrise une des voies d'arcanes.\n",
      "niveau 1 : +1 une voie d'arcane\n",
      "niveau 3 : +1 une voie d'arcane\n",
      "niveau 6 : +1 une voie d'arcane\n",
      'Copier grosso modo les sorts de donjons et dragons',
    ],
  },
  {
    titre: nomArt,
    valeur: 0,
    carac: nomSensibilite,
    description: [
      'Estimer une oeuvre (difficulté 9).\n',
      'Décrire une oeuvre crédiblement (difficulté 7).\n',
      'Décrire une oeuvre en profondeur (difficulté 12).\n',
      'Peindre un tableau de qualité (difficulté 14).\n',
    ],
  },
  {
    titre: nomArtisanat,
    valeur: 0,
    carac: nomConstitution,
    description: [
      'Fabriquer un pot (difficulté 8).\n',
      'Fabriquer un meuble (difficulté 13).\n',
      'Installer un piège (difficulté 9).\n',
      'Concevoir et installer un piège (difficulté 14).\n',
    ],
  },
  {
    titre: nomCommandement,
    valeur: 0,
    carac: nomCharisme,
    description: [
      'Commander une escouade (difficulté 8).\n',
      'COmmander un navire (difficulté 13).\n',
    ],
  },
  {
    titre: nomConvaincre,
    valeur: 0,
    carac: nomCharisme,
    description: [''],
  },
  {
    titre: nomCorpsACorps,
    valeur: 0,
    carac: nomConstitution,
    description: [
      '+1 arme de contact au choix :  Poing américain, lame rétractile, épée, couteau militaire',
    ],
  },
  {
    titre: nomDetrousser,
    valeur: 0,
    carac: nomSensibilite,
    description: [''],
  },
  {
    titre: nomDiscretion,
    valeur: 0,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: nomEffort,
    valeur: 0,
    carac: nomConstitution,
    description: [
      'Efforts physiques soutenus, endurance.\n',
      'Pousser une voiture en plein soleil (difficulté 8).\n',
      "Faire une journée de travail d'éboueur (difficulté 7).\n",
    ],
  },
  {
    titre: nomFabricationTechnique,
    valeur: 0,
    carac: nomIntelligence,
    description: ['Mécanique, électronique, informatique.\n'],
  },
  {
    titre: nomForce,
    valeur: 0,
    carac: nomConstitution,
    description: [
      'Déménager une armoire (difficulté 8).\n',
      "Soulever l'arrière d'une voiture (difficulté 16).\n",
    ],
  },
  {
    titre: nomInformatique,
    valeur: 0,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomIntimider,
    valeur: 0,
    carac: nomConstitution,
    description: [
      'Pousser un videur à nous laisser entrerd ans une boîte très branchée (difficulté 9)',
    ],
  },
  {
    titre: nomIntuition,
    valeur: 0,
    carac: nomSensibilite,
    description: [
      'Cette capacité doit être utilisée quand le personnage veut une aide du maître de jeu.\n',
      "Chaque point dans cette compétence permet d'utiliser la capacité une fois par session.\n",
      "Le joueur dit qu'il utilise son intuition sur un sujet, et le maître de jeu effectue un jet de compétence secrètement, puis révèle une réponse au joueur.\n",
      ' - résultat 6 ou moins : ratage cmplet : le joueur reçoit une fausse information\n',
      ' - résultat 7 à 10  : aucune information\n',
      ' - résultat 11 à 1415 ou plus  : une très bonne information\n',
    ],
  },
  {
    titre: nomInvestigation,
    valeur: 0,
    carac: nomSensibilite,
    description: [
      'Trouver un indice facile (difficulté 8).\n',
      'Trouver un indice difficile (difficulté 16).',
    ],
  },
  {
    titre: nomLangues,
    valeur: 0,
    carac: nomIntelligence,
    description: [
      'Se débrouiller vite fait dans une langue inconnue (difficulté 10).\n',
      'Apprendre une nouvelle langue : le temps nécessaire dépend du score au test de compétence : \n',
      ' - 8 ou moins : raté après un mois de temps gaspillé à essayer.\n',
      ' - 9 à 12 : 5 mois.\n',
      ' - 13 à 17  : 3 mois.\n',
      ' - 18+  : 1 mois.\n',
      'Nombre de langues maîtrisées : +1 au niveau 1, +1au niveau 3, +1 au niveau 5, +1 au niveau 6 (soit 5 langues).\n',
    ],
  },
  {
    titre: nomLoi,
    valeur: 0,
    carac: nomIntelligence,
    description: [
      'Comprendre les lois de sa coterie (difficulté 6).\n',
      'Comprendre les lois des autres coteries (difficulté 10).\n',
      "Connaître une loi obscure d'une autre coterie (difficulté 13).\n",
      'Plaider une affaire dans une autre coterie (difficulté 16).\n',
    ],
  },
  {
    titre: nomMedecine,
    valeur: 0,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomMilieuClerge,
    valeur: 0,
    carac: nomSensibilite,
    description: [''],
  },
  {
    titre: nomMilieuMonde,
    valeur: 0,
    carac: nomSensibilite,
    description: [
      "Habitude de passer d'un pays à l'autre, d'une culture à l'autre. Facilité à s'y intégrer et débrouiller.\n",
    ],
  },
  {
    titre: nomMilieuHauteSociete,
    valeur: 0,
    carac: nomSensibilite,
    description: [''],
  },
  {
    titre: nomMilieuRue,
    valeur: 0,
    carac: nomSensibilite,
    description: [
      'Se débrouiller dans un milieu particulier qui doit être précisé avec la compétence.\n',
      "Exemples : réseau d'Information, clergé, haute société, rue, connaissance du monde (voyage)\n",
    ],
  },
  {
    titre: nomMilieuReseau,
    valeur: 0,
    carac: nomSensibilite,
    description: ["Réseau d'informateur."],
  },
  {
    titre: nomMiracles,
    valeur: 0,
    carac: nomMagie,
    description: [
      'Soin léger (difficulté 10).\n',
      'Ressuciter un mort (difficulté 30)\n',
    ],
  },
  {
    titre: nomMusique,
    valeur: 0,
    carac: nomDexterite,
    description: [
      'Niveau 1 : +1 instrument possédé et maîtrisé.\n',
      'Niveau 3 : +1 instrument possédé et maîtrisé.\n',
      'Niveau 5 : +1 instrument possédé et maîtrisé.\n',
      'Niveau 6 : +1 instrument possédé et maîtrisé.\n',
    ],
  },
  {
    titre: nomNegoce,
    valeur: 0,
    carac: nomCharisme,
    description: [
      "Inclut la capacité à estimer la valeur d'un objet.\n",
      'Niveau 3 ou plus : une fois apr jour peut tenter un jet de négoce contre celui du marchand. Si le joueur gagne tous les prix du marchands baissent de 10% et ses achats augmentent de 10%\n',
    ],
  },
  {
    titre: nomPilotage,
    valeur: 0,
    carac: nomDexterite,
    description: [
      "Un pilote de niveau 1 maîtrise un véhicule auquel s'applique son bonus au jet. Au niveau 3 + 1 un véhicule maîtrise. Au niveau 6  encore +1 véhicule maîtrisé\n",
    ],
  },
  {
    titre: nomReparer,
    valeur: 0,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomResistance,
    valeur: 0,
    carac: nomConstitution,
    description: ['Résister au poison, à la maladie, aux substances toxiques'],
  },
  {
    titre: nomScience,
    valeur: 0,
    carac: nomIntelligence,
    description: [
      'Choisir une science principale parmi biologie, mathématiques, astronomie, physique...',
    ],
  },
  {
    titre: nomSIntroduire,
    valeur: 0,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: nomSurvie,
    valeur: 0,
    carac: nomIntelligence,
    description: ['survie en pleine nature.'],
  },
  {
    titre: nomTir,
    valeur: 0,
    carac: nomDexterite,
    description: [''],
  },
]
