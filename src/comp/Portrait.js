import '../styles/Portrait.css'
import { lstPortraits } from '../donnees/lstPortraits'
import { getRandomInt } from '../utils/rand'
import { useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'

function getPortraits(perso, prendreEnCompteCoterie) {
  const portraitsRestants = lstPortraits
    .filter(
      (portrait) =>
        (!prendreEnCompteCoterie && portrait.coterie === undefined) ||
        (portrait.coterie !== undefined && perso.coterie === portrait.coterie)
    )
    .filter((portrait) => perso.male === portrait.male)
    .filter(
      (portrait) =>
        portrait.ageMin === undefined || perso.age >= portrait.ageMin
    )
    .filter(
      (portrait) =>
        portrait.ageMax === undefined || perso.age <= portrait.ageMax
    )
  return portraitsRestants
}

// génère un portrait selonles données de personnage fournies => mis à jour chaque fois que le personnage change
function Portrait() {
  const { perso } = useContext(PersoContexte)

  // filtrage des portraits dispos selon les caracs de persos

  var portraitsRestants = getPortraits(perso, true)
  if (portraitsRestants.length === 0)
    portraitsRestants = getPortraits(perso, false)

  var portrait
  if (portraitsRestants.length > 0)
    portrait = portraitsRestants[getRandomInt(portraitsRestants.length)].image

  return (
    <div className="zonePortrait">
      {portraitsRestants.length > 0 ? (
        <img className="portrait_img" src={portrait} alt="portrait" />
      ) : (
        <div>Pas de portrait pour ce perso</div>
      )}
    </div>
  )
}

export default Portrait
