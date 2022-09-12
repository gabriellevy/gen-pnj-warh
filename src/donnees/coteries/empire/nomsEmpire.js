import { getRandomInt } from '../../../utils/rand'

export function genNomEmpire(male) {
  var nom = PRENOMS_F[getRandomInt(PRENOMS_F.length)]
  if (male) nom = PRENOMS_M[getRandomInt(PRENOMS_M.length)]
  nom = nom + ' ' + NOMS[getRandomInt(NOMS.length)]
  return nom
}

const PRENOMS_F = ['Abbie']
const PRENOMS_M = ['Abelhard']
const NOMS = ['Adelhof']
