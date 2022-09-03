import portrait_conquistador from './img/conquistadors/portraits/portrait_20-50_b.jpg'
import portrait_elfe from './img/elfes/portraits/portrait_30_50_d.jpg'
import portrait_templier from './img/bretonniens/portraits/20-40.jpg'
import portrait_zaporogue from './img/kislevites/portraits/20-45.jpg'
import portrait_acheron from './img/acheron/portraits/f20_50.jpg'
import portrait_cathare from './img/cathares/portraits/28_48.jpg'
import portrait_skavens from './img/skavens/portraits/30_65.jpg'
import portrait_empire from './img/empire/portraits/30_60.jpg'

import bg_conquistador from './img/conquistadors/bg_conquistadors_priant.jpg'
import bg_conquistador_b from './img/quartiers/bg_saint_malo.jpg'
import bg_elfe from './img/elfes/bg_musicien.jpg'
import bg_elfe_b from './img/quartiers/bg_saint_germain_en_laye.jpg'
import bg_templier from './img/bretonniens/bg_priant.jpg'
import bg_templier_b from './img/quartiers/bg_interieur_basilique.jpg'
import bg_templier_c from './img/quartiers/bg_saint_denis.jpg'
import bg_zaporogue from './img/kislevites/bg_lettre_zapo.jpg'
import bg_zaporogue_b from './img/kislevites/bg_univ_zaporogues.jpg'
import bg_acheron from './img/acheron/bg_acheron.jpg'
import bg_skavens from './img/skavens/bg_skavens.jpg'
import bg_schweizer from './img/empire/bg.png'

import {
  nomDexterite,
  nomConstitution,
  nomCharisme,
  nomIntelligence,
  nomSensibilite,
  nomMagie,
} from './lstCaracs'

import {
  nomAcrobatie,
  nomActeur,
  nomAlchimie,
  nomAnimaux,
  nomArcanes,
  nomArt,
  nomArtisanat,
  nomCommandement,
  nomConvaincre,
  nomCorpsACorps,
  nomDetrousser,
  nomDiscretion,
  nomEffort,
  nomFabricationTechnique,
  nomForce,
  nomInformatique,
  nomIntimider,
  nomInvestigation,
  nomLoi,
  nomMedecine,
  nomMiracles,
  nomMusique,
  nomNegoce,
  nomPilotage,
  nomReparer,
  nomResistance,
  nomScience,
  nomSIntroduire,
  nomSurvie,
  nomTir,
} from './lstComps'

import {
  voieIngenieur,
  voieMagicien,
  voieScientifique,
  voieSoldat,
  voieVoyageur,
  voieIntellectuel,
  voieHommeDuMonde,
  voieAventurier,
  voieMalandrin,
  voieMarchand,
  voieTravailleur,
  voiePretre,
  voieBrute,
  voieSaltimbanque,
  voieEspion,
} from './lstVoies'
import { getRandomInt } from '../utils/rand'

export const nomCotConquistadors = 'Conquistadors'
export const nomCotElfes = 'Elfes'
export const nomCotKislevites = 'Kislevites'
export const nomCotBretonniens = 'Bretonniens'
export const nomCotAcheron = 'Achéron'
export const nomCotCathares = 'Cathares'
export const nomCotCelte = 'Celtes'
export const nomCotSkavens = 'Skavens'
export const nomCotEmpire = 'Empire'

export function getCoterieObj(idCoterie) {
  var coterieObj
  lstCoteries.forEach((coterie) => {
    if (coterie.titre === idCoterie) {
      coterieObj = coterie
    }
  })
  return coterieObj
}

export function getEvtAleatoireCoterie(idCoterie, nb) {
  var coterieObj = getCoterieObj(idCoterie)
  var evts = []
  if (coterieObj.evts.length > 0) {
    for (let i = 0; i < nb; i++) {
      evts.push(coterieObj.evts[getRandomInt(coterieObj.evts.length)])
    }
  }
  return evts
}

export const lstCoteries = [
  {
    titre: nomCotBretonniens,
    deDeVie: 1,
    voies: [
      voieAventurier,
      voieSoldat,
      voieTravailleur,
      voiePretre,
      voieVoyageur,
    ],
    objets: ['Épée rituelle'],
    modifs_caracs: [{ carac: nomCorpsACorps, val: 2 }],
    evts: [
      {
        description: 'Pénitence par le travail gratuit',
        bonusCompetence: nomEffort,
      },
      {
        description: 'Pauvre mais construit ses propres objets',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Paladin',
        bonusCompetence: nomMiracles,
      },
      {
        description: 'Banquiers',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Volonté surnaturelle',
        bonusCompetence: nomResistance,
      },
    ],
    affiche: true,
    portrait: portrait_templier,
    fonds: [bg_templier, bg_templier_b, bg_templier_c],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:La_Bretonnie',
    description:
      "La Bretonnie est l'un des plus grands royaumes du Vieux Monde. Son nom vient de celui de la plus puissante de ces tribus, les Bretonni. Sous la conduite de leur chef de guerre, Gilles le Breton, les Bretonni se regroupèrent en une seule nation. Ils s’établirent et cultivèrent les terres, sous la menace constante des tribus Orques et Gobelines. Après des siècles de luttes incessantes, les Bretonniens prirent le contrôle des vallées et des plaines fertiles, et repoussèrent leurs ennemis dans les forêts et sur les plateaux désolés, mais les guerres continuèrent contre de nouveaux ennemis. Des flottes de Morts-Vivants ravagèrent les régions côtières à l'ouest, des Skavens désolèrent les terres du sud, des pillards nordiques vinrent par-delà la Mer des Griffes et s'enfoncèrent dans les terres en remontant les fleuves, détruisant tout sur leur passage. À travers ces générations de guerres continuelles contre divers ennemis, les Bretonniens se forgèrent une héroïque tradition de chevalerie. Ce sont les Chevaliers de Bretonnie qui repoussent les forces destructrices de leurs terres paisibles. ",
  },
  {
    titre: nomCotEmpire,
    deDeVie: 1,
    voies: [
      voieTravailleur,
      voieScientifique,
      voieIngenieur,
      voiePretre,
      voieMarchand,
    ],
    modifs_caracs: [{ carac: nomMagie, val: -1 }],
    evts: [
      {
        description: 'Formé à la dure quand il était étudiant',
        bonusCompetence: nomEffort,
      },
      {
        description: 'Fabricants de meubles en sapin',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Bourgeois responsable',
        bonusCompetence: nomLoi,
      },
      {
        description: 'Service militaire',
        bonusCompetence: nomTir,
      },
    ],
    affiche: true,
    niveau_richesse: 2,
    portrait: portrait_empire,
    fonds: [bg_schweizer],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:L%27Empire',
    description:
      'Au cours de siècles de guerres, l’Empire est devenu un vaste royaume regroupant des provinces et des cités-états unies sous la bannière de l’Empereur. Pour les habitants du Vieux Monde, la représentation habituelle de l’Empire est celle d’une contrée couverte d’immenses et sombres forêts, entourée d’impénétrables chaînes de montagnes. Une terre sur laquelle l’humanité et les autres races coexistent à l’abri des murailles de quelques îlots de civilisation dispersés, depuis lesquels ils observent d’un œil craintif les dangers qui se tapissent sous les noires frondaisons. Il y a certainement une part de vérité dans cette manière de voir, mais comme tout stéréotype, elle peint le tableau à très gros traits et simplifie à l’extrême une situation infiniment plus diverse et complexe. ',
  },
  {
    titre: nomCotCathares,
    deDeVie: 1,
    voies: [voieTravailleur, voiePretre],
    affiche: true,
    portrait: portrait_cathare,
    fonds: [],
    evts: [
      {
        description: 'Humilité et autosuffisance',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Aura de saint',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Saint',
        bonusCompetence: nomMiracles,
      },
      {
        description: "Choeur de l'église",
        bonusCompetence: nomMusique,
      },
      {
        description: 'Insensibilité mystique',
        bonusCompetence: nomResistance,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Cathares-5f56f04db3a5463cb274bc8c53054ce2',
    description: 'Pas fait. Christianisme obligatoire.',
  },
  {
    titre: nomCotAcheron,
    deDeVie: 1,
    voies: [voieHommeDuMonde, voieIntellectuel, voieMagicien],
    affiche: true,
    portrait: portrait_acheron,
    fonds: [bg_acheron],
    evts: [
      {
        description: 'Expert en potions',
        bonusCompetence: nomAlchimie,
      },
      {
        description: "Si vieux qu'il sait tout",
        bonusCompetence: nomConvaincre,
      },
      {
        description: "Expériences sur le téléchargement de l'âme",
        bonusCompetence: nomInformatique,
      },
      {
        description: 'Déformations nécromantiques',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Étude du corps humain',
        bonusCompetence: nomMedecine,
      },
      {
        description: 'Adorateur de la mort',
        bonusCompetence: nomMiracles,
      },
      {
        description: 'Corps à moitié mort',
        bonusCompetence: nomResistance,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Ach-ron-acdb44a8711640f5a6d9527e5e656d5a',
    description:
      "La coterie d'Achéron a un principe d'une terrifiante clarté : la vie est surfaite. Il est temps que l'humanité dépasse ce stade et entre dans la non vie éternelle derrière le bienveillant guide qu'est la magie des ténèbres. Tout le fonctionnement d'Achéron se base sur la magie des ténèbres. Ils sont probablement la coterie qui a le plus rapproché l'utilisation de la magie d'une science fiable. Il faut dire que c'est d'elle que dépend ce qui leur tient le plus à cœur : l'immortalité.",
  },
  {
    titre: nomCotElfes,
    deDeVie: 1,
    voies: [voieSaltimbanque, voieMagicien, voieHommeDuMonde, voieIntellectuel],
    modifs_caracs: [
      { carac: nomConstitution, val: -1 },
      { carac: nomMagie, val: 1 },
      { carac: nomCharisme, val: 1 },
    ],
    modifs_comps: [{ comp: nomAlchimie, val: 1 }],
    evts: [
      {
        description: 'Artiste de cirque elfique',
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Coquet comédien',
        bonusCompetence: nomActeur,
      },
      {
        description: 'Lanceur de sort',
        bonusCompetence: nomArcanes,
      },
      {
        description: 'Artiste',
        bonusCompetence: nomArt,
      },
      {
        description: 'A travaillé dans une échoppe à restaurer des objets',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Entretien du corps primordial',
        bonusCompetence: nomMedecine,
      },
      {
        description: 'Musicien de harpe ou de flûte',
        bonusCompetence: nomMusique,
      },
    ],
    affiche: true,
    portrait: portrait_elfe,
    fonds: [bg_elfe, bg_elfe_b],
    page: 'https://www.notion.so/wiki-extremis/Elfes-233a158ae654424eaf3f2466f476e13c',
    description:
      "Les elfes  ont pour but principal de faire atteindre son potentiel maximum à tout homme qui les rejoindrait. Cette perfection étant pour eux essentielle au niveau de la beauté, de la sensibilité, de l'agrément et de la morale. Ils ont développé toute une philosophie et une magie orientée vers ce but et les ont poussées à un tel niveau qu'aucun elfe ne reste longtemps laid ou désagréable.",
  },
  {
    titre: nomCotSkavens,
    deDeVie: 0,
    voies: [voieScientifique, voieIngenieur, voieMalandrin, voieEspion],
    modifs_caracs: [],
    modifs_comps: [{ comp: nomDetrousser, val: 1 }],
    affiche: true,
    portrait: portrait_skavens,
    fonds: [bg_skavens],
    evts: [
      {
        description: 'Apprenti Eshin',
        bonusCompetence: nomDiscretion,
      },
      {
        description: "Coureur d'égoûts",
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Empoisonneur',
        bonusCompetence: nomAlchimie,
      },
      {
        description: 'Expériences génético magiques',
        bonusCompetence: nomMedecine,
      },
      {
        description: 'Marchand opportuniste',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Lâché en pleine nature et a du survivre',
        bonusCompetence: nomSurvie,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Skavens-51d5db3bea614d1abca305011d3d5d95',
    description:
      'Les skavens ont pour principe de base une énergie et une ambition démesurée. Toujours plus et en un minimum de temps est leur devise, peu importe les risques à prendre.',
  },
  {
    titre: nomCotKislevites,
    deDeVie: 1,
    voies: [
      voieAventurier,
      voieSaltimbanque,
      voieBrute,
      voieVoyageur,
      voiePretre,
      voieTravailleur,
    ],
    affiche: true,
    evts: [
      {
        description: 'pasteur / éleveur',
        bonusCompetence: nomAnimaux,
      },
      {
        description: 'Fils de chef de clan',
        bonusCompetence: nomCommandement,
      },
      {
        description: 'Bagarreur ivrogne',
        bonusCompetence: nomCorpsACorps,
      },
      {
        description: 'Prêtre multireligion',
        bonusCompetence: nomMiracles,
      },
      {
        description: 'Réutilisateur de matos de seconde main',
        bonusCompetence: nomReparer,
      },
      {
        description: 'Vie à la dure à la belle étoile',
        bonusCompetence: nomResistance,
      },
      {
        description: "Chasseur à l'arc",
        bonusCompetence: nomTir,
      },
      {
        description: 'Sait tout préparer avec peu',
        bonusCompetence: nomSurvie,
      },
    ],
    portrait: portrait_zaporogue,
    fonds: [bg_zaporogue, bg_zaporogue_b],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:Le_Tsarat_de_Kislev',
    description:
      "Cerné par les vastes étendues de l’Empire, au sud, et par le cauchemardesque Pays des Trolls, au nord, le Kislev, le royaume de la Reine de Glace, est une nation célèbre pour la vaillance de ses populations capables de résister sans faillir aux assauts des hordes affamées venues du nord, d’endurer le froid stupéfiant et la morne solitude qui règnent dans l’immensité lugubre de l'Oblast, de persévérer et de survivre, envers et contre tout. Pourtant, le Kislev a bien plus à offrir qu’un hiver épouvantable et des luttes incessantes contre le Chaos. C’est une terre riche, dotée d’une culture et d’une histoire fascinantes, habitée par un peuple fier, gardien d’un noble héritage. Tout en étant le rempart qui protège les faibles hommes du sud et qui constitue la première ligne de défense contre l’anéantissement, le Kislev n’en reste pas moins une nation farouchement indépendante, forte, d’une immense endurance.",
  },
]
