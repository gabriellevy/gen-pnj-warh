import portrait_haut_elfe from './img/hauts_elfes/portraits/femme15-30_b.jpg'
import portrait_elfe_sylvain from './img/elfes_sylvains/portraits/femme15_40.jpg'
import portrait_bretonnien from './img/bretonniens/portraits/f18_35_chevalier.jpg'
import portrait_zaporogue from './img/kislevites/portraits/20-45.jpg'
import portrait_halfelins from './img/halfelins/portraits/30_50.jpg'
import portrait_nains from './img/nains/portraits/40_100.jpg'
import portrait_empire from './img/empire/portraits/standard.jpg'

import bg_elfe_sylvain from './img/elfes_sylvains/bg univ_elfes.jpg'
import bg_elfe_sylvain_b from './img/elfes_sylvains/bg_musicien.jpg'
import bg_haut_elfe from './img/hauts_elfes/bg poesie.jpg'
import bg_bretonnien_a from './img/bretonniens/bg1.jpg'
import bg_bretonnien_b from './img/bretonniens/bg2.jpg'
import bg_bretonnien_c from './img/bretonniens/bg3.jpg'
import bg_bretonnien_d from './img/bretonniens/bg4.jpg'
import bg_zaporogue from './img/kislevites/bg_lettre_zapo.jpg'
import bg_zaporogue_b from './img/kislevites/bg_univ_zaporogues.jpg'
import bg_schweizer from './img/empire/bg.png'

import {
  nomCC,
  nomCT,
  nomForce,
  nomEndurance,
  nomInitiative,
  nomAgilete,
  nomDexterite,
  nomIntelligence,
  nomForceMentale,
  nomSociabilite,
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
export const nomCotHautsElfes = 'Haut elfes'
export const nomCotElfesSylvains = 'Elfes sylvains'
export const nomCotKislevites = 'Kislevites'
export const nomCotBretonniens = 'Bretonniens'
export const nomCotHalfelins = 'Halfelins'
export const nomCotNains = 'Nains'
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
    portrait: portrait_bretonnien,
    fonds: [bg_bretonnien_a, bg_bretonnien_b, bg_bretonnien_c, bg_bretonnien_d],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:La_Bretonnie',
    description:
      "La Bretonnie est l'un des plus grands royaumes du Vieux Monde. Son nom vient de celui de la plus puissante de ces tribus, les Bretonni. Sous la conduite de leur chef de guerre, Gilles le Breton, les Bretonni se regroupèrent en une seule nation. Ils s’établirent et cultivèrent les terres, sous la menace constante des tribus Orques et Gobelines. Après des siècles de luttes incessantes, les Bretonniens prirent le contrôle des vallées et des plaines fertiles, et repoussèrent leurs ennemis dans les forêts et sur les plateaux désolés, mais les guerres continuèrent contre de nouveaux ennemis. Des flottes de Morts-Vivants ravagèrent les régions côtières à l'ouest, des Skavens désolèrent les terres du sud, des pillards nordiques vinrent par-delà la Mer des Griffes et s'enfoncèrent dans les terres en remontant les fleuves, détruisant tout sur leur passage. À travers ces générations de guerres continuelles contre divers ennemis, les Bretonniens se forgèrent une héroïque tradition de chevalerie. Ce sont les Chevaliers de Bretonnie qui repoussent les forces destructrices de leurs terres paisibles. ",
  },
  {
    titre: nomCotEmpire,
    voies: [
      voieTravailleur,
      voieScientifique,
      voieIngenieur,
      voiePretre,
      voieMarchand,
    ],
    modifs_caracs: [],
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
    titre: nomCotNains,
    voies: [voieTravailleur, voiePretre],
    affiche: true,
    portrait: portrait_nains,
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
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:Nains',
    description:
      'À l’est de l’Empire s’élèvent les Montagnes du Bord du Monde. C’est là, entre les territoires de hommes et les régions désolées des Terres Sombres que se dresse l’une de plus ancienne race du monde : les Nains. Leurs domaines étaient jadis plus vastes, mais malheur à celui qui évoquera leur déclin en présence d’un Nain : Karaz Ankor est aussi résolu et vaillant que du temps de sa splendeur ! En cet âge de ténèbres, les Nains sont l’expression même de l’honneur, de la force et du courage dans un monde menacé par le Chaos.',
  },
  {
    titre: nomCotHalfelins,
    voies: [voieHommeDuMonde, voieIntellectuel, voieMagicien],
    affiche: true,
    portrait: portrait_halfelins,
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
    fonds: [bg_schweizer],
    page: 'https://bibliotheque-imperiale.com/index.php/Halfling',
    description:
      'Peuplant le Mootland, les Halflings sont des petits humanoïdes paisibles et gloutons, peu intéressés par les choses militaires. Leur taille est souvent inférieure à un mètre et varie entre 60 cm et 1,30m. Ils sont rondelets, trapus, souvent ventripotents et en aucun cas aussi puissamment bâtis que les Nains. Ils sont glabres, à part les rouflaquettes portées par les vieux et les mâles élégants mais leurs mains et leurs pieds sont couverts de poils et sont très larges pour d’aussi petites gens. Les poils des pieds sont une constante source de fierté pour tous les Halflings et ils préfèrent généralement être pieds nus, même dehors.',
  },
  {
    titre: nomCotHautsElfes,
    voies: [voieSaltimbanque, voieMagicien, voieHommeDuMonde, voieIntellectuel],
    modifs_caracs: [
      { carac: nomEndurance, val: -1 },
      { carac: nomCC, val: 1 },
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
    portrait: portrait_haut_elfe,
    fonds: [bg_haut_elfe],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:Hauts_Elfes',
    description:
      'Les Hauts Elfes (ou Asur en Eltharin) sont un peuple antique d’une grande sagesse, dont les chroniques remontent aux temps où le monde était jeune. Leurs exploits et leur civilisation étaient déjà légendaires bien avant que les tribus humaines ne fondent les royaumes du Vieux Monde. Fiers de leur noble héritage, les Hauts Elfes sont gracieux et cultivés mais inflexibles à la bataille, car ils sont passés maîtres dans l’art des armes et dans celui de la Magie et, une fois éveillée, leur colère est terrible. Depuis leur île d’Ulthuan, ils sillonnent les mers pour commercer avec les jeunes nations et pour défendre leurs terres. Très peu d’ennemi ont jamais franchi les portes de Lothern, la plus fabuleuse cité du monde, et, de ceux qui ont jamais contemplé les secrets de l’intérieur d’Ulthuan, peu sont restés en vie pour raconter ce qu’ils y ont vu.',
  },
  {
    titre: nomCotElfesSylvains,
    voies: [voieSaltimbanque, voieMagicien, voieHommeDuMonde, voieIntellectuel],
    modifs_caracs: [
      { carac: nomEndurance, val: -1 },
      { carac: nomCC, val: 1 },
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
    portrait: portrait_elfe_sylvain,
    fonds: [bg_elfe_sylvain, bg_elfe_sylvain_b],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:Elfes_Sylvains',
    description:
      'Sous les frondaisons d’Athel Loren, les Elfes Sylvains - ou Asrai, tels qu’ils sont nommés dans certaines légendes - observent le monde avec des yeux méfiants, sans jamais convoiter ce qui se trouve hors de leur domaine, ni nouer une quelconque amitié avec les étrangers. Ce sont des êtres mystérieux et secrets, qu’on ne rencontre que très rarement hors de leurs domaines et qui restent ainsi largement incompris par le reste du monde. Ainsi, depuis bien longtemps, les Elfes Sylvains ne prêtent attention au monde extérieur que lorsque celui-ci perturbe leur existence, et encore, cela ne concerne que les franges les plus jeunes et les plus âgées de leur population. Les plus jeunes sont en effet aventureux, et quittent parfois les frondaisons d’Athel Loren. Pour leur part, les plus âgés ont gagné en sagesse, et ont compris qu’en dépit de leurs aspirations, Athel Loren ne pouvait exister en totale autarcie.',
  },
  {
    titre: nomCotKislevites,
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
