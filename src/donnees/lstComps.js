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

export const nomArtEcriture = 'Caligraphie'
export const nomArtAuChoix = 'Art (au choix)'
export const nomArtCalligraphie = 'Calligraphie'
export const nomArtIcones = 'Art (icônes)'
export const nomAthletisme = 'Athlétisme'
export const nomCalme = 'Calme'
export const nomCharme = 'Charme'
export const nomChevaucher = 'Chevaucher'
export const nomCommandement = 'Commandement'
export const nomConduiteAttelage = "Conduite d'attelage"
export const nomCorpsACorpsBagarre = 'Bagarre'
export const nomCorpsACorpsDeuxMains = 'Corps à corps (à deux mains)'
export const nomCorpsACorpsBase = 'Corps à corps (base)'
export const nomCorpsACorpsEscrime = 'Escrime'
export const nomCorpsACorpsAuChoix = 'Corps à corps (au choix)'
export const nomCorpsACorpsFleau = 'Corps à corps (fléau)'
export const nomCorpsACorpsHast = 'Corps à corps (hast)'
export const nomCorpsACorpsCavalerie = 'Corps à corps (cavalerie)'
export const nomCorpsACorpsAuChoix2 = 'Corps à corps (au choix)'
export const nomCorpsACorpsParade = 'Parade'
export const nomCrochetage = 'Crochetage'
export const nomDiscretionUrbaine = 'Discrétion Urbaine'
export const nomDiscretionRuraleUrbaine = 'Discrétion rurale ou urbaine'
export const nomDiscretionSouterraine = 'Discrétion Souterraine'
export const nomDiscretionAuChoix = 'Discrétion au choix'
export const nomDivertissementNarration = 'Narration'
export const nomDivertissementInterpretation = 'Interprétation'
export const nomDivertissementDiscours = 'Discours'
export const nomDivertissementAuChoix1 = 'Divertissement (au choix)'
export const nomDivertissementConference = 'Divertissement (conférence)'
export const nomDivertissementChant = 'Divertissement (chant)'
export const nomDivertissementRhetorique = 'Divertissement (rhétorique)'
export const nomDivertissementAuChoix2 = 'Divertissement (au choix)'
export const nomDivertissementRaillerie = 'Raillerie'
export const nomDressage = 'Dressage (au choix)'
export const nomDressageChien = 'Dressage de chien'
export const nomDressageCheval = 'Dressage de cheval'
export const nomDressagePigeon = 'Dressage de pigeon'
export const nomEmpriseSurAnimaux = 'Emprise sur les animaux'
export const nomEscalade = 'Escalade'
export const nomEscamotage = 'Escamotage'
export const nomEsquive = 'Esquive'
export const nomEvaluation = 'Évaluation'
export const nomFocalisation = 'Focalisation (couleur au choix)'
export const nomGuerison = 'Guérison'
export const nomIntimidation = 'Intimidation'
export const nomIntuition = 'Intuition'
export const nomLangueClassique = 'Langue classique'
export const nomLangueGuilde = 'Langue (guilde)'
export const nomLangueBataille = 'Langue de bataille'
export const nomLangueAuChoix1 = 'Langue au choix'
export const nomLangueKhazalid = 'Langue Khazalid'
export const nomLangueMagick = 'Langue Magick'
export const nomLangueAuChoix2 = 'Autre langue au choix'
export const nomMarchandage = 'Marchandage'
export const nomMetier = 'Métier (au choix)'
export const nomMetierApothicaire = 'Apothicaire'
export const nomMetierBarbier = 'Barbier'
export const nomMetierIngenierie = 'Métier (ingéniérie)'
export const nomMetierMaterielArtistique = 'Métier (matériel artistique)'
export const nomMetierAuChoix = 'Métier (au choix)'
export const nomMetierConstructionBateaux = 'Métier (construction de bâteaux)'
export const nomMetierMarechalFerrant = 'Métier (maréchal ferrant)'
export const nomMetierHerboriste = 'Herboriste'
export const nomMetierVigneron = 'Virgneron'
export const nomMetierImprimerie = 'Imprimerie'
export const nomMetierArmurier = 'Armurier'
export const nomMetierEmpoisonneur = 'Empoisonneur'
export const nomMetierBrasseur = 'Brasseur'
export const nomMetierBricoleur = 'Bricoleur'
export const nomMusicien = 'Musicien (au choix)'
export const nomMusicienAuChoix = 'Musicien (au choix)'
export const nomMusicienTambourFifre = 'Musicien (tambour ou fifre)'
export const nomNatation = 'Natation'
export const nomOrientation = 'Orientation'
export const nomPari = 'Pari'
export const nomPerception = 'Perception'
export const nomPiegeage = 'Piégeage'
export const nomPistage = 'Pistage'
export const nomPriere = 'Prière'
export const nomProjectilesEntraves = 'Projectiles (entraves)'
export const nomProjectilesFronde = 'Fronde'
export const nomProjectilesChoix = 'Projectiles (au choix)'
export const nomProjectilesArbaletePoing = 'Arbalète de poing'
export const nomProjectilesArbalete = 'Arbalète'
export const nomProjectilesIngenierie = 'Projectiles (ingéniérie)'
export const nomProjectilesLancer = 'Projectiles de lancer'
export const nomProjectilesPoudreNoire = 'Projectile à poudre noire'
export const nomProjectilesArc = 'Arc'
export const nomRagot = 'Ragot'
export const nomRamer = 'Ramer'
export const nomRecherche = 'Recherche'
export const nomRepresentation = 'Représentation (au choix)'
export const nomRepresentationAuChoix = 'Représentation (au choix)'
export const nomRepresentationAcrobatie = 'Acrobatie'
export const nomRepresentationDanse = 'Danse'
export const nomRepresentationCombat = 'Divertissement (combat)'
export const nomResistance = 'Résistance'
export const nomResistanceAlcool = "Résistance à l'alcool"
export const nomSavoirRegion = 'Savoir région'
export const nomSavoirChoix1 = 'Savoir (au choix)'
export const nomSavoirRemede = 'Savoir (remèdes)'
export const nomSavoirChoix2 = 'Savoir (2ème au choix)'
export const nomSavoirChoix3 = 'Savoir (3ème au choix)'
export const nomSavoirLoi = 'Savoir (loi)'
export const nomSavoirPoison = 'Savoir (poison)'
export const nomSavoirPolitique = 'Savoir politique'
export const nomSavoirHeraldique = 'Héraldique'
export const nomSavoirDragons = 'Savoir (dragons)'
export const nomSavoirGuerre = 'Savoir (guerre)'
export const nomSavoirGeants = 'Savoir (géants)'
export const nomSavoirGeographie = 'Savoir (géographie)'
export const nomSavoirChaos = 'Savoir (chaos)'
export const nomSavoirArt = 'Savoir (art)'
export const nomSavoirTaxes = 'Savoir (taxes)'
export const nomSavoirTheologie = 'Savoir (théologie)'
export const nomSavoirTroll = 'Savoir (trolls)'
export const nomSavoirAnatomie = 'Savoir (anatomie)'
export const nomSavoirNoble = 'Savoir (noble)'
export const nomSavoirIngenierie = 'Savoir (ingéniérie)'
export const nomSavoirPlantes = 'Savoir (plantes)'
export const nomSavoirChimie = 'Savoir (chimie)'
export const nomSavoirSorciere = 'Savoir (sorcière)'
export const nomSavoirScience = 'Savoir (science)'
export const nomSavoirTorture = 'Savoir (torture)'
export const nomSavoirEmpire = 'Savoir (empire)'
export const nomSavoirSigmar = 'Savoir (Sigmar)'
export const nomSavoirMagie = 'Savoir (Magie)'
export const nomSavoirItineraire = 'Savoir (itinéraire)'
export const nomSavoirVivre = 'Savoir (savoir vivre)'
export const nomSavoirVoiesFluviales = 'Savoir (voies fluviales)'
export const nomSignesSecretsOrdreChevaleresque =
  "Signes secrets d'ordre chevaleresque"
export const nomSignesSecretsGuilde = 'Signes secrets de guilde'
export const nomSignesSecretsContrebandiers = 'Signes secrets de contrebandiers'
export const nomSignesSecretsVagabond = 'Signes secrets de vagabond'
export const nomSignesSecretsChoix = 'Signes secrets au choix'
export const nomSoinsAnimaux = 'Soins aux animaux'
export const nomSubornation = 'Subornation'
export const nomSurvieExterieur = 'Survie en extérieur'
export const nomVoile = 'Voile'

export const lstComps = [
  {
    titre: nomVoile,
    carac: nomAgilete,
    description: [''],
  },
  {
    titre: nomSurvieExterieur,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomSubornation,
    carac: nomSociabilite,
    description: [''],
  },
  {
    titre: nomSoinsAnimaux,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomSignesSecretsGuilde,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomSignesSecretsVagabond,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomSavoirRegion,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomSavoirPoison,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomSavoirChoix1,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomSavoirLoi,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomSavoirPolitique,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomResistanceAlcool,
    carac: nomEndurance,
    description: [''],
  },
  {
    titre: nomResistance,
    carac: nomEndurance,
    description: [''],
  },
  {
    titre: nomRepresentation,
    carac: nomAgilete,
    description: [''],
  },
  {
    titre: nomRecherche,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomRamer,
    carac: nomForce,
    description: [''],
  },
  {
    titre: nomRagot,
    carac: nomSociabilite,
    description: [''],
  },
  {
    titre: nomProjectilesFronde,
    carac: nomCT,
    description: [''],
  },
  {
    titre: nomProjectilesArbaletePoing,
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
    titre: nomLangueClassique,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomLangueGuilde,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomLangueAuChoix1,
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
    titre: nomDressageChien,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomDivertissementNarration,
    carac: nomSociabilite,
    description: [''],
  },
  {
    titre: nomDivertissementInterpretation,
    carac: nomSociabilite,
    description: [''],
  },
  {
    titre: nomDivertissementAuChoix1,
    carac: nomSociabilite,
    description: [''],
  },
  {
    titre: nomDiscretionUrbaine,
    carac: nomAgilete,
    description: [''],
  },
  {
    titre: nomDiscretionSouterraine,
    carac: nomAgilete,
    description: [''],
  },
  {
    titre: nomCrochetage,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: nomCorpsACorpsBagarre,
    carac: nomCC,
    description: [''],
  },
  {
    titre: nomCorpsACorpsBase,
    carac: nomCC,
    description: [''],
  },
  {
    titre: nomCorpsACorpsAuChoix,
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
    titre: nomArtEcriture,
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
