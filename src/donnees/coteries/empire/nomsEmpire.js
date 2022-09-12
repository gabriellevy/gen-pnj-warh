import { getRandomInt } from '../../../utils/rand'

export function genNomEmpire(male) {
  var nom = PRENOMS_F[getRandomInt(PRENOMS_F.length)]
  if (male) nom = PRENOMS_M[getRandomInt(PRENOMS_M.length)]
  nom = nom + ' ' + NOMS[getRandomInt(NOMS.length)]
  return nom
}

const PRENOMS_F = [
  'Abbie',
  'Abighild',
  'Abigund',
  'Abigunda',
  'Ada',
  'Adel',
  'Adelind',
  'Adeline',
  'Adelyn',
  'Adelle',
  'Agathe',
  'Agnete',
  'Aldreda',
  'Alfreda',
  'Alicia',
  'Allane',
  'Althea',
  'Amalie',
  'Amalinde',
  'Amalyn',
  'Anhilda',
  'Annabella',
  'Anna',
  'Anthea',
  'Arabella',
  'Astrid',
  'Bechilda',
  'Bella',
  'Bellane',
  'Benedicta',
  'Berlinda',
  'Berlyn',
  'Bertha',
  'Berthilda',
  'Bess',
  'Beth',
  'Broncea',
  'Brunhilda',
  'Camilla',
  'Carla',
  'Carlinda',
  'Carlotta',
  'Cilicia',
  'Cilie',
  'Clora',
  'Clothilda',
  'Connie',
  'Constance',
  'Constanza',
  'Cordelia',
  'Dema',
  'Demona',
  'Desdemona',
  'Dorthilda',
  'Drachena',
  'Drachilda',
  'Edhilda',
  'Edith',
  'Edyth',
  'Edythe',
  'Eleanor',
  'Elinor',
  'Elisinda',
  'Elsina',
  'Ella',
  'Ellene',
  'Ellinde',
  'Eloise',
  'Elsa',
  'Elsbeth',
  'Elspeth',
  'Elyn',
  'Emagunda',
  'Emelia',
  'Emme',
  'Emmalyn',
  'Emmanuel',
  'Emerlinde',
  'Emerlyn',
  'Erica',
  'Ermina',
  'Erminlid',
  'Ermintrude',
  'Esmeralda',
  'Estelle',
  'Etheldreda',
  'Ethelind',
  'Ethelreda',
  'Fay',
  'Frieda',
  'Friedhilda',
  'Friedrun',
  'Friedrica',
]
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
  'Godtgraf',
  'Grunenwald',
  'Guth',
  'Haintz',
  'Herz',
  'Herzog',
  'Hirtzel',
  'Hoch',
  'Hoefer',
  'Hofstetter',
  'Jaeger',
  'Jochutz',
  'Jutzenbach',
  'Kalb',
  'Kaltenbach',
  'Kraemer',
  'Krebs',
  'Kuhn',
  'Kummel',
  'Konig',
  'Konigsamen',
  'Lang',
  'Lankdorf',
  'Liess',
  'Lebengut',
  'Lutzen',
  'Machholt',
  'Meusmann',
  'Meyer',
  'Mohr',
  'Muller',
  'Nachtmann',
  'Naubhof',
  'Netzhoch',
  'Neumann',
  'Niederlitz',
  'Nuhr',
  'Oberholtzer',
  'Ohrsten',
  'Otzlowe',
  'Reichert',
  'Reifsneider',
  'Riese',
  'Rohrig',
  'Reiss',
  'Schaffer',
  'Schaumer',
  'Scherer',
  'Schultz',
  'Schleirmacher',
  'Schreiber',
  'Schwalb',
  'Steiner',
  'Tabbeck',
  'Teuber',
  'Tolzen',
  'Trachsel',
  'Weber',
  'Wechsler',
  'Wirtz',
  'Widmann',
  'Zumwald',
  'Widmer',
  'Veit',
  'Vogt',
  'Vogel',
]
