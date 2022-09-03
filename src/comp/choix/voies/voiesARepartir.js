export const idVoie1 = 'voie-1'
export const idVoie2 = 'voie-2'
export const idVoie3 = 'voie-3'
export const idVoie4 = 'voie-4'
export const idVoie5 = 'voie-5'
export const idVoie6 = 'voie-6'

export const idMetier = 'metier'
export const titreMetier = 'Spécialité'
export const idPassion = 'passion'
export const titrePassion = 'Passion'
export const idOccupation = 'occupation'
export const titreOccupation = 'Occupation secondaire'
export const idARepartir = 'arepartir'
export const titreARepartir = 'Voies disponibles à répartir'

const voiesARepartir = {
  valeurs: {
    [idVoie1]: {
      id: idVoie1,
      valeur: '',
    },
    [idVoie2]: {
      id: idVoie2,
      valeur: '',
    },
    [idVoie3]: {
      id: idVoie3,
      valeur: '',
    },
    [idVoie4]: {
      id: idVoie4,
      valeur: '',
    },
    [idVoie5]: {
      id: idVoie5,
      valeur: '',
    },
    [idVoie6]: {
      id: idVoie6,
      valeur: '',
    },
  },
  colonnes: {
    [idMetier]: {
      id: idMetier,
      titre: titreMetier,
      description: 'Métier du personnage',
      valeursIds: [],
    },
    [idPassion]: {
      id: idPassion,
      titre: titrePassion,
      description:
        'Activité qui passionne le personnage, éventuellement un second métier',
      valeursIds: [],
    },
    [idOccupation]: {
      id: idOccupation,
      titre: titreOccupation,
      description: 'Activité de loisir ou carrière abandonnée',
      valeursIds: [],
    },
    [idARepartir]: {
      id: idARepartir,
      titre: titreARepartir,
      description: '',
      valeursIds: [idVoie1, idVoie2, idVoie3, idVoie4, idVoie5, idVoie6],
    },
  },
  ordreColonnes: [idMetier, idPassion, idOccupation, idARepartir],
}

export default voiesARepartir
