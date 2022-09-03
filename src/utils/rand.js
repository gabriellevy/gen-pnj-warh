export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export const typesDes = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20']

export function resMaxDe(strDe) {
  switch (strDe) {
    case typesDes[0]:
      return 4
    case typesDes[1]:
      return 6
    case typesDes[2]:
      return 8
    case typesDes[3]:
      return 10
    case typesDes[4]:
      return 12
    case typesDes[5]:
      return 20

    default:
      return -1
  }
}
export function lancerDe(strDe) {
  switch (strDe) {
    case typesDes[0]:
      return getRandomInt(resMaxDe(strDe))
    case typesDes[1]:
      return getRandomInt(resMaxDe(strDe))
    case typesDes[2]:
      return getRandomInt(resMaxDe(strDe))
    case typesDes[3]:
      return getRandomInt(resMaxDe(strDe))
    case typesDes[4]:
      return getRandomInt(resMaxDe(strDe))
    case typesDes[5]:
      return getRandomInt(resMaxDe(strDe))

    default:
      return -1
  }
}
