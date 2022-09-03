import { getRandomInt } from '../utils/rand'
import { nomSurvie } from './lstComps'
import { nomResistance } from './lstComps'
import { nomAnimaux } from './lstComps'
import { nomMilieuRue } from './lstComps'
import { nomForce } from './lstComps'
import { nomCorpsACorps } from './lstComps'
import { nomIntimider } from './lstComps'
import { nomConvaincre } from './lstComps'
import { nomNegoce } from './lstComps'
import { nomIntuition } from './lstComps'
import { nomInvestigation } from './lstComps'
import { nomMilieuReseau } from './lstComps'
import { nomCommandement } from './lstComps'
import { nomTir } from './lstComps'
import { nomFabricationTechnique } from './lstComps'
import { nomInformatique } from './lstComps'
import { nomReparer } from './lstComps'
import { nomLoi } from './lstComps'
import { nomArt } from './lstComps'
import { nomLangues } from './lstComps'
import { nomAlchimie } from './lstComps'
import { nomArcanes } from './lstComps'
import { nomPilotage } from './lstComps'
import { nomMilieuMonde } from './lstComps'
import { nomDetrousser } from './lstComps'
import { nomDiscretion } from './lstComps'
import { nomSIntroduire } from './lstComps'
import { nomMiracles } from './lstComps'
import { nomMilieuClerge } from './lstComps'
import { nomMilieuHauteSociete } from './lstComps'
import { nomActeur } from './lstComps'
import { nomAcrobatie } from './lstComps'
import { nomMusique } from './lstComps'
import { nomScience } from './lstComps'
import { nomMedecine } from './lstComps'
import { nomArtisanat } from './lstComps'
import { nomEffort } from './lstComps'

export const voieMagicien = 'Magicien'
export const voieIntellectuel = 'Intellectuel'
export const voieHommeDuMonde = 'Homme du monde'
export const voieAventurier = 'Aventurier'
export const voieMalandrin = 'Malandrin'
export const voieMarchand = 'Marchand'
export const voieTravailleur = 'Travailleur'
export const voiePretre = 'Prêtre'
export const voieBrute = 'Brute'
export const voieEspion = 'Espion'
export const voieSaltimbanque = 'Saltimbanque'
export const voieIngenieur = 'Ingénieur'
export const voieSoldat = 'Soldat'
export const voieVoyageur = 'Voyageur'
export const voieScientifique = 'Scientifique'

export function getVoie(idVoie) {
  for (let i = 0; i < lstVoies.length; i++) {
    const voie = lstVoies[i]
    if (voie.titre === idVoie) {
      return voie
    }
  }
  return null
}

export function getEvtAleatoireVoie(idVoie, nb) {
  var voieObj = getVoie(idVoie)
  var evts = []
  if (voieObj.evts.length > 0) {
    for (let i = 0; i < nb; i++) {
      evts.push(voieObj.evts[getRandomInt(voieObj.evts.length)])
    }
  }
  return evts
}

export const lstVoies = [
  {
    titre: voieMarchand,
    deDeVie: 0,
    valeur: 0,
    richesse: 2,
    competences: [nomConvaincre, nomNegoce],
    evts: [
      {
        description: 'Import / export',
        bonusCompetence: nomLoi,
      },
      {
        description: 'Arnaqueur déguisé',
        bonusCompetence: nomActeur,
      },
      {
        description: "Marchand d'animaux",
        bonusCompetence: nomAnimaux,
      },
      {
        description: "Marchand d'art",
        bonusCompetence: nomArt,
      },
      {
        description: 'Retappeur et revendeur de meubles',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Chef de caravanes',
        bonusCompetence: nomCommandement,
      },
      {
        description: "Marchand d'informatique",
        bonusCompetence: nomInformatique,
      },
      {
        description: 'Repéreur de bourses et détrousseur',
        bonusCompetence: nomDetrousser,
      },
      {
        description: "Marchand d'instruments de musique",
        bonusCompetence: nomMusique,
      },
      {
        description: 'Vendeur itinérant (de pizza? de hot dog ?)',
        bonusCompetence: nomPilotage,
      },
      {
        description: "Marchand d'armes",
        bonusCompetence: nomTir,
      },
    ],
    description: [''],
  },
  {
    titre: voieMalandrin,
    deDeVie: 0,
    valeur: 0,
    richesse: 0,
    competences: [nomDetrousser, nomDiscretion, nomSIntroduire],
    evts: [
      {
        description: "Cambrioleur de haut vol, monte en l'air",
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Arnaqueur',
        bonusCompetence: nomActeur,
      },
      {
        description: 'Singe dressé (ou rat ou chat...)',
        bonusCompetence: nomAnimaux,
      },
      {
        description: "Voleur d'art",
        bonusCompetence: nomArt,
      },
      {
        description: 'Sait soutirer des tuyaux aux gens',
        bonusCompetence: nomConvaincre,
      },
      {
        description: "Vol à l'arraché à la brutale",
        bonusCompetence: nomCorpsACorps,
      },
      {
        description: 'Brouteur en ligne',
        bonusCompetence: nomInformatique,
      },
      {
        description: 'Tatouages de truand',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Repéreur de bons coups, apprenti fixeur',
        bonusCompetence: nomInvestigation,
      },
      {
        description: 'Repris de justice',
        bonusCompetence: nomLoi,
      },
      {
        description: 'Revendeur / receleur',
        bonusCompetence: nomNegoce,
      },
    ],
    description: [''],
  },
  {
    titre: voieAventurier,
    deDeVie: 3,
    valeur: 0,
    richesse: 0,
    competences: [nomSurvie, nomAnimaux, nomResistance],
    evts: [
      {
        description: 'Voyageur',
        bonusCompetence: nomMilieuMonde,
      },
      {
        description: 'A du escalader des arbres gigantesques en amazonie',
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Infiltre les peuples facilement',
        bonusCompetence: nomActeur,
      },
      {
        description: 'A du construire un pont dans les montagnes',
        bonusCompetence: nomEffort,
      },
      {
        description: 'Ramasseur de plantes magiques',
        bonusCompetence: nomAlchimie,
      },
      {
        description: "Chef d'expédition",
        bonusCompetence: nomCommandement,
      },
      {
        description: "Chasse à l'arme blanche, après perte de fusil",
        bonusCompetence: nomCorpsACorps,
      },
      {
        description: "Pro de l'embuscade",
        bonusCompetence: nomDiscretion,
      },
      {
        description: 'Traqueur, repéreur de traces',
        bonusCompetence: nomInvestigation,
      },
      {
        description: 'Premiers soins anti infection et maladies tropicales',
        bonusCompetence: nomMedecine,
      },
      {
        description: "Dépannage d'urgence",
        bonusCompetence: nomReparer,
      },
      {
        description: 'Chasseur',
        bonusCompetence: nomTir,
      },
    ],
    description: [
      'Baroudeur coriace, nomade, habitué aux environnements rudes et à la nature sauvage.\n',
    ],
  },
  {
    titre: voieTravailleur,
    deDeVie: 3,
    valeur: 0,
    richesse: 1,
    competences: [nomArtisanat, nomEffort],
    evts: [
      {
        description: 'Ouvrier de gratte-ciel à la défense',
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Agriculteur',
        bonusCompetence: nomAnimaux,
      },
      {
        description: 'Syndicaliste',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Ouvrier qualifié en électronique et mécanique',
        bonusCompetence: nomFabricationTechnique,
      },
      {
        description: 'Déménageur',
        bonusCompetence: nomForce,
      },
      {
        description: 'Chauffeur poids lourd',
        bonusCompetence: nomPilotage,
      },
      {
        description: 'Mécanicien',
        bonusCompetence: nomReparer,
      },
      {
        description: 'Plombier',
        bonusCompetence: nomReparer,
      },
      {
        description: 'Électricien',
        bonusCompetence: nomReparer,
      },
      {
        description: 'A travaillé sur des matières toxiques',
        bonusCompetence: nomResistance,
      },
    ],
    description: ['Ouvrier...'],
  },
  {
    titre: voieScientifique,
    deDeVie: 0,
    valeur: 0,
    richesse: 1,
    competences: [nomScience, nomMedecine],
    evts: [
      {
        description: 'Science de la magie',
        bonusCompetence: nomAlchimie,
      },
      {
        description: "Rédacteur d'articles",
        bonusCompetence: nomConvaincre,
      },
      {
        description: 'Expérimentateur en mécanique / physique',
        bonusCompetence: nomFabricationTechnique,
      },
      {
        description: 'Fait des simulations informatiques',
        bonusCompetence: nomInformatique,
      },
      {
        description: "Rafistolage lors d'expériences dangereuses",
        bonusCompetence: nomReparer,
      },
    ],
    description: [''],
  },
  {
    titre: voieSaltimbanque,
    deDeVie: 0,
    valeur: 0,
    richesse: 0,
    competences: [nomAcrobatie, nomActeur, nomMusique],
    evts: [
      {
        description: 'Maquilleur magique',
        bonusCompetence: nomAlchimie,
      },
      {
        description: 'Ours dressé',
        bonusCompetence: nomAnimaux,
      },
      {
        description: 'Illusionniste',
        bonusCompetence: nomArcanes,
      },
      {
        description: 'Costumier',
        bonusCompetence: nomArt,
      },
      {
        description: "Réparateur d'instruments",
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Monsieur loyal',
        bonusCompetence: nomConvaincre,
      },
      {
        description: 'Détrousseur du public',
        bonusCompetence: nomDetrousser,
      },
      {
        description: "Homme fort, porteur d'équilibristes",
        bonusCompetence: nomForce,
      },
      {
        description: 'Déforme son visage / cheveux / corps',
        bonusCompetence: nomIntimider,
      },
      {
        description: "Monte en l'air",
        bonusCompetence: nomSIntroduire,
      },
    ],
    description: [''],
  },
  {
    titre: voieHommeDuMonde,
    deDeVie: 0,
    valeur: 0,
    richesse: 3,
    competences: [nomMilieuHauteSociete],
    evts: [
      {
        description: 'Cosmopolite',
        bonusCompetence: nomMilieuHauteSociete,
      },
      {
        description: "Expert pour s'intégrer et se faire bien voir",
        bonusCompetence: nomActeur,
      },
      {
        description: 'A un haras',
        bonusCompetence: nomAnimaux,
      },
      {
        description: "Collectionneur d'art",
        bonusCompetence: nomArt,
      },
      {
        description: 'Grand dirigeur de domestiques',
        bonusCompetence: nomCommandement,
      },
      {
        description: 'Avocat',
        bonusCompetence: nomLoi,
      },
      {
        description: 'Musicien amateur',
        bonusCompetence: nomMusique,
      },
      {
        description: 'Investisseur',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Chasseur',
        bonusCompetence: nomTir,
      },
      {
        description: 'Scientifique amateur',
        bonusCompetence: nomScience,
      },
    ],
    description: [
      'Riche membre de la haute société. Peut-être un prince, un héritier...',
    ],
  },
  {
    titre: voiePretre,
    deDeVie: 0,
    valeur: 0,
    richesse: 0,
    competences: [nomMiracles, nomMilieuClerge],
    evts: [
      {
        description: 'Moine ouvrier',
        bonusCompetence: nomEffort,
      },
      {
        description: 'Peintre de fresques sacrées',
        bonusCompetence: nomArt,
      },
      {
        description: 'Moines se fabriquant les objets de base',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Prêcheur de sermons éclatants',
        bonusCompetence: nomConvaincre,
      },
      {
        description: 'Aura sacrée',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Organiste',
        bonusCompetence: nomMusique,
      },
    ],
    description: [''],
  },
  {
    titre: voieBrute,
    deDeVie: 4,
    valeur: 0,
    richesse: 0,
    competences: [nomMilieuRue, nomCorpsACorps, nomIntimider, nomForce],
    evts: [
      {
        description: 'Repris de justice',
        bonusCompetence: nomLoi,
      },
      {
        description: 'Cicatrices horribles',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Tatouages intimidants',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Magicien de rue (du sang ou du feu)',
        bonusCompetence: nomArcanes,
      },
      {
        description: 'Chef de bande',
        bonusCompetence: nomCommandement,
      },
      {
        description: 'Dealer de rue',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Pick pocket du dimanche',
        bonusCompetence: nomDetrousser,
      },
      {
        description: 'Agresseur de rue embusqué',
        bonusCompetence: nomDiscretion,
      },
      {
        description: 'Motard',
        bonusCompetence: nomPilotage,
      },
      {
        description: 'Endurci par la vie dans la rue',
        bonusCompetence: nomResistance,
      },
      {
        description: 'Grosse pétoire',
        bonusCompetence: nomTir,
      },
    ],
    description: [
      'Loubard qui hante les rues mal famées et règle ses comptes à coup de barre à mine.\n',
    ],
  },
  {
    titre: voieEspion,
    deDeVie: 1,
    valeur: 0,
    richesse: 0,
    competences: [nomIntuition, nomInvestigation, nomMilieuReseau],
    evts: [
      {
        description: "Spécialiste de l'espionnage depuis les toits",
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Pro du déguisement',
        bonusCompetence: nomActeur,
      },
      {
        description: 'Préparation de poison',
        bonusCompetence: nomAlchimie,
      },
      {
        description: "Formation à l'interrogatoire",
        bonusCompetence: nomConvaincre,
      },
      {
        description: 'Voleur de documents',
        bonusCompetence: nomDetrousser,
      },
      {
        description: 'Habitué des planques',
        bonusCompetence: nomDiscretion,
      },
      {
        description: 'Hacker',
        bonusCompetence: nomInformatique,
      },
      {
        description: 'Entrainement anti-interrogatoire',
        bonusCompetence: nomResistance,
      },
      {
        description: 'Effraction dans des lieux top secrets',
        bonusCompetence: nomSIntroduire,
      },
    ],
    description: ['Inclut les détectives et enquêteurs de toute sorte.\n'],
  },
  {
    titre: voieIngenieur,
    deDeVie: 0,
    valeur: 0,
    richesse: 1,
    competences: [nomInformatique, nomFabricationTechnique, nomReparer],
    evts: [
      {
        description: "Met la main à la pâte quand il s'agit de fabriquer",
        bonusCompetence: nomEffort,
      },
      {
        description:
          "Investigateur d'accidents de matériel, pour une compagnie d'assurance",
        bonusCompetence: nomInvestigation,
      },
      {
        description: 'A conçu des machines médicales',
        bonusCompetence: nomMedecine,
      },
      {
        description: 'Fan de mécanique, adore trafiquer sa voiture',
        bonusCompetence: nomPilotage,
      },
      {
        description: 'Fabriqueur de passe partout',
        bonusCompetence: nomSIntroduire,
      },
      {
        description: 'Thésard reconverti',
        bonusCompetence: nomScience,
      },
    ],
    description: [''],
  },
  {
    titre: voieIntellectuel,
    deDeVie: 0,
    valeur: 0,
    richesse: 1,
    competences: [nomLangues, nomLoi, nomArt],
    evts: [
      {
        description: 'Possède un précieux livre antique sur les potions',
        bonusCompetence: nomAlchimie,
      },
      {
        description: 'Passionné par son encyclopédie sur les animaux',
        bonusCompetence: nomAnimaux,
      },
      {
        description: "Argumenteur d'émission politique",
        bonusCompetence: nomConvaincre,
      },
      {
        description: 'Blogueur renommé',
        bonusCompetence: nomInformatique,
      },
      {
        description: 'Formation partiellement scientifique',
        bonusCompetence: nomScience,
      },
    ],
    description: [''],
  },
  {
    titre: voieMagicien,
    deDeVie: 0,
    valeur: 0,
    richesse: 0,
    competences: [nomArcanes, nomAlchimie],
    evts: [
      {
        description: 'Architecte de son jardin magique des délices',
        bonusCompetence: nomArt,
      },
      {
        description: 'Cybermage',
        bonusCompetence: nomInformatique,
      },
      {
        description: 'Incandescent, sa nature magique fait briller ses yeux',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Scientisme partiel de sa magie',
        bonusCompetence: nomScience,
      },
    ],
    description: [''],
  },
  {
    titre: voieSoldat,
    deDeVie: 3,
    valeur: 0,
    richesse: 0,
    competences: [nomCommandement, nomTir],
    evts: [
      {
        description: 'Constructeur de fortification',
        bonusCompetence: nomEffort,
      },
      {
        description: 'Cavalier des steppes',
        bonusCompetence: nomAnimaux,
      },
      {
        description: 'Fabriqueur de pièges',
        bonusCompetence: nomFabricationTechnique,
      },
      {
        description: 'Commando',
        bonusCompetence: nomSurvie,
      },
      {
        description: 'Embuscade',
        bonusCompetence: nomDiscretion,
      },
      {
        description:
          'A bougé un paqet de trucs lourds quand il était dans la logistique',
        bonusCompetence: nomForce,
      },
      {
        description: 'A été garde de ville dans un secteur tendu',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Médecin de terrain pour les premiers secours',
        bonusCompetence: nomMedecine,
      },
      {
        description: 'Conducteur de véhicule blindé',
        bonusCompetence: nomPilotage,
      },
      {
        description: "Mécano d'appoint",
        bonusCompetence: nomReparer,
      },
    ],
    description: [
      '+1 arme de tir (pistolet, fusil, fusil à pompe...) +1 armure',
    ],
  },
  {
    titre: voieVoyageur,
    deDeVie: 1,
    valeur: 0,
    richesse: 1,
    competences: [nomPilotage, nomMilieuMonde],
    evts: [
      {
        description: "S'est intéressé à la faune partout",
        bonusCompetence: nomAnimaux,
      },
      {
        description: 'Connaissance des cultures',
        bonusCompetence: nomArt,
      },
      {
        description: "Chef d'un équipage",
        bonusCompetence: nomCommandement,
      },
      {
        description: 'Contrebandier',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Journaliste',
        bonusCompetence: nomInvestigation,
      },
      {
        description:
          'Légers problèmes légaux dans différents lieux liés à sa conduite',
        bonusCompetence: nomLoi,
      },
      {
        description: 'Sait réparer sa propre machine',
        bonusCompetence: nomReparer,
      },
      {
        description: 'A visité de nombreux pays sauvages',
        bonusCompetence: nomSurvie,
      },
    ],
    description: [
      "Possède au moins un des véhicules qu'il sait conduire via sa compétence pilotage. À estimer avec le maître de jeu selon la fortune du personnage.",
    ],
  },
]
