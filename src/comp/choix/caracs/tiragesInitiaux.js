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
} from '../../../donnees/lstCaracs'

const tiragesInitiaux = {
  valeurs: {
    'tirage-1': {
      id: 'tirage-1',
      valeur: -1,
    },
    'tirage-2': {
      id: 'tirage-2',
      valeur: -1,
    },
    'tirage-3': {
      id: 'tirage-3',
      valeur: -1,
    },
    'tirage-4': {
      id: 'tirage-4',
      valeur: -1,
    },
    'tirage-5': {
      id: 'tirage-5',
      valeur: -1,
    },
    'tirage-6': {
      id: 'tirage-6',
      valeur: -1,
    },
    'tirage-7': {
      id: 'tirage-7',
      valeur: -1,
    },
    'tirage-8': {
      id: 'tirage-8',
      valeur: -1,
    },
    'tirage-9': {
      id: 'tirage-9',
      valeur: -1,
    },
    'tirage-10': {
      id: 'tirage-10',
      valeur: -1,
    },
  },
  colonnes: {
    cc: {
      id: 'cc',
      titre: nomCC,
      description: 'Capacité de combat',
      valeursIds: [],
    },
    ct: {
      id: 'ct',
      titre: nomCT,
      description: 'Capacité de tir',
      valeursIds: [],
    },
    force: {
      id: 'force',
      titre: nomForce,
      description: 'force',
      valeursIds: [],
    },
    endurance: {
      id: 'endurance',
      titre: nomEndurance,
      description: 'endurance',
      valeursIds: [],
    },
    initiative: {
      id: 'initiative',
      titre: nomInitiative,
      description: 'initiative',
      valeursIds: [],
    },
    agilete: {
      id: 'agilete',
      titre: nomAgilete,
      description: 'Agileté',
      valeursIds: [],
    },
    dexterite: {
      id: 'dexterite',
      titre: nomDexterite,
      description: 'Dextérité',
      valeursIds: [],
    },
    intelligence: {
      id: 'intelligence',
      titre: nomIntelligence,
      description: 'intelligence',
      valeursIds: [],
    },
    force_mentale: {
      id: 'force_mentale',
      titre: nomForceMentale,
      description: 'force mentale',
      valeursIds: [],
    },
    sociabilite: {
      id: 'sociabilite',
      titre: nomSociabilite,
      description: 'Sociabilité',
      valeursIds: [],
    },
    tirages: {
      id: 'tirages',
      titre: 'Tirages',
      description: 'Valeurs à répartir dans les caracs',
      valeursIds: [
        'tirage-1',
        'tirage-2',
        'tirage-3',
        'tirage-4',
        'tirage-5',
        'tirage-6',
        'tirage-7',
        'tirage-8',
        'tirage-9',
        'tirage-10',
      ],
    },
  },
  ordreColonnes: [
    'cc',
    'ct',
    'force',
    'endurance',
    'initiative',
    'agilete',
    'dexterite',
    'intelligence',
    'force_mentale',
    'sociabilite',
  ],
}

export default tiragesInitiaux
