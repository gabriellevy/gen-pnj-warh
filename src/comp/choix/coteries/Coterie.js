import '../../../styles/Coterie.css'
import { getRandomInt } from '../../../utils/rand'
import { useContext } from 'react'
import { PersoContexte } from '../../../utils/contexte/perso'
import {
  nomCotBretonniens,
  nomCotConquistadors,
  nomCotHautsElfes,
  nomCotElfesSylvains,
  nomCotKislevites,
  nomCotHalfelins,
  nomCotNains,
  nomCotEmpire,
} from '../../../donnees/lstCoteries'

function Coterie({
  titre,
  portrait,
  niveau_richesse,
  fonds,
  description,
  page,
  voies,
  modifs_caracs,
  modifs_comps,
  objets,
}) {
  const { perso, setPerso } = useContext(PersoContexte)

  function appliquerSelection() {
    var fond = fonds[getRandomInt(fonds.length)]

    // mettre à jour des caracs selon la coterie actuelle
    var age = getRandomInt(60) + 15 // pour un humain classique
    if (titre === nomCotNains) {
      age = getRandomInt(600) + 15
    }

    var changementsAuPerso = {
      fond: fond,
      age: age,
      coterie: titre, // titre de coterie
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  var selection = perso.coterie === titre

  return (
    <li
      className={selection ? 'lstCoteries_li_selection' : 'lstCoteries_li'}
      id={titre}
      onClick={() => appliquerSelection()}
    >
      <img
        className="lstCoteries_img"
        src={portrait}
        alt={`${titre} portrait`}
      />
      <div>
        <button
          className={selection ? 'boutonCoterie_selection' : 'boutonCoterie'}
        >
          {titre}
        </button>
      </div>
    </li>
  )
}

export default Coterie
