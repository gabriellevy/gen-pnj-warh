import {
  nomCharisme,
  nomConstitution,
  nomDexterite,
  nomIntelligence,
  nomMagie,
  nomSensibilite,
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
  },
  colonnes: {
    dexterite: {
      id: 'dexterite',
      titre: nomDexterite,
      description: 'description Dextérité',
      valeursIds: [],
    },
    constitution: {
      id: 'constitution',
      titre: nomConstitution,
      description:
        'Puissance physique au sens large : résistance, endurance, force...',
      valeursIds: [],
    },
    charisme: {
      id: 'charisme',
      titre: nomCharisme,
      description: 'description Charisme',
      valeursIds: [],
    },
    intelligence: {
      id: 'intelligence',
      titre: nomIntelligence,
      description: 'description Intelligence',
      valeursIds: [],
    },
    sensibilite: {
      id: 'sensibilite',
      titre: nomSensibilite,
      description:
        'Perception au sens large, inclut :\n     - la finesse des sens\n     - la perception de la magie\n     - la perception psychologique',
      valeursIds: [],
    },
    magie: {
      id: 'magie',
      titre: nomMagie,
      description: 'description Magie',
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
      ],
    },
  },
  ordreColonnes: [
    'dexterite',
    'constitution',
    'charisme',
    'intelligence',
    'sensibilite',
    'magie',
    'tirages',
  ],
}

export default tiragesInitiaux
