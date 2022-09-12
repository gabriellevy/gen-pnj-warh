import { getRandomInt } from '../../../utils/rand'

export function genNomEmpire(male) {
  var nom = PRENOMS_F[getRandomInt(PRENOMS_F.length)]
  if (male) nom = PRENOMS_M[getRandomInt(PRENOMS_M.length)]
  nom = nom + ' ' + NOMS[getRandomInt(NOMS.length)]
  return nom
}

const PRENOMS_F = ['Abbie']
const PRENOMS_M = ['Abelhard']
const NOMS = [
  'Adelhof',
  'Albrecht',
  'Allenstag',
  'Altmann',
  'Atzwig',
  'Bacher',
  'Baer',
  'Baumann',
  'Becker',
  'Behn',
  'Betz',
  'Beyer',
  'Bischof',
  'Boehm',
  'Breitenbach',
  'Breuer',
  'Dahmbach',
  'Delfholt',
  'Drakenhof',
  'Drauwulf',
  'Durrbein',
  'Ehrhard',
  'Eisenhauer',
  'Eschlimann',
  'Falkenheim',
  'Fehr',
  'Fiegler',
  'Fleischer',
  'Frohlich',
  'Frueh',
  'Fuchs',
  'Gaffwig',
  'Gaertner',
  'Gebauer',
]
